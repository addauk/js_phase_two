// file: searchCandies.test.js

const searchCandies = require("./searchCandies");

describe("searchCandies", () => {
  it("returns Mars and Maltesers when give 'Ma' and 10", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
  it("returns Mars when give 'Ma' and 2", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });
  it("returns Skitties, Skittles and Starburst when give 'S' and 10", () => {
    expect(searchCandies("S", 10)).toEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });
  it("returns Skitties and Skittles when give 'S' and 4", () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });
  describe("ignores case", () => {
    it("returns Mars and Maltesers when give 'Ma' and 10", () => {
      expect(searchCandies("ma", 10)).toEqual(["Mars", "Maltesers"]);
    });
    it("returns Mars when give 'Ma' and 2", () => {
      expect(searchCandies("MA", 2)).toEqual(["Mars"]);
    });
    it("returns Skitties, Skittles and Starburst when give 'S' and 10", () => {
      expect(searchCandies("s", 10)).toEqual([
        "Skitties",
        "Skittles",
        "Starburst",
      ]);
    });
    it("returns Skitties and Skittles when give 'S' and 4", () => {
      expect(searchCandies("s", 4)).toEqual(["Skitties", "Skittles"]);
    });
  });
});
