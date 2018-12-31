import set from '../set';

describe('set()', () => {
  it('immutable -> should set value at key', () => {
    process.env.IMMUTABLE = true;

    const obj = {};
    const arr = [];
    const map = new Map();
    const res1 = set(obj, 'a', 1);
    const res2 = set(arr, 2, 1);
    const res3 = set(map, 'a', 1);

    expect(res1).toEqual({ a: 1 });
    expect(obj).toEqual({});
    expect(obj).not.toBe(res1);

    expect(res2).toEqual([undefined, undefined, 1]);
    expect(arr).toEqual([]);
    expect(arr).not.toBe(res2);

    expect(res3).toEqual(new Map([['a', 1]]));
    expect(map).toEqual(new Map());
    expect(map).not.toBe(res3);

    delete process.env.IMMUTABLE;
  });

  it("immutable -> shouldn't copy collection if value is the same", () => {
    process.env.IMMUTABLE = true;

    const obj = { a: 1 };
    const res = set(obj, 'a', 1);

    expect(res).toEqual({ a: 1 });
    expect(res).toBe(obj);

    delete process.env.IMMUTABLE;
  });

  it('mutable -> should set value at key', () => {
    const obj = {};
    const arr = [];
    const map = new Map();
    const res1 = set(obj, 'a', 1);
    const res2 = set(arr, 2, 1);
    const res3 = set(map, 'a', 1);

    expect(res1).toEqual({ a: 1 });
    expect(obj).toBe(res1);

    expect(res2).toEqual([undefined, undefined, 1]);
    expect(arr).toBe(res2);

    expect(res3).toEqual(new Map([['a', 1]]));
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

    invalid.forEach(v => expect(() => set(v, 'a', 1).toThrow()));
  });

  it('should throw on attempt to set named prop to an array colection', () => {
    expect(() => set([], 'a', 1).toThrow());
  });
});
