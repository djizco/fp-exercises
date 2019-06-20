import { memoize } from '../problems';

xdescribe('memoize', () => {
  let add;
  let memoAdd;

  beforeEach(() => {
    add = (a, b) => a + b;

    memoAdd = memoize(add);
  });

  it('should produce the same result as the non-memoized version', () => {
    expect(add(1, 2)).toEqual(3);
    expect(memoAdd(1, 2)).toEqual(3);
  });

  it('should give different results for different arguments', () => {
    expect(memoAdd(1, 2)).toEqual(3);
    expect(memoAdd(3, 4)).toEqual(7);
  });

  it('should not run the memoized function twice for any given set of arguments', () => {
    const spy = jest.fn();
    const memoSpy = memoize(spy);

    expect(spy).not.toHaveBeenCalled();
    memoSpy(10);
    expect(spy).toHaveBeenCalledTimes(1);
    memoSpy(10);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should apply this to the function context', () => {
    const speak = function() { return this; };
    const speakMemo = memoize(speak);

    expect(speakMemo.apply('John')).toBe('John');
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => memoize()).toThrowError();
    expect(() => memoize(null)).toThrowError();
    expect(() => memoize(true)).toThrowError();
    expect(() => memoize('abc')).toThrowError();
    expect(() => memoize(1234)).toThrowError();
    expect(() => memoize({})).toThrowError();
  });
});
