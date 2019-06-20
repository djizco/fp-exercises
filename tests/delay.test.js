import { delay } from '../problems';

xdescribe('delay', () => {
  let callback;

  beforeEach(() => {
    jest.useFakeTimers();
    callback = jest.fn();
  });

  it('should only execute the function after the specified wait time', () => {
    delay(callback, 100);

    jest.advanceTimersByTime(99);

    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(99);

    expect(callback).toHaveBeenCalled();
  });

  it('should have successfully passed function arguments in', () => {
    delay(callback, 100, 1, 2);
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);

    expect(callback).toHaveBeenCalledWith(1, 2);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => delay()).toThrowError();
    expect(() => delay(null)).toThrowError();
    expect(() => delay(true)).toThrowError();
    expect(() => delay('abc')).toThrowError();
    expect(() => delay(1234)).toThrowError();
    expect(() => delay({})).toThrowError();
    expect(() => delay([])).toThrowError();
    expect(() => delay(true)).toThrowError();
    expect(() => delay('abc')).toThrowError();
    expect(() => delay(1234)).toThrowError();
    expect(() => delay(undefined, 100)).toThrowError();
    expect(() => delay({})).toThrowError();
    expect(() => delay([])).toThrowError();
    expect(() => delay(null, 100)).toThrowError();
    expect(() => delay(true, 100)).toThrowError();
    expect(() => delay('abc', 100)).toThrowError();
    expect(() => delay(1234, 100)).toThrowError();
    expect(() => delay({}, 100)).toThrowError();
    expect(() => delay(() => {}, null)).toThrowError();
    expect(() => delay(() => {}, '')).toThrowError();
    expect(() => delay(() => {}, [])).toThrowError();
    expect(() => delay(() => {}, {})).toThrowError();
    expect(() => delay(() => {}, true)).toThrowError();
  });
});
