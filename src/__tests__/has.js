import has from '../has';

describe('has()', () => {
  it('should check if value at key exist', () => {
    const obj = { a: 'value' };
    const arr = ['value'];
    const set = new Set(['value', obj]);
    const map = new Map([['a', 'value'], [obj, 'value']]);

    expect(has(obj, 'a')).toBeTruthy();
    expect(has(obj, 'b')).toBeFalsy();

    expect(has(arr, '0')).toBeTruthy();
    expect(has(arr, 0)).toBeTruthy();
    expect(has(arr, 1)).toBeFalsy();

    expect(has(set, 'value')).toBeTruthy();
    expect(has(set, obj)).toBeTruthy();
    expect(has(set, 'a')).toBeFalsy();

    expect(has(map, 'a')).toBeTruthy();
    expect(has(map, obj)).toBeTruthy();
    expect(has(map, 'b')).toBeFalsy();
  });
});
