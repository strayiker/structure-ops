import isMap from './utils/isMap';
import isSet from './utils/isSet';

export default (collection, key) =>
  isMap(collection) || isSet(collection)
    ? collection.has(key)
    : collection && {}.hasOwnProperty.call(collection, key);
