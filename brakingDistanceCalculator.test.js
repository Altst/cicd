const calculateBrakingDistance = require('./app');

describe('calculateBrakingDistance', () => {
  test('calculates braking distance correctly', () => {
    const initialVelocity = 10;
    const deceleration = 2;
    const expectedBrakingDistance = (initialVelocity ** 2) / (2 * deceleration);

    const result = calculateBrakingDistance(initialVelocity, deceleration);

    expect(result).toBeCloseTo(expectedBrakingDistance, 2);
  });

  test('handles zero initial velocity', () => {
    const initialVelocity = 0;
    const deceleration = 2;

    const result = calculateBrakingDistance(initialVelocity, deceleration);

    expect(result).toBe(0);
  });

  test('handles zero deceleration', () => {
    const initialVelocity = 10;
    const deceleration = 0;

    const result = calculateBrakingDistance(initialVelocity, deceleration);

    expect(result).toBe(Infinity);
  });
});
