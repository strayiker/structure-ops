import updateIn from '../updateIn';
import merge from './merge';

export default (collection, strOrPath, ...sources) =>
  updateIn(collection, strOrPath, value => merge(value, ...sources));
