import checkCollection from '../utils/checkCollection';
import isArray from '../utils/isArray';

export default (collection, ...sources) => {
  checkCollection(collection);

  if (isArray(collection)) {
    return sources.forEach(s => Array.prototype.push.apply(collection, s));
  }

  return Object.assign(collection, ...sources);
};
