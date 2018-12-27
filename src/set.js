import checkCollection from './utils/checkCollection';
import hasOwnProperty from './utils/hasOwnProperty';
import copy from './copy';

export default (collection, key, value) => {
  checkCollection(collection);

  let res = collection;

  if (process.env.IMMUTABLE) {
    if (hasOwnProperty.call(collection, key) && value === collection[key]) {
      return res;
    }

    res = copy ? copy(collection) : collection;
  }

  res[key] = value;

  return res;
};
