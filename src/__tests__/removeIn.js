import removeIn from '../removeIn';

describe('removeIn()', () => {
  it('immutable -> should remove value at path', () => {
    process.env.IMMUTABLE = true;

    const o = { a: { b: [{ c: new Map([['d', { e: 0 }]]) }] } };
    const res = removeIn(o, 'a.b.0.c.d.e');

    expect(res).toEqual({
      a: { b: [{ c: new Map([['d', {}]]) }] },
    });
    expect(o).toEqual({
      a: { b: [{ c: new Map([['d', { e: 0 }]]) }] },
    });
    expect(o).not.toBe(res);
    expect(o.a).not.toBe(res.a);
    expect(o.a.b).not.toBe(res.a.b);
    expect(o.a.b[0]).not.toBe(res.a.b[0]);
    expect(o.a.b[0].c).not.toBe(res.a.b[0].c);
    expect(o.a.b[0].c.get('d')).not.toBe(res.a.b[0].c.get('d'));

    delete process.env.IMMUTABLE;
  });

  it('mutable -> should remove value at path', () => {
    const o = { a: { b: [{ c: new Map([['d', { e: 0 }]]) }] } };
    const res = removeIn(o, 'a.b.0.c.d.e');

    expect(res).toEqual({
      a: { b: [{ c: new Map([['d', {}]]) }] },
    });
    expect(o).toBe(res);
    expect(o.a).toBe(res.a);
    expect(o.a.b).toBe(res.a.b);
    expect(o.a.b[0]).toBe(res.a.b[0]);
    expect(o.a.b[0].c).toBe(res.a.b[0].c);
    expect(o.a.b[0].c.get('d')).toBe(res.a.b[0].c.get('d'));
  });
});
