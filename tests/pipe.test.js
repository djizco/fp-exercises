import { pipe } from '../problems';

const pow = (n, m) => n ** m;
const negate = n => -n;
const inc = n => n + 1;

xdescribe('pipe', () => {
  it('should return a function', () => {
    expect(pipe(pow, negate, inc)).toBeInstanceOf(Function);
  });

  it('should pipe data left to right', () => {
    const f = pipe(pow, negate, inc);

    expect(f(3, 4)).toBe(-80);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => pipe()).toThrowError();
    expect(() => pipe(null)).toThrowError();
    expect(() => pipe(true)).toThrowError();
    expect(() => pipe('abc')).toThrowError();
    expect(() => pipe(1234)).toThrowError();
    expect(() => pipe({})).toThrowError();
    const f = pipe(pow, negate, null, inc);
    expect(() => f()).toThrowError();
  });
});
