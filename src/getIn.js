import castPath from './utils/castPath';
import VOID from './utils/void';
import get from './get';

export default (collection, stringOrPath, defaultValue) => {
  const path = castPath(stringOrPath, collection);

  let result = collection;

  for (let i = 0; i < path.length; i += 1) {
    result = get(result, path[i], VOID);

    if (result === VOID) {
      return defaultValue;
    }
  }

  return result;
};
