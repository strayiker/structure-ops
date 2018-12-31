import hasIn from '../hasIn';

describe('hasIn()', () => {
  it('should check if value at path exist', () => {
    const m = new Map([['d', { e: 0 }]]);
    const o = { m };
    const s = new Set([o]);
    const obj = { a: { b: [{ c: s }] } };

    expect(hasIn(obj, 'a.b.0.c')).toBeTruthy();
    expect(hasIn(obj, ['a', 'b', 0, 'c', o])).toBeTruthy();
    expect(hasIn(obj, ['a', 'b', 0, 'c', o, 'm'])).toBeTruthy();
    expect(hasIn(obj, ['a', 'b', 0, 'c', o, 'm', 'd', 'e'])).toBeTruthy();
    expect(hasIn(obj, 'a.b.1')).toBeFalsy();
  });
});
