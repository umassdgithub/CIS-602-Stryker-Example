const classifyTriangle = require('./classifyTriangle');

describe('classifyTriangle mutation-testing demo', () => {
  test('returns Equilateral for equal valid sides', () => {
    expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
  });

  test('returns Error when one side is too small', () => {
    expect(classifyTriangle(0, 10, 10))
      .toBe('Error: Input conditions C1, C2, or C3 failed.');
  });

  test('returns Not a Triangle for one invalid triangle case', () => {
    expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
  });
});