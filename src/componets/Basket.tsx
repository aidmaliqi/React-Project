import { Category, MenuItem } from "../pages/OrderPage";
import { BasketItem } from "./BasketItem";
type Props = {
  itemsInBasket: MenuItem[] ;
  deleteitem: Function;
  setItemsInBasket: Function;
};

export function Basket({ itemsInBasket, deleteitem, setItemsInBasket }: Props) {
  let total = 0;
  for (const iterator of itemsInBasket) {
    total += iterator.quantity * iterator.price;
  }

  function increase(item: any) {
    let newArray = structuredClone(itemsInBasket);
    let match = newArray.find((el: any) => el.id === item.id);
    match.quantity++;

    fetch(`http://localhost:4000/menuItems/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(match),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));

    setItemsInBasket(newArray);
  }
  function decrease(item: any) {
    if (item.quantity > 0) {
      let newArray = structuredClone(itemsInBasket);
      let match = newArray.find((el: any) => el.id === item.id);
      match.quantity--;

      fetch(`http://localhost:4000/menuItems/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(match),
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data));

      setItemsInBasket(newArray);
    }
    if (item.quantity === 1) {
      deleteitem(item);
    }
  }

  return (
    <div className="basket">
      <form
        action=""
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <header className="food">Order Basket</header>
        <main className="basket-main">
          <span>Store is open now!!!</span>
          <aside>
            <button>PickUP</button>
            <button>Delivery</button>
          </aside>
          <label htmlFor="">
            Pick up:
            <input type="time" />
          </label>
          <ul>
            <BasketItem
              increase={increase}
              decrease={decrease}
              deleteitem={deleteitem}
              itemsInBasket={itemsInBasket}
            />
          </ul>
        </main>
        <footer>
          <span>Order Total</span>
          <span>{total}$</span>
        </footer>
        <div className="order-button">
          <button>Order</button>
        </div>
      </form>
    </div>
  );
}
