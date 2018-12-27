import updateIn from './updateIn';
import VOID from './utils/void';

export default (collection, strOrPath) =>
  updateIn(collection, strOrPath, () => VOID);
