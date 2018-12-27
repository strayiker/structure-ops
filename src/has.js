import isObjectLike from './utils/isObjectLike';
import hasOwnProperty from './utils/hasOwnProperty';

export default (collection, key) =>
  isObjectLike(collection) && hasOwnProperty.call(collection, key);
