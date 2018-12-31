import updateIn from '../updateIn';

describe('updateIn()', () => {
  it('immutable -> should update value at path', () => {
    process.env.IMMUTABLE = true;

    const o = { a: { b: [{ c: new Map([['d', { e: 0 }]]) }] } };
    const res = updateIn(o, 'a.b.0.c.d.e', v => v + 1);

    expect(res).toEqual({
      a: { b: [{ c: new Map([['d', { e: 1 }]]) }] },
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

  it('mutable -> should update value at path', () => {
    const o = { a: { b: [{ c: new Map([['d', { e: 0 }]]) }] } };
    const res = updateIn(o, 'a.b.0.c.d.e', v => v + 1);

    expect(res).toEqual({
      a: { b: [{ c: new Map([['d', { e: 1 }]]) }] },
    });
    expect(o).toBe(res);
    expect(o.a).toBe(res.a);
    expect(o.a.b).toBe(res.a.b);
    expect(o.a.b[0]).toBe(res.a.b[0]);
    expect(o.a.b[0].c).toBe(res.a.b[0].c);
    expect(o.a.b[0].c.get('d')).toBe(res.a.b[0].c.get('d'));
  });

  it('mutable -> should handle zero length path', () => {
    const o = {};
    const res = updateIn(o, '', 1);

    expect(res).toEqual({});
    expect(res).toBe(o);
  });
});
