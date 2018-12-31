import update from '../update';

describe('update()', () => {
  it('immutable -> should update value at key', () => {
    process.env.IMMUTABLE = true;

    const o = { a: 0 };
    const a = [0];
    const m = new Map([['a', 0]]);
    const res1 = update(o, 'a', v => v + 1);
    const res2 = update(a, 0, v => v + 1);
    const res3 = update(m, 'a', v => v + 1);

    expect(res1).toEqual({ a: 1 });
    expect(o).toEqual({ a: 0 });
    expect(o).not.toBe(res1);

    expect(res2).toEqual([1]);
    expect(a).toEqual([0]);
    expect(a).not.toBe(res2);

    expect(res3).toEqual(new Map([['a', 1]]));
    expect(m).toEqual(new Map([['a', 0]]));
    expect(m).not.toBe(res3);

    delete process.env.IMMUTABLE;
  });

  it('mutable -> should set value at key', () => {
    const o = { a: 0 };
    const a = [0];
    const m = new Map([['a', 0]]);
    const res1 = update(o, 'a', v => v + 1);
    const res2 = update(a, 0, v => v + 1);
    const res3 = update(m, 'a', v => v + 1);

    expect(res1).toEqual({ a: 1 });
    expect(o).toBe(res1);

    expect(res2).toEqual([1]);
    expect(a).toBe(res2);

    expect(res3).toEqual(new Map([['a', 1]]));
    expect(m).toBe(res3);
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

    invalid.forEach(v => expect(() => update(v, 'a', 1).toThrow()));
  });

  it('should throw on attempt to update named prop in an array colection', () => {
    expect(() => update([], 'a', 1).toThrow());
  });
});
