import { split } from '../problems';

xdescribe('split', () => {
  it('should split a string into an array by the provided separator', () => {
    expect(split('abc', '')).toEqual(['a', 'b', 'c']);
    expect(split('abc', '-')).toEqual(['abc']);
    expect(split('a-b-c', '-')).toEqual(['a', 'b', 'c']);
  });

  it('should handle separators longer than one character', () => {
    expect(split('ab--cd--ef', '--')).toEqual(['ab', 'cd', 'ef']);
  });

  it('should not use String.split()', () => {
    String.split = jest.fn();
    split('abc', '');
    expect(String.split).not.toHaveBeenCalled();
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => split()).toThrowError();
    expect(() => split(null)).toThrowError();
    expect(() => split('', null)).toThrowError();
    expect(() => split('abc')).toThrowError();
  });
});
