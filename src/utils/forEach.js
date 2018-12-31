export default (collection, cb) => {
  if (typeof collection.forEach === 'function') {
    collection.forEach(cb);
    return;
  }

  Object.keys(collection).forEach(key => cb(collection[key], key, collection));
};
