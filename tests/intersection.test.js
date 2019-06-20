import { intersection } from '../problems';

xdescribe('intersection', () => {
  it('should take the set intersection of two arrays', () => {
    const stooges = ['Moe', 'Curly', 'Larry'];
    const leaders = ['Moe', 'Groucho'];
    const people = ['John', 'Moe', 'Alice', 'Bob'];

    expect(intersection(stooges, leaders, people)).toEqual(['Moe']);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => intersection()).toThrowError();
    expect(() => intersection(null)).toThrowError();
    expect(() => intersection({})).toThrowError();
    expect(() => intersection('123')).toThrowError();
    expect(() => intersection(123)).toThrowError();
    expect(() => intersection([], null)).toThrowError();
    expect(() => intersection([], null, [])).toThrowError();
  });
});
