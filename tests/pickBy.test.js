import { pickBy } from '../problems';

const isUpperCase = str => str.toUpperCase() === str;

xdescribe('pickBy', () => {
  it('should return a copy of the object with only keys passing the predicate', () => {
    expect(pickBy({ a: 1, b: 2, A: 3, B: 4 }, isUpperCase)).toEqual({ A: 3, B: 4 });
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => pickBy()).toThrowError();
    expect(() => pickBy(null)).toThrowError();
    expect(() => pickBy(true)).toThrowError();
    expect(() => pickBy('abc')).toThrowError();
    expect(() => pickBy(123)).toThrowError();
    expect(() => pickBy(() => {})).toThrowError();
    expect(() => pickBy({})).toThrowError();
    expect(() => pickBy({}, null)).toThrowError();
  });
});
