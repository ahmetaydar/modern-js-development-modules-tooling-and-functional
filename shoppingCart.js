// exporting  module
console.log('exporting  module');

//blocking module

// console.log('start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('finish fetching users');
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
console.log('xxxxxxxxx');
