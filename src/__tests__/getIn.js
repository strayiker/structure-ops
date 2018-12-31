import getIn from '../getIn';

describe('getIn()', () => {
  it('should return value at path', () => {
    const m = new Map([['d', { e: 0 }]]);
    const o = { m };
    const s = new Set([o]);
    const obj = { a: { b: [{ c: s }] } };

    expect(getIn(obj, 'a.b.0.c')).toBe(s);
    expect(getIn(obj, ['a', 'b', 0, 'c', o])).toBe(o);
    expect(getIn(obj, ['a', 'b', 0, 'c', o, 'm'])).toBe(m);
    expect(getIn(obj, ['a', 'b', 0, 'c', o, 'm', 'd', 'e'])).toBe(0);
    expect(getIn(obj, 'a.b.1')).toBeUndefined();
  });
});
