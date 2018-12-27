export default value =>
  value && (value.constructor === Object || value.constructor === undefined);
