import { useState } from "react";
import { MenuItem } from "../pages/OrderPage";

type Props = {
  itemsInBasket: MenuItem[];
  increase: Function;
  decrease: Function;
  deleteitem: Function;
};

export function BasketItem({
  itemsInBasket,
  increase,
  decrease,
  deleteitem,
}: Props) {
  return (
    <>
      {itemsInBasket.map((item: MenuItem) => (
        <li key={item.id} className="item-inbasket">
          <div>{item.quantity}</div>
          <button
            onClick={() => {
              increase(item);
            }}
          >
            up
          </button>
          <button
            onClick={() => {
              decrease(item);
            }}
          >
            down
          </button>
          <span className="break-name">{item.name}</span>
          <span
            className="material-symbols-outlined"
            onClick={() => {
              deleteitem(item);
            }}
          >
            🎁
          </span>
          <span>{item.price * item.quantity}$</span>
        </li>
      ))}
    </>
  );
}
