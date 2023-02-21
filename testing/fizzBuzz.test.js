// file: fizzBuzz.test.js
const fizzBuzz = require("./fizzBuzz");

describe("fizzBuzz", () => {
  it("returns FizzBuzz when given 15", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("returns Fizz when given 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("returns Fizz when given 18", () => {
    expect(fizzBuzz(18)).toBe("Fizz");
  });
  it("returns Buzz when given 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("returns Buzz when given 20", () => {
    expect(fizzBuzz(20)).toBe("Buzz");
  });
  it("returns 8 when given 8", () => {
    expect(fizzBuzz(8)).toBe(8);
  });
});
