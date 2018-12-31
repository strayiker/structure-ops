import { merge } from '../merge';

describe('merge()', () => {
  it('immutable -> should merge collections', () => {
    process.env.IMMUTABLE = true;

    let a = { a: 0 };
    let b = { b: 1 };
    let c = [1];
    let d = new Set([1]);
    let e = new Map([['e', 1]]);
    let res1 = merge(a, b);
    let res2 = merge(a, c);
    let res3 = merge(a, d);
    let res4 = merge(a, e);

    expect(res1).toEqual({ a: 0, b: 1 });
    expect(res1).not.toBe(a);
    expect(res1).not.toBe(b);
    expect(a).toEqual({ a: 0 });
    expect(b).toEqual({ b: 1 });

    expect(res2).toEqual({ a: 0, 0: 1 });
    expect(res2).not.toBe(a);
    expect(res2).not.toBe(c);
    expect(a).toEqual({ a: 0 });
    expect(c).toEqual([1]);

    expect(res3).toEqual({ a: 0, 1: 1 });
    expect(res3).not.toBe(a);
    expect(res3).not.toBe(d);
    expect(a).toEqual({ a: 0 });
    expect(d).toEqual(new Set([1]));

    expect(res4).toEqual({ a: 0, e: 1 });
    expect(res4).not.toBe(a);
    expect(res4).not.toBe(e);
    expect(a).toEqual({ a: 0 });
    expect(e).toEqual(new Map([['e', 1]]));

    a = [0];
    b = { b: 1 };
    c = [1];
    d = new Set([1]);
    e = new Map([['e', 1]]);
    res1 = merge(a, b);
    res2 = merge(a, c);
    res3 = merge(a, d);
    res4 = merge(a, e);

    expect(res1).toEqual([0, 1]);
    expect(res1).not.toBe(a);
    expect(res1).not.toBe(b);
    expect(a).toEqual([0]);
    expect(b).toEqual({ b: 1 });

    expect(res2).toEqual([0, 1]);
    expect(res2).not.toBe(a);
    expect(res2).not.toBe(c);
    expect(a).toEqual([0]);
    expect(c).toEqual([1]);

    expect(res3).toEqual([0, 1]);
    expect(res3).not.toBe(a);
    expect(res3).not.toBe(d);
    expect(a).toEqual([0]);
    expect(d).toEqual(new Set([1]));

    expect(res4).toEqual([0, 1]);
    expect(res4).not.toBe(a);
    expect(res4).not.toBe(e);
    expect(a).toEqual([0]);
    expect(e).toEqual(new Map([['e', 1]]));

    a = new Set([0]);
    b = { b: 1 };
    c = [1];
    d = new Set([1]);
    e = new Map([['e', 1]]);
    res1 = merge(a, b);
    res2 = merge(a, c);
    res3 = merge(a, d);
    res4 = merge(a, e);

    expect(res1).toEqual(new Set([0, 1]));
    expect(res1).not.toBe(a);
    expect(res1).not.toBe(b);
    expect(a).toEqual(new Set([0]));
    expect(b).toEqual({ b: 1 });

    expect(res2).toEqual(new Set([0, 1]));
    expect(res2).not.toBe(a);
    expect(res2).not.toBe(c);
    expect(a).toEqual(new Set([0]));
    expect(c).toEqual([1]);

    expect(res3).toEqual(new Set([0, 1]));
    expect(res3).not.toBe(a);
    expect(res3).not.toBe(d);
    expect(a).toEqual(new Set([0]));
    expect(d).toEqual(new Set([1]));

    expect(res4).toEqual(new Set([0, 1]));
    expect(res4).not.toBe(a);
    expect(res4).not.toBe(e);
    expect(a).toEqual(new Set([0]));
    expect(e).toEqual(new Map([['e', 1]]));

    a = new Map([['a', 0]]);
    b = { b: 1 };
    c = [1];
    d = new Set([1]);
    e = new Map([['e', 1]]);
    res1 = merge(a, b);
    res2 = merge(a, c);
    res3 = merge(a, d);
    res4 = merge(a, e);

    expect(res1).toEqual(new Map([['a', 0], ['b', 1]]));
    expect(res1).not.toBe(a);
    expect(res1).not.toBe(b);
    expect(a).toEqual(new Map([['a', 0]]));
    expect(b).toEqual({ b: 1 });

    expect(res2).toEqual(new Map([['a', 0], [0, 1]]));
    expect(res2).not.toBe(a);
    expect(res2).not.toBe(c);
    expect(a).toEqual(new Map([['a', 0]]));
    expect(c).toEqual([1]);

    expect(res3).toEqual(new Map([['a', 0], [1, 1]]));
    expect(res3).not.toBe(a);
    expect(res3).not.toBe(d);
    expect(a).toEqual(new Map([['a', 0]]));
    expect(d).toEqual(new Set([1]));

    expect(res4).toEqual(new Map([['a', 0], ['e', 1]]));
    expect(res4).not.toBe(a);
    expect(res4).not.toBe(e);
    expect(a).toEqual(new Map([['a', 0]]));
    expect(e).toEqual(new Map([['e', 1]]));

    delete process.env.IMMUTABLE;
  });

  it("immutable -> shouldn't create a copy if unnecessary", () => {
    process.env.IMMUTABLE = true;

    const a = { a: 1 };
    const b = { a: 1 };
    const res = merge(a, b);

    expect(res).toEqual({ a: 1 });
    expect(res).toBe(a);

    delete process.env.IMMUTABLE;
  });

  it('mutable -> should merge collections', () => {
    let a;
    let b;
    let c;
    let d;
    let e;
    let res;

    a = { a: 0 };
    b = { b: 1 };
    res = merge(a, b);

    expect(res).toEqual({ a: 0, b: 1 });
    expect(res).toBe(a);
    expect(res).not.toBe(b);
    expect(b).toEqual({ b: 1 });

    a = { a: 0 };
    c = [1];
    res = merge(a, c);

    expect(res).toEqual({ a: 0, 0: 1 });
    expect(res).toBe(a);
    expect(res).not.toBe(c);
    expect(c).toEqual([1]);

    a = { a: 0 };
    d = new Set([1]);
    res = merge(a, d);

    expect(res).toEqual({ a: 0, 1: 1 });
    expect(res).toBe(a);
    expect(res).not.toBe(d);
    expect(d).toEqual(new Set([1]));

    a = { a: 0 };
    e = new Map([['e', 1]]);
    res = merge(a, e);

    expect(res).toEqual({ a: 0, e: 1 });
    expect(res).toBe(a);
    expect(res).not.toBe(e);
    expect(e).toEqual(new Map([['e', 1]]));

    a = [0];
    b = { b: 1 };
    res = merge(a, b);

    expect(res).toEqual([0, 1]);
    expect(res).toBe(a);
    expect(res).not.toBe(b);
    expect(b).toEqual({ b: 1 });

    a = [0];
    c = [1];
    res = merge(a, c);

    expect(res).toEqual([0, 1]);
    expect(res).toBe(a);
    expect(res).not.toBe(c);
    expect(c).toEqual([1]);

    a = [0];
    d = new Set([1]);
    res = merge(a, d);

    expect(res).toEqual([0, 1]);
    expect(res).toBe(a);
    expect(res).not.toBe(d);
    expect(d).toEqual(new Set([1]));

    a = [0];
    e = new Map([['e', 1]]);
    res = merge(a, e);

    expect(res).toEqual([0, 1]);
    expect(res).toBe(a);
    expect(res).not.toBe(e);
    expect(e).toEqual(new Map([['e', 1]]));

    a = new Set([0]);
    b = { b: 1 };
    res = merge(a, b);

    expect(res).toEqual(new Set([0, 1]));
    expect(res).toBe(a);
    expect(res).not.toBe(b);
    expect(b).toEqual({ b: 1 });

    a = new Set([0]);
    c = [1];
    res = merge(a, c);

    expect(res).toEqual(new Set([0, 1]));
    expect(res).toBe(a);
    expect(res).not.toBe(c);
    expect(c).toEqual([1]);

    a = new Set([0]);
    d = new Set([1]);
    res = merge(a, d);

    expect(res).toEqual(new Set([0, 1]));
    expect(res).toBe(a);
    expect(res).not.toBe(d);
    expect(d).toEqual(new Set([1]));

    a = new Set([0]);
    e = new Map([['e', 1]]);
    res = merge(a, e);

    expect(res).toEqual(new Set([0, 1]));
    expect(res).toBe(a);
    expect(res).not.toBe(e);
    expect(e).toEqual(new Map([['e', 1]]));

    a = new Map([['a', 0]]);
    b = { b: 1 };
    res = merge(a, b);

    expect(res).toEqual(new Map([['a', 0], ['b', 1]]));
    expect(res).toBe(a);
    expect(res).not.toBe(b);
    expect(b).toEqual({ b: 1 });

    a = new Map([['a', 0]]);
    c = [1];
    res = merge(a, c);

    expect(res).toEqual(new Map([['a', 0], [0, 1]]));
    expect(res).toBe(a);
    expect(res).not.toBe(c);
    expect(c).toEqual([1]);

    a = new Map([['a', 0]]);
    d = new Set([1]);
    res = merge(a, d);

    expect(res).toEqual(new Map([['a', 0], [1, 1]]));
    expect(res).toBe(a);
    expect(res).not.toBe(d);
    expect(d).toEqual(new Set([1]));

    a = new Map([['a', 0]]);
    e = new Map([['e', 1]]);
    res = merge(a, e);

    expect(res).toEqual(new Map([['a', 0], ['e', 1]]));
    expect(res).toBe(a);
    expect(res).not.toBe(e);
    expect(e).toEqual(new Map([['e', 1]]));
  });

  it('should return source if non-data-structure value was provided', () => {
    const a = [];
    const b = 1;

    expect(merge(a, b)).toBe(b);
    expect(merge(b, a)).toBe(a);
  });
});
