import { reduce } from '../problems';

const identity = val => val;
const add = (a, b) => a + b;
const sumSquares = (a, b) => add(a, b ** 2);

xdescribe('reduce', () => {
  it('should be able to sum up an array', () => {
    const total = reduce([1, 2, 3], add, 0);

    expect(total).toEqual(6);
  });

  it('should use the first element as an accumulator when none is given', () => {
    const total = reduce([1, 2, 3], add);

    expect(total).toEqual(6);
  });

  it('should invoke the iterator on the first element when given an accumulator', () => {
    const total = reduce([2, 3], sumSquares, 0);

    expect(total).toEqual(13);
  });

  it('should not invoke the iterator on the first element when using it as an accumulator', () => {
    const total = reduce([2, 3], sumSquares);

    expect(total).toEqual(11);
  });

  it('should work on strings', () => {
    const doubleLetters = reduce('abc', (acc, val) => acc + val + val, 'doubled letters: ');

    expect(doubleLetters).toBe('doubled letters: aabbcc');
  });

  it('should optionally pass in the index and array into the iterator', () => {
    reduce([1, 2, 3], (acc, val, i, array) => {
      expect(typeof i).toBe('number');
      expect(array).toEqual([1, 2, 3]);
    });

    reduce('abc', (acc, val, i, string) => {
      expect(typeof i).toBe('number');
      expect(string).toEqual('abc');
    });
  });

  it('should not modify the original array', () => {
    const numbers = [1, 2, 3];
    reduce(numbers, identity);
    expect(numbers).toEqual([1, 2, 3]);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => reduce()).toThrowError();
    expect(() => reduce(null)).toThrowError();
    expect(() => reduce(null, null)).toThrowError();
    expect(() => reduce([], null)).toThrowError();
    expect(() => reduce([], () => {})).toThrowError();
  });
});
