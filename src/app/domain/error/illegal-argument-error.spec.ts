import { IllegalArgumentError } from './illegal-argument-error';

describe('IllegalArgumentError', () => {
  it('should create an instance', () => {
    expect(new IllegalArgumentError()).toBeTruthy();
  });
});
