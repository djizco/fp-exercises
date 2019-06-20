import { find } from '../problems';

xdescribe('find', () => {
  it('should return the first matching value in an array', () => {
    const list = [2, 4, 6, 8];
    const predicate = val => val > 5;

    expect(find(list, predicate)).toBe(6);
  });

  it('should return undefined if predicate does not match any item', () => {
    const list = [2, 4, 6, 8];
    const predicate = val => val > 10;

    expect(find(list, predicate)).not.toBeDefined();
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => find()).toThrowError();
    expect(() => find(null)).toThrowError();
    expect(() => find('abc')).toThrowError();
    expect(() => find({})).toThrowError();
    expect(() => find([], null)).toThrowError();
    expect(() => find(null, () => {}));
  });
});
