import has from './has';

export default (collection, key, defaultValue) =>
  has(collection, key) ? collection[key] : defaultValue;
