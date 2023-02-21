// file: candy.test.js

const Candy = require("./candy");

describe("Candy", () => {
  it("constructs", () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy.name).toBe("Mars");
    expect(candy.price).toBe(4.99);
  });
  it("getName returns correct name", () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy.getPrice()).toBe(4.99);
  });
  it("getPrice returns correct price", () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy.getName()).toBe("Mars");
  });
});
