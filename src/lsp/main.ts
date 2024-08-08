import { Message } from './services/message';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import {
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(noDiscount);

const message = new Message();
const persistency = new Persistency();

const order = new Order(shoppingCart, message, persistency);
shoppingCart.addItem(new Product('blusa', 100));

shoppingCart.addItem(new Product('camisa', 50));

shoppingCart.addItem(new Product('calça', 400));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log('preço' + shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
