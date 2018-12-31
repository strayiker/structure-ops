import isArr from './utils/isArr';
import isDataStructure from './utils/isDataStructure';
import isSet from './utils/isSet';
import mergeArr from './mergeArr';
import mergeSet from './mergeSet';
import mergeKeyed from './mergeKeyed';
import updateIn from './updateIn';

const mergeBase = (original, mergeNested, target, source) => {
  const shouldCopy = t => t === original;

  if (!isDataStructure(target) || !isDataStructure(source)) {
    return source;
  }

  if (isArr(target)) {
    return mergeArr(target, source, shouldCopy);
  }

  if (isSet(target)) {
    return mergeSet(target, source, shouldCopy);
  }

  return mergeKeyed(target, source, shouldCopy, mergeNested);
};

export function merge(collection) {
  const sources = [].slice.call(arguments, 1);
  return sources.reduce(mergeBase.bind(null, collection, null), collection);
}

export function mergeDeep(collection) {
  const sources = [].slice.call(arguments, 1);
  return sources.reduce(
    mergeBase.bind(null, collection, mergeDeep),
    collection
  );
}

export function mergeIn(collection, strOrPath) {
  const sources = [].slice.call(arguments, 2);
  return updateIn(collection, strOrPath, value => merge(value, ...sources));
}
