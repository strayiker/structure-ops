import setIn from '../setIn';

describe('setIn()', () => {
  it('immutable -> should set value at path', () => {
    process.env.IMMUTABLE = true;

    const o = { a: { b: [{ c: new Map([['d', { e: 0 }]]) }] } };
    const res = setIn(o, 'a.b.0.c.d.e', 1);

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

  it('mutable -> should set value at path', () => {
    const o = { a: { b: [{ c: new Map([['d', { e: 0 }]]) }] } };
    const res = setIn(o, 'a.b.0.c.d.e', 1);

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
});
