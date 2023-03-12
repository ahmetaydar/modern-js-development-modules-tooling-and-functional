// exporting  module
console.log('exporting  module');

const shippingCost = 10;
export const card = [];

export const addToCard = function (product, quantity) {
  card.push({ product, quantity });
  console.log(`${quantity} ${product} added to card`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };

export default function (product, quantity) {
  card.push({ product, quantity });
  console.log(`${quantity} ${product} added to card`);
}

addToCard('xxx', 111);
console.log(card);

addToCard('pizza', 2);
addToCard('bread', 22);
addToCard('apple', 21);
addToCard('pizza', 2);
console.log(card);
