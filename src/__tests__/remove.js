import remove from '../remove';

describe('remove()', () => {
  it('immutable -> should remove value at key', () => {
    process.env.IMMUTABLE = true;

    const obj = { a: 1 };
    const arr = [1];
    const map = new Map([['a', 1]]);
    const res1 = remove(obj, 'a');
    const res2 = remove(arr, 0);
    const res3 = remove(map, 'a');

    expect(res1).toEqual({});
    expect(obj).toEqual({ a: 1 });
    expect(obj).not.toBe(res1);

    expect(res2).toEqual([]);
    expect(arr).toEqual([1]);
    expect(arr).not.toBe(res2);

    expect(res3).toEqual(new Map());
    expect(map).toEqual(new Map([['a', 1]]));
    expect(map).not.toBe(res3);

    delete process.env.IMMUTABLE;
  });

  it('mutable -> should remove value at key', () => {
    const obj = { a: 1 };
    const arr = [1];
    const map = new Map([['a', 1]]);
    const res1 = remove(obj, 'a');
    const res2 = remove(arr, 0);
    const res3 = remove(map, 'a');

    expect(res1).toEqual({});
    expect(obj).toBe(res1);

    expect(res2).toEqual([]);
    expect(arr).toBe(res2);

    expect(res3).toEqual(new Map());
    expect(map).toBe(res3);
  });

  it('should throw if non-collection value was provided', () => {
    const invalid = [
      1,
      '',
      true,
      false,
      undefined,
      null,
      NaN,
      () => {},
      new Date(),
    ];

    invalid.forEach(v => expect(() => remove(v, 'a', 1).toThrow()));
  });

  it('should throw on attempt to remove named prop from an array colection', () => {
    expect(() => remove([], 'a', 1).toThrow());
  });
});
