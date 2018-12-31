export default value =>
  value &&
  (value.constructor === Object || typeof value.constructor === 'undefined');
