import { pluck } from '../problems';

xdescribe('pluck', () => {
  it('should return values contained at a user-defined property', () => {
    const people = [
      { name: 'moe', age: 30 },
      { name: 'curly', age: 50 },
    ];

    expect(pluck(people, 'name')).toEqual(['moe', 'curly']);
  });

  it('should return undefined if iterated object is null', () => {
    const people = [
      { name: 'moe', age: 30 },
      { name: 'curly', age: 50 },
      null,
      undefined,
      3,
      false,
    ];

    expect(pluck(people, 'name')).toEqual(['moe', 'curly', undefined, undefined, undefined, undefined]);
  });

  it('should not modify the original array', () => {
    const people = [
      { name: 'moe', age: 30 },
      { name: 'curly', age: 50 },
    ];

    pluck(people, 'name');

    expect(people).toEqual([{ name: 'moe', age: 30 }, { name: 'curly', age: 50 }]);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => pluck()).toThrowError();
    expect(() => pluck(null)).toThrowError();
    expect(() => pluck(null, '')).toThrowError();
    expect(() => pluck(null, 'name')).toThrowError();
    expect(() => pluck([], null)).toThrowError();
    expect(() => pluck({}, null)).toThrowError();
  });
});
