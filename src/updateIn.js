import VOID from './utils/void';
import castPath from './utils/castPath';
import isArrIndex from './utils/isArrIndex';
import isKeyed from './utils/isKeyed';
import get from './get';
import remove from './remove';
import set from './set';

const updateDeep = (collection, path, index, lastIndex, updater) => {
  const key = path[index];
  const oldValue = get(collection, key);
  const canGoDeep = isKeyed(oldValue);

  let next = oldValue;

  if (index >= lastIndex) {
    next = typeof updater === 'function' ? updater(oldValue) : updater;
  } else {
    if (!canGoDeep) {
      if (updater === VOID) {
        return collection;
      }
      next = isArrIndex(path[index + 1]) ? [] : {};
    }
    next = updateDeep(next, path, index + 1, lastIndex, updater);
  }

  return next === VOID ? remove(collection, key) : set(collection, key, next);
};

export default (collection, strOrPath, updater) => {
  const path = castPath(strOrPath, collection);

  return path.length > 0
    ? updateDeep(collection, path, 0, path.length - 1, updater)
    : collection;
};
