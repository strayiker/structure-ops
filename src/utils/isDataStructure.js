import isArr from './isArr';
import isMap from './isMap';
import isPlainObj from './isPlainObj';
import isSet from './isSet';

export default value =>
  isPlainObj(value) || isArr(value) || isMap(value) || isSet(value);
