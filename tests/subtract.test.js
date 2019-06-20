import { subtract } from '../problems';

xdescribe('subtract', () => {
  it('should subtract two numbers together', () => {
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(2, -3)).toBe(5);
    expect(subtract(-3, 2)).toBe(-5);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => subtract()).toThrowError();
    expect(() => subtract(null)).toThrowError();
    expect(() => subtract(0, null)).toThrowError();
  });
});
