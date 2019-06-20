import { uniq } from '../problems';

xdescribe('uniq', () => {
  it('should return all unique values contained in an unsorted array', () => {
    const numbers = [1, 2, 1, 3, 1, 4];

    expect(uniq(numbers)).toEqual([1, 2, 3, 4]);
  });

  it('should produce a brand new array instead of modifying the input array', () => {
    const numbers = [1, 2, 1, 3, 1, 4];
    const uniqueNumbers = uniq(numbers);

    expect(uniqueNumbers).not.toEqual(numbers);
  });

  it('should work with objects and arrays', () => {
    const uniqueList = uniq([1, 2, '1', '2', 2, '2', [1], { a: 1 }, [], [1], [], { a: 1 }]);
    expect(uniqueList).toEqual([1, 2, '1', '2', [1], { a: 1 }, []]);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => uniq()).toThrowError();
    expect(() => uniq(null)).toThrowError();
  });
});
