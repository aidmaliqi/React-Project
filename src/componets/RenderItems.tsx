import { useEffect, useState } from "react";
import { Category, MenuItem } from "../pages/OrderPage";

type Prop = {
 item : Category
 inBasket : Function
};

export function RenderItems({ item , inBasket}: Prop) {
  const [itemsOfCategory, setItemsOfCategory] = useState<null | MenuItem[]>(
    null
  );



  useEffect(() => {
    fetch(
      `http://localhost:4000/foodCategories/${item.id}/menuItems?_expand=foodCategoryId`
    )
      .then((response) => response.json())
      .then((response) => setItemsOfCategory(response));
  }, [inBasket]);

  return (
    <ul className="rendering-items">
      {itemsOfCategory?.map((element) => (
        <li>
          <span>{element.name}</span>
          <span>{element.price}$</span>

          <button onClick={() => {
            inBasket(element)
          }}>To Cart</button>
        </li>
      ))}
    </ul>
  );
}
