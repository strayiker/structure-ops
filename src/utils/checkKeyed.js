import invariant from './invariant';
import isArr from './isArr';
import isArrIndex from './isArrIndex';
import isKeyed from './isKeyed';

export default (collection, key) => {
  invariant(
    isKeyed(collection),
    process.env.NODE_ENV !== 'production'
      ? `Unable to set/update/remove property "${key}" of non-keyed collection ${collection}.`
      : ''
  );

  if (isArr(collection)) {
    invariant(
      isArrIndex(key),
      process.env.NODE_ENV !== 'production'
        ? `Unable to set/update/remove named property "${key}" to array like collection ${collection}`
        : ''
    );
  }
};
