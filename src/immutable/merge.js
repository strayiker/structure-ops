import checkCollection from '../utils/checkCollection';
import isArray from '../utils/isArray';
import isArrayLike from '../utils/isArrayLike';
import has from '../has';
import copy from '../copy';

const mergeArr = (a, b, shouldCopy) =>
  shouldCopy(a) ? [...a, ...b] : Array.prototype.push.apply(a, b);

const mergeKeyed = (a, b, shouldCopy) => {
  let merged = a;
  const keys = isArrayLike(a) ? b.keys() : Object.keys(b);

  keys.forEach(key => {
    const value = b[key];

    if (!has(a, key) || value !== a[key]) {
      if (shouldCopy(merged)) {
        merged = copy(a);
      }

      merged[key] = value;
    }
  });

  return merged;
};

export default (collection, ...sources) => {
  checkCollection(collection);

  const shouldCopy = m => m === collection;

  let merged = collection;
  let merge;

  if (isArray(collection)) {
    merge = mergeArr;
  } else {
    merge = mergeKeyed;
  }

  for (let i = 0; i < sources.length; i += 1) {
    merged = merge(merged, sources[i], shouldCopy);
  }

  return merged;
};
