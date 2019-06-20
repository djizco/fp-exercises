import { groupBy } from '../problems';

xdescribe('groupBy', () => {
  it('should group an array of objects by the provided function', () => {
    const students = [
      { name: 'Alice', score: 84 },
      { name: 'Bob', score: 75 },
      { name: 'Eddy', score: 82 },
      { name: 'Jack', score: 69 },
      { name: 'Jill', score: 91 },
      { name: 'John', score: 95 },
    ];

    const determineGradeByScore = ({ score }) =>
      score < 70 ? 'F'
        : score < 80 ? 'C'
          : score < 90 ? 'B' : 'A';

    expect(groupBy(students, determineGradeByScore)).toEqual({
      A: [{ name: 'Jill', score: 91 }, { name: 'John', score: 95 }],
      B: [{ name: 'Alice', score: 84 }, { name: 'Eddy', score: 82 }],
      C: [{ name: 'Bob', score: 75 }],
      F: [{ name: 'Jack', score: 69 }],
    });
  });

  xit('should throw an error if invalid inputs are given', () => {
    expect(() => groupBy()).toThrowError();
    expect(() => groupBy(null)).toThrowError();
    expect(() => groupBy([])).toThrowError();
    expect(() => groupBy([], null)).toThrowError();
  });
});
