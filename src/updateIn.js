import checkCollection from './utils/checkCollection';
import isDataStructure from './utils/isDataStructure';
import isArrayIndex from './utils/isArrayIndex';
import castPath from './utils/castPath';
import VOID from './utils/void';
import get from './get';
import remove from './remove';
import set from './set';

const updateDeep = (collection, path, index, lastIndex, updater) => {
  const key = path[index];
  const oldValue = get(collection, key);

  let newValue = oldValue;

  if (index === lastIndex) {
    newValue = updater(oldValue);
  } else {
    if (!isDataStructure(oldValue)) {
      newValue = isArrayIndex(path[index + 1]) ? [] : {};
    }

    newValue = updateDeep(newValue, path, index + 1, lastIndex, updater);
  }

  return newValue === VOID
    ? remove(collection, key)
    : set(collection, key, newValue);
};

export default (collection, strOrPath, updater) => {
  checkCollection(collection);

  const path = castPath(strOrPath, collection);
  return updateDeep(collection, path, 0, path.length - 1, updater);
};
