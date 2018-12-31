import isArr from './isArr';
import stringToPath from './stringToPath';
import has from '../has';

export default (value, collection) => {
  if (has(collection, value)) {
    return [value];
  }

  return isArr(value) ? value : stringToPath(value);
};
