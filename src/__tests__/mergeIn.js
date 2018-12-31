import { mergeIn } from '../merge';

describe('mergeIn()', () => {
  it('immutable -> should merge in collection at path', () => {
    process.env.IMMUTABLE = true;

    const a = { a: { b: { c: [0] } } };
    const b = [1];
    const res = mergeIn(a, 'a.b.c', b);

    expect(res).toEqual({ a: { b: { c: [0, 1] } } });
    expect(a).toEqual({ a: { b: { c: [0] } } });
    expect(res).not.toBe(a);

    delete process.env.IMMUTABLE;
  });

  it('mutable -> should merge in collection at path', () => {
    const a = { a: { b: { c: [0] } } };
    const b = [1];
    const res = mergeIn(a, 'a.b.c', b);

    expect(res).toEqual({ a: { b: { c: [0, 1] } } });
    expect(a).toEqual({ a: { b: { c: [0, 1] } } });
    expect(res).toBe(a);
  });
});
