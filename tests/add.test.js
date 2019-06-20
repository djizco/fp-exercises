import { add } from '../problems';

xdescribe('add', () => {
  it('should add two numbers together', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 2)).toBe(1);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => add()).toThrowError();
    expect(() => add(null)).toThrowError();
    expect(() => add(0, null)).toThrowError();
  });
});
