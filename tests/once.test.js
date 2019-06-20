import { once } from '../problems';

xdescribe('once', () => {
  it('should return a function that can be called only once', () => {
    let callCount = 0;
    const inc = () => callCount++;

    const onlyOnce = once(inc);
    expect(callCount).toBe(0);
    onlyOnce();
    expect(callCount).toBe(1);
    onlyOnce();
    expect(callCount).toBe(1);
  });

  it('should return previous value for subsequent calls', () => {
    const addOneOnce = once(x => x + 1);
    expect(addOneOnce(10)).toBe(11);
    expect(addOneOnce(50)).toBe(11);
  });

  it('should should handle multiple arguments', () => {
    const add = (n, m) => n + m;
    const addOnce = once(add);
    expect(addOnce(2, 3)).toBe(5);
    expect(addOnce(4, 5)).toBe(5);
  });

  it('should apply this to the function', () => {
    const speak = function() { return this; };
    const speakOnce = once(speak);

    expect(speakOnce.apply('John')).toBe('John');
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => once()).toThrowError();
    expect(() => once(null)).toThrowError();
    expect(() => once(true)).toThrowError();
    expect(() => once('abc')).toThrowError();
    expect(() => once(1234)).toThrowError();
    expect(() => once({})).toThrowError();
  });
});
