// Sample.test.js

function sum(a, b) {
  return a + b;
}
describe('Sample Test', () => {
  it('should return 3 as the result of the function', () => {
    // set timeout to prevent false positives with tests
    expect(sum(1, 2)).toBe(3);
  });
});