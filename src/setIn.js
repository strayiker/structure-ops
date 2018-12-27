import updateIn from './updateIn';

export default (collection, strOrPath, value) =>
  updateIn(collection, strOrPath, () => value);
