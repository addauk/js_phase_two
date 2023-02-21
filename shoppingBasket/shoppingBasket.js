// file: shoppingBasket.js

class ShoppingBasket {
  constructor(){
    this.items =[];
  }
  getTotalPrice(){
    let price = 0;
    this.items.forEach(element => {
      price += element.getPrice();
    });
    return price;
  }
  addItem(item){
    this.items.push(item);
  }
};

module.exports = ShoppingBasket;