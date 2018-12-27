import VOID from './utils/void';
import getIn from './getIn';

export default (collection, strOrPath) =>
  getIn(collection, strOrPath, VOID) !== VOID;
