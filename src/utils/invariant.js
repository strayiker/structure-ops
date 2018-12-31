export default (c, message) => {
  if (!c) {
    throw new TypeError(message);
  }
};
