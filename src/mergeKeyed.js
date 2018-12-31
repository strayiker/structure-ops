import forEach from './utils/forEach';
import setKeyed from './setKeyed';
import copy from './copy';
import get from './get';

export default (target, source, shouldCopy, mergeDeep) => {
  forEach(source, (v, key) => {
    const value = get(target, key);
    const newValue = get(source, key);

    if (value !== newValue) {
      if (process.env.IMMUTABLE) {
        if (shouldCopy(target)) {
          // we should copy collection once before the first mutation
          // eslint-disable-next-line no-param-reassign
          target = copy(target);
        }
      }

      setKeyed(target, key, mergeDeep ? mergeDeep(value, newValue) : newValue);
    }
  });

  return target;
};
