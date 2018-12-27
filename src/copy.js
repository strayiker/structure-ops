import isArray from './utils/isArray';
import isObjectLike from './utils/isObjectLike';
import isMap from './utils/isMap';
import isSet from './utils/isSet';

export default value => {
  if (isArray(value)) {
    return Object.assign(value.constructor(value.length), value);
  }
  if (isMap(value)) {
    return new Map(value);
  }
  if (isSet(value)) {
    return new Set(value);
  }
  if (isObjectLike(value)) {
    const prototype = value.constructor && value.constructor.prototype;
    return Object.assign(Object.create(prototype || null), value);
  }

  return value;
};
