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

const prodPlugins = [
  terser({
    mangle: { module: true },
    sourcemap: true,
  }),
];

const plugins = ({ immutable, prod }) => [
  babel(),
  sourceMaps(),
  replace({
    'process.env.IMMUTABLE': JSON.stringify(immutable),
    'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development'),
  }),
  ...(prod ? prodPlugins : []),
];

const config = ({ immutable = false, prod = false, format = cjs } = {}) => {
  const env = prod ? '' : 'dev.';
  const immut = immutable ? 'immutable.' : '';
  const prefix = `dist/structure-ops.${immut}${env}`;

  return {
    input: './src/index.js',
    output: [format({ file: `${prefix}cjs.js` })],
    plugins: plugins({ immutable, prod }),
  };
};

export default [
  config(),
  config({ prod: true }),
  config({ immutable: true }),
  config({ immutable: true, prod: true }),
];
