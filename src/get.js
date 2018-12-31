import has from './has';
import isMap from './utils/isMap';
import isSet from './utils/isSet';

export default (collection, key, defaultValue) => {
  if (!has(collection, key)) {
    return defaultValue;
  }

  if (isMap(collection)) {
    return collection.get(key);
  }

  if (isSet(collection)) {
    return key;
  }

  return collection[key];
};
