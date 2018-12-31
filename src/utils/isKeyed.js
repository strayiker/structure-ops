import isArr from './isArr';
import isMap from './isMap';
import isPlainObj from './isPlainObj';

export default value => isPlainObj(value) || isArr(value) || isMap(value);
