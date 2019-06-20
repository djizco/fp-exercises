import { shuffle } from '../problems';

xdescribe('shuffle', () => {
  it('should not modify the original object', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffle(numbers);

    expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(shuffled).not.toEqual(numbers);
  });

  it('should have the same elements as the original object', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffle(numbers).sort((a, b) => a - b);

    expect(shuffled).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should not be in the same order as the original object', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffle(numbers);

    expect(shuffled).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => shuffle()).toThrowError();
    expect(() => shuffle(null)).toThrowError();
    expect(() => shuffle({})).toThrowError();
    expect(() => shuffle('123')).toThrowError();
    expect(() => shuffle(123)).toThrowError();
  });
});
