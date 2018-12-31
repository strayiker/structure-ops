/** Used to detect unsigned integer values. */
const uintRegex = /^(?:0|[1-9]\d*)$/;

export default value => {
  const type = typeof value;

  return (
    // is unsigned number
    (type === 'number' || (type !== 'symbol' && uintRegex.test(value))) &&
    // is positive integer
    (value > -1 && value % 1 === 0)
  );
};
