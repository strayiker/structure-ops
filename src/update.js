import checkKeyed from './utils/checkKeyed';
import updateIn from './updateIn';

export default (collection, key, updater) => {
  checkKeyed(collection, key);
  return updateIn(collection, [key], updater);
};
