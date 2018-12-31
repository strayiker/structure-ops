import { mergeDeep } from '../merge';

describe('mergeDeep()', () => {
  it('immutable -> should merge collections deeply', () => {
    process.env.IMMUTABLE = true;

    const a = { a: { b: { c: [0] } } };
    const b = { a: { b: { c: [1] } } };
    const res = mergeDeep(a, b);

    expect(res).toEqual({ a: { b: { c: [0, 1] } } });
    expect(a).toEqual({ a: { b: { c: [0] } } });
    expect(res).not.toBe(a);
    expect(res.a).not.toBe(a.a);
    expect(res.a.b).not.toBe(a.a.b);
    expect(res.a.b.c).not.toBe(a.a.b.c);

    delete process.env.IMMUTABLE;
  });

  it('mutable -> should merge collections deeply', () => {
    const a = { a: { b: { c: [0] } } };
    const b = { a: { b: { c: [1] } } };
    const res = mergeDeep(a, b);

    expect(res).toEqual({ a: { b: { c: [0, 1] } } });
    expect(a).toEqual({ a: { b: { c: [0, 1] } } });
    expect(res).toBe(a);
    expect(res.a).toBe(a.a);
    expect(res.a.b).toBe(a.a.b);
    expect(res.a.b.c).toBe(a.a.b.c);
  });
});
