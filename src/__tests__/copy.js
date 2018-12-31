import copy from '../copy';

describe('copy()', () => {
  it('should create shalow copy of the collection', () => {
    const obj = { a: { b: 0 } };
    const arr = [[0]];
    const set = new Set([[0]]);
    const map = new Map([['a', { b: 0 }]]);

    const objCopy = copy(obj);
    const arrCopy = copy(arr);
    const setCopy = copy(set);
    const mapCopy = copy(map);

    expect(obj).not.toBe(objCopy);
    expect(obj).toEqual(objCopy);

    expect(arr).not.toBe(arrCopy);
    expect(arr).toEqual(arrCopy);

    expect(set).not.toBe(setCopy);
    expect(set).toEqual(setCopy);

    expect(map).not.toBe(mapCopy);
    expect(map).toEqual(mapCopy);
  });

  it("should't create copy of non-collection values", () => {
    const invalid = [() => {}, new Date(), Boolean(false), Symbol('')];

    invalid.forEach(v => expect(v).toBe(copy(v)));
  });
});
