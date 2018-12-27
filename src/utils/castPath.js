import isArray from './isArray';
import stringToPath from './stringToPath';
import isDataStructure from './isDataStructure';
import hasOwnProperty from './hasOwnProperty';

export default (value, collection) => {
  if (isArray(value)) {
    return value;
  }

  return isDataStructure(collection) && hasOwnProperty.call(collection, value)
    ? [value]
    : stringToPath(value);
};
