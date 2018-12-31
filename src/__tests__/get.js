import get from '../get';

describe('get()', () => {
  it('should return value at key', () => {
    const obj = { a: 'value' };
    const arr = ['value'];
    const set = new Set(['value', obj]);
    const map = new Map([['a', 'value'], [obj, 'value']]);

    expect(get(obj, 'a')).toBe('value');
    expect(get(obj, 'b')).toBeUndefined();
    expect(get(obj, 'b', 'default')).toBe('default');

    expect(get(arr, '0')).toBe('value');
    expect(get(arr, 0)).toBe('value');
    expect(get(arr, 1)).toBeUndefined();
    expect(get(arr, 1, 'default')).toBe('default');

    expect(get(set, 'value')).toBe('value');
    expect(get(set, obj)).toBe(obj);
    expect(get(set, 'a')).toBeUndefined();
    expect(get(set, 'b', 'default')).toBe('default');

    expect(get(map, 'a')).toBe('value');
    expect(get(map, obj)).toBe('value');
    expect(get(map, 'b')).toBeUndefined();
    expect(get(map, 'b', 'default')).toBe('default');
  });
});
