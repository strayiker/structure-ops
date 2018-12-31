import isMap from './utils/isMap';

export default (collection, key, value) => {
  if (isMap(collection)) {
    collection.set(key, value);
  } else {
    // eslint-disable-next-line no-param-reassign
    collection[key] = value;
  }

  return collection;
};
