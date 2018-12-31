import isArr from './utils/isArr';
import isMap from './utils/isMap';
import isPlainObj from './utils/isPlainObj';
import isSet from './utils/isSet';

export default value => {
  if (isPlainObj(value)) {
    return Object.assign({}, value);
  }
  if (isArr(value)) {
    return value.slice();
  }
  if (isMap(value)) {
    return new Map(value);
  }
  if (isSet(value)) {
    return new Set(value);
  }

  return value;
};
