import { Message } from './services/message';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const message = new Message();
const persistency = new Persistency();

const order = new Order(shoppingCart, message, persistency);
shoppingCart.addItem(new Product('blusa', 100));

shoppingCart.addItem(new Product('camisa', 50));

shoppingCart.addItem(new Product('calça', 400));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
