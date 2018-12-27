import checkCollection from '../utils/checkCollection';
import isArray from '../utils/isArray';

export default (collection, ...sources) => {
  checkCollection(collection);

  if (isArray(collection)) {
    return Array.prototype.push.apply(collection, ...sources);
  }

  return Object.assign(collection, ...sources);
};
