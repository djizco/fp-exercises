import { each } from '../problems';

xdescribe('each', () => {
  it('should iterate over arrays, providing access to the element, index, and array itself', () => {
    const animals = ['ant', 'bat', 'cat'];
    const iterationInputs = [];

    each(animals, (animal, index, list) => {
      iterationInputs.push([animal, index, list]);
    });

    expect(iterationInputs).toEqual([
      ['ant', 0, animals],
      ['bat', 1, animals],
      ['cat', 2, animals],
    ]);
  });

  it('should only iterate over the array elements, not properties of the array', () => {
    const animals = ['ant', 'bat', 'cat'];
    const iterationInputs = [];

    animals.shouldBeIgnored = 'Ignore me!';

    each(animals, (animal, index, list) => {
      iterationInputs.push([animal, index, list]);
    });

    expect(iterationInputs).toEqual([
      ['ant', 0, animals],
      ['bat', 1, animals],
      ['cat', 2, animals],
    ]);
  });

  it('should iterate over strings', () => {
    const string = 'abc';
    const iterationInputs = [];

    each(string, (letter, index, word) => {
      iterationInputs.push([letter, index, word]);
    });

    expect(iterationInputs).toEqual([
      ['a', 0, string],
      ['b', 1, string],
      ['c', 2, string],
    ]);
  });

  it('should iterate over objects, providing access to the element, index, and object itself', () => {
    const animals = { a: 'ant', b: 'bat', c: 'cat' };
    const iterationInputs = [];

    each(animals, (animal, key, object) => {
      iterationInputs.push([animal, key, object]);
    });

    expect(iterationInputs).toEqual([
      ['ant', 'a', animals],
      ['bat', 'b', animals],
      ['cat', 'c', animals],
    ]);
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => each()).toThrowError();
    expect(() => each(null)).toThrowError();
    expect(() => each(null, () => {})).toThrowError();
    expect(() => each([], null)).toThrowError();
    expect(() => each('', null)).toThrowError();
  });
});
