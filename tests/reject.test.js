import { reject } from '../problems';

const isEven = num => num % 2 === 0;
const isOdd = num => num % 2 !== 0;

xdescribe('reject', () => {
  it('should reject all even numbers', () => {
    const odds = reject([1, 2, 3, 4, 5, 6], isEven);

    expect(odds).toEqual([1, 3, 5]);
  });

  it('should reject all odd numbers', () => {
    const evens = reject([1, 2, 3, 4, 5, 6], isOdd);

    expect(evens).toEqual([2, 4, 6]);
  });

  it('should produce a brand new array instead of modifying the input array', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const evens = reject(numbers, isOdd);

    expect(evens).not.toEqual(numbers);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => reject()).toThrowError();
    expect(() => reject(null)).toThrowError();
    expect(() => reject([], null)).toThrowError();
  });
});
