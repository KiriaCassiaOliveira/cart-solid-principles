type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }
  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }
  checkout(): void {
    if (this.isEmpty()) {
      console.log('carrinho vazinho');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage('Seu pedido foi recebido');
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log('msg enviada', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }
  clear(): void {
    console.log('carrinho limpo');
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}

const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: 'blusa', price: 50.666 });
shoppingCartLegacy.addItem({ name: 'calça', price: 20.444 });
shoppingCartLegacy.addItem({ name: 'short', price: 10 });

console.log(shoppingCartLegacy.items);
shoppingCartLegacy.checkout();
