import { product } from '../problems';

xdescribe('product', () => {
  it('should calculate the product of an array of numbers', () => {
    expect(product([1, 2, 3, 4])).toBe(24);
    expect(product([-1, 2, -3])).toBe(6);
    expect(product([-1, 2, -3, 0])).toBe(0);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => product()).toThrowError();
    expect(() => product(null)).toThrowError();
    expect(() => product([])).toThrowError();
    expect(() => product([1, 2, null])).toThrowError();
  });
});
