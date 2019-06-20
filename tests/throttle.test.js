import { throttle } from '../problems';

xdescribe('throttle, when given a wait of 100ms', () => {
  let callback;

  beforeEach(() => {
    jest.useFakeTimers();
    callback = jest.fn();
  });

  it('should return a function callable twice in the first 200ms', () => {
    const fn = throttle(callback, 100);

    fn(); // called
    setTimeout(fn, 50);
    setTimeout(fn, 100); // called
    setTimeout(fn, 150);
    setTimeout(fn, 199);

    jest.advanceTimersByTime(200);

    expect(callback).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(200);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should apply this to the function', () => {
    const speak = function(greeting) { return greeting + this; };
    const throttledSpeak = throttle(speak, 100);

    expect(throttledSpeak.call('John', 'Hello, ')).toBe('Hello, John');
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => throttle()).toThrowError();
    expect(() => throttle(null)).toThrowError();
    expect(() => throttle(true)).toThrowError();
    expect(() => throttle('abc')).toThrowError();
    expect(() => throttle(1234)).toThrowError();
    expect(() => throttle({})).toThrowError();
    expect(() => throttle(null, 100)).toThrowError();
    expect(() => throttle(true, 100)).toThrowError();
    expect(() => throttle('abc', 100)).toThrowError();
    expect(() => throttle(1234, 100)).toThrowError();
    expect(() => throttle({}, 100)).toThrowError();
    expect(() => throttle(() => {})).toThrowError();
    expect(() => throttle(() => {}, null)).toThrowError();
    expect(() => throttle(() => {}, true)).toThrowError();
    expect(() => throttle(() => {}, 'abc')).toThrowError();
    expect(() => throttle(() => {}, {})).toThrowError();
  });
});
