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
console.log('clone deneme');
