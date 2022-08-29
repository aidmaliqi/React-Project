import { useEffect, useState } from "react";
import { Basket } from "../componets/Basket";
import { Header } from "../componets/Header";
import { RenderItems } from "../componets/RenderItems";
export type Category = {
  id: number;
  category: string;
  isClicked: boolean;
};
export type MenuItem = {
  id: number;
  name: string;
  price: number;
  foodCategoryId: number;
  quantity: number;
};

export function OrderPage() {
  const [foodCategories, setfoodCategories] = useState<null | Category[]>(null);
  const [menuItems, setMenuItems] = useState<null | MenuItem[]>(null);
  
  const [itemsInBasket, setItemsInBasket] = useState< MenuItem[] >([]);

  useEffect(() => {
    fetch("http://localhost:4000/foodCategories")
      .then((response) => response.json())
      .then((response) => setfoodCategories(response));
  }, []);
  useEffect(() => {
    fetch("http://localhost:4000/menuItems")
      .then((response) => response.json())
      .then((response) => {
        let filtered = response.filter((item : any) => item.quantity > 0)
        setItemsInBasket(filtered)
      }) ;
  }, []);

  function toggle(id: number) {
    const newCategory = structuredClone(foodCategories);
    const match = newCategory.find((item: Category) => item.id === id);
    match.isClicked = !match.isClicked;

    fetch(`http://localhost:4000/foodCategories/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(match),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));

    setfoodCategories(newCategory);
  }

  function inBasket(item: any) {
    let newArray = structuredClone(itemsInBasket);
    let exist = newArray.find((element: any) => element.id === item.id);
    if (exist) {
      exist.quantity++;

      fetch(`http://localhost:4000/menuItems/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exist),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));

      setItemsInBasket(newArray);
      return;
    }
    item.quantity++;
    newArray.push(item);
    fetch(`http://localhost:4000/menuItems/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));

    setItemsInBasket(newArray);
  }

  function deleteitem(item: any) {

    let newArray = structuredClone(itemsInBasket).filter(
      (el: any) => el.id !== item.id
    );
    item.quantity = 0

    fetch(`http://localhost:4000/menuItems?quantity_ne=0`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArray),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));


    setItemsInBasket(newArray);
  }

  console.log(foodCategories);
  

  return (
    <>
      <Header/>
      <main>
        <nav className="menu-nav">
          <div>
            {foodCategories?.map((item) => (
              <span key={item.id}>
                <a href={`#${item.category}`}>{item.category}</a>{" "}
              </span>
            ))}
          </div>
          <aside></aside>
          <span>
            <a href="" className="more">
              More ↓
            </a>{" "}
          </span>
        </nav>
        <section className="important-section">
          <ul className="food-types-ul">
            {foodCategories?.map((item) => (
              <>
                <li
                  key={item.id}
                  className="food-type-item"
                  onClick={() => toggle(item.id)}
                  id={item.category}
                >
                  {item.category}
                  <span className="material-symbols-outlined">expand_more</span>
                </li>
                {item.isClicked && (
                  <RenderItems item={item} inBasket={inBasket} />
                )}
              </>
            ))}
          </ul>

          <Basket itemsInBasket={itemsInBasket} deleteitem={deleteitem} setItemsInBasket={setItemsInBasket}  />
        </section>
      </main>
    </>
  );
}
