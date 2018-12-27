import updateIn from './updateIn';

export default (collection, key, updater) =>
  updateIn(collection, [key], updater);
