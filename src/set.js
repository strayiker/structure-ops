import checkKeyed from './utils/checkKeyed';
import setKeyed from './setKeyed';
import copy from './copy';
import get from './get';

export default (collection, key, value) => {
  checkKeyed(collection, key);

  if (process.env.IMMUTABLE) {
    if (get(collection, key) === value) {
      return collection;
    }
    // eslint-disable-next-line no-param-reassign
    collection = copy(collection);
  }

  return setKeyed(collection, key, value);
};
