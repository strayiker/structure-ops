/* eslint-disable import/no-extraneous-dependencies */
import babel from 'rollup-plugin-babel';
import sourceMaps from 'rollup-plugin-sourcemaps';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';

const cjs = (overrides = {}) => ({
  exports: 'named',
  format: 'cjs',
  sourcemap: true,
  ...overrides,
});

const esm = (overrides = {}) => ({
  format: 'esm',
  sourcemap: true,
  ...overrides,
});

const plugins = ({ immutable = false, minimize = false } = {}) =>
  [
    sourceMaps(),
    babel(),
    replace({
      'process.env.IMMUTABLE': JSON.stringify(immutable),
    }),
    minimize &&
      terser({
        sourcemap: true,
      }),
  ].filter(Boolean);

const mutable = {
  input: './src/index.js',
  output: [
    cjs({ file: 'dist/structure-ops.cjs.js' }),
    esm({ file: 'dist/structure-ops.esm.js' }),
  ],
  plugins: plugins(),
};

const immutable = {
  input: './src/index.immutable.js',
  output: [
    cjs({ file: 'dist/structure-ops.immutable.cjs.js' }),
    esm({ file: 'dist/structure-ops.immutable.esm.js' }),
  ],
  plugins: plugins({ immutabl: true }),
};

const standalone = {
  input: './src/index.js',
  output: {
    file: 'dist/structure-ops.min.js',
    format: 'umd',
    name: 'structure',
    sourcemap: true,
  },
  plugins: plugins({ minimize: true }),
};

const standaloneImmutable = {
  input: './src/index.immutable.js',
  output: {
    file: 'dist/structure-ops.immutable.min.js',
    format: 'umd',
    name: 'structure',
    sourcemap: true,
  },
  plugins: plugins({ immutable: true, minimize: true }),
};

export default [mutable, immutable, standalone, standaloneImmutable];
