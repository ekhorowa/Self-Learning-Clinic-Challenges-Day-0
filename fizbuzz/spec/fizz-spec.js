var fizzBuzz = require ('../src/srcFizzBuzz.js');
describe("Fizz Buzz tests ", function() {
  it("should return `Fizz` for number divisible by 3", function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  it("should return `FizzBuzz` for 15", function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
  it("should return `FizzBuzz` for 45", function() {
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });
  it("should return `FizzBuzz` for 75", function() {
    expect(fizzBuzz(75)).toBe('FizzBuzz');
  });
  it("should return `FizzBuzz` for 90", function() {
    expect(fizzBuzz(90)).toBe('FizzBuzz');
  });
  it("should return `FizzBuzz` for 105", function() {
    expect(fizzBuzz(105)).toBe('FizzBuzz');
  });
  it("should return `Fizz` for 63", function() {
    expect(fizzBuzz(63)).toBe('Fizz');
  });
  it("should return `Fizz` for 21", function() {
    expect(fizzBuzz(21)).toBe('Fizz');
  });
  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(7)).toBe(7);
  });
  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(101)).toBe(101);
  });
  it("should return value if the arguement passed is not divisible by 3 or 5", function() {
    expect(fizzBuzz(28)).toBe(28);
  });
  it("should return value if the arguement passed is not divisible by 3 or 5", function() {
    expect(fizzBuzz(104)).toBe(104);
  });
  it("should return value if the arguement passed is not divisible by 3 or 5", function() {
    expect(fizzBuzz(98)).toBe(98);
  });
  it("should return value if the arguement passed is not divisible by 3 or 5", function() {
    expect(fizzBuzz(73)).toBe(73);
  });

});