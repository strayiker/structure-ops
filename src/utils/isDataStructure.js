import isArrayLike from './isArrayLike';
import isPlainObject from './isPlainObject';

export default value => isArrayLike(value) || isPlainObject(value);
