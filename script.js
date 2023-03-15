/*
// Importing module
// import { addToCard, qt, totalPrice as price } from './shoppingCart.js';
// ('./shoppingCart.js');

// addToCard('bread', 5);
// console.log(price, qt);

console.log('importing module');
// import * as ShoppingCard from './shoppingCart.js';

// ShoppingCard.addToCard('bread', 4);
// console.log(ShoppingCard.totalPrice);
// console.log(ShoppingCard.qt);

// console.log(ShoppingCard.card); undefined

import add, { card } from './shoppingCart.js';

add('pizza', 2);
add('bread', 22);
add('apple', 21);
add('pizza', 2);
console.log(card);
// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');

// const data = await res.json();
// console.log(data);
// console.log('something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost);

// not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);


//import shoppingCart from './shoppingCart';

const ShoppingCard2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCard = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to card`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };
  return {
    addToCard,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCard2.addToCard('apple', 4);
ShoppingCard2.addToCard('pizza', 2);
console.log(ShoppingCard2);
console.log(ShoppingCard2.shippingCost);
*/
// addedn npm libraries
console.log('importing module');
import add, { card } from './shoppingCart.js';

add('pizza', 2);
add('bread', 22);
add('apple', 21);
add('pizza', 2);
console.log(card);
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
