import { filter } from '../problems';

const isEven = num => num % 2 === 0;
const isOdd = num => num % 2 !== 0;

xdescribe('filter', () => {
  it('should return all even numbers in an array', () => {
    const evens = filter([1, 2, 3, 4, 5, 6], isEven);

    expect(evens).toEqual([2, 4, 6]);
  });

  it('should return all odd numbers in an array', () => {
    const odds = filter([1, 2, 3, 4, 5, 6], isOdd);

    expect(odds).toEqual([1, 3, 5]);
  });

  it('should produce a brand new array instead of modifying the input array', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const evens = filter(numbers, isOdd);

    expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
    expect(evens).not.toEqual(numbers);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => filter()).toThrowError();
    expect(() => filter(null)).toThrowError();
    expect(() => filter([], null)).toThrowError();
  });
});
