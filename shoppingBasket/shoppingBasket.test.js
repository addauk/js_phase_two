// file: shoppingBasket.test.js

const ShoppingBasket = require("./shoppingBasket")

describe("ShoppingBasket", () => {
  it("constructs", () => {
    const shoppingBasket = new ShoppingBasket();
    expect(shoppingBasket.items).toEqual([]);
  });
  it("getTotalPrice to return 0 if no items in basket", () => {
    const shoppingBasket = new ShoppingBasket();
    expect(shoppingBasket.getTotalPrice()).toBe(0);
  });
  it("can add item to basket and get correct price", () => {
    const candyDouble = {
      getName: () => "Mars",
      getPrice: () => 4.99
    };
    const shoppingBasket = new ShoppingBasket();
    shoppingBasket.addItem(candyDouble);
    expect(shoppingBasket.getTotalPrice()).toBe(4.99);
  });
  it("can add multiple items to basket and get correct price", () => {
    const candyDouble = {
      getName: () => "Mars",
      getPrice: () => 4.99
    };
    const candyDouble2 = {
      getName: () => "Skittle",
      getPrice: () => 3.99
    };
    const shoppingBasket = new ShoppingBasket();
    shoppingBasket.addItem(candyDouble);
    shoppingBasket.addItem(candyDouble2);
    shoppingBasket.addItem(candyDouble2);
    expect(shoppingBasket.getTotalPrice()).toBe(12.97);
  });
});