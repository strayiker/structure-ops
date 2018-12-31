import forEach from './utils/forEach';
import copy from './copy';

export default (target, source, shouldCopy) => {
  if (process.env.IMMUTABLE) {
    if (shouldCopy(target)) {
      // we should copy collection once before the first mutation
      // eslint-disable-next-line no-param-reassign
      target = copy(target);
    }
  }

  forEach(source, value => target.push(value));

  return target;
};
