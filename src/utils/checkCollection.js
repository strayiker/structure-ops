import isDataStructure from './isDataStructure';

export default collection => {
  if (isDataStructure(collection)) {
    return;
  }

  throw new TypeError(`Cannot update non-data-structure value: ${collection}`);
};
