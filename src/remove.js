import checkCollection from './utils/checkCollection';
import isArray from './utils/isArray';
import hasOwnProperty from './utils/hasOwnProperty';
import copy from './copy';

export default (collection, key) => {
  checkCollection(collection);

  let res = collection;

  if (!hasOwnProperty.call(res, key)) {
    return res;
  }

  if (process.env.IMMUTABLE) {
    res = copy(collection);
  }

  if (isArray(res)) {
    res.splice(key, 1);
  } else {
    delete res[key];
  }

  return res;
};
