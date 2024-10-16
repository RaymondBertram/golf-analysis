import { describe } from 'node:test';
import { sum, subtract } from '../src/utils/index';

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('subtract', () => {
  it('subtract two numbers', () => {
    expect(subtract(10, 2)).toBe(8);
  });
});
