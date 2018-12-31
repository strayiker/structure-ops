import VOID from './utils/void';
import castPath from './utils/castPath';
import get from './get';

export default (collection, stringOrPath, defaultValue) => {
  const path = castPath(stringOrPath, collection);

  path.find(key => {
    // eslint-disable-next-line no-param-reassign
    collection = get(collection, key, VOID);
    return collection === VOID;
  });

  return collection !== VOID ? collection : defaultValue;
};
