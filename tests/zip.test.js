import { zip } from '../problems';

xdescribe('zip', () => {
  it('should zip together arrays of different lengths', () => {
    const names = ['moe', 'larry', 'curly'];
    const ages = [30, 40, 50];
    const leaders = [true];

    expect(zip(names, ages, leaders)).toEqual([
      ['moe', 30, true],
      ['larry', 40, undefined],
      ['curly', 50, undefined],
    ]);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => zip()).toThrowError();
    expect(() => zip(null)).toThrowError();
    expect(() => zip({})).toThrowError();
    expect(() => zip('123')).toThrowError();
    expect(() => zip(123)).toThrowError();
    expect(() => zip([], null)).toThrowError();
    expect(() => zip([], null, [])).toThrowError();
  });
});
