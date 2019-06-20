import { max } from '../problems';

xdescribe('max', () => {
  it('should return the larger of two arguments', () => {
    expect(max(1, 2)).toBe(2);
    expect(max(2, 1)).toBe(2);
    expect(max('1', '2')).toBe('2');
    expect(max(1, '2')).toBe('2');
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => max()).toThrowError();
    expect(() => max(1)).toThrowError();
    expect(() => max(1, null)).toThrowError();
  });
});
