import checkKeyed from './utils/checkKeyed';
import isArr from './utils/isArr';
import isMap from './utils/isMap';
import isSet from './utils/isSet';
import copy from './copy';
import has from './has';

export default (collection, key) => {
  checkKeyed(collection, key);

  if (!has(collection, key)) {
    return collection;
  }

  if (process.env.IMMUTABLE) {
    // eslint-disable-next-line no-param-reassign
    collection = copy(collection);
  }

  if (isArr(collection)) {
    collection.splice(key, 1);
  } else if (isMap(collection) || isSet(collection)) {
    collection.delete(key);
  } else {
    // eslint-disable-next-line no-param-reassign
    delete collection[key];
  }

  return collection;
};
