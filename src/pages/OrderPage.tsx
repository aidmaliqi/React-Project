import { useEffect, useState } from "react";
import { RenderItems } from "../componets/RenderItems";
type Category = {
  id: number;
  Category: string;
  isClicked: boolean;
};
type MenuItem = {
  id: number;
  name: string;
  price: number;
  CategoryId: number;
};

export function OrderPage() {
  const [foodCategories, setfoodCategories] = useState<null | Category[]>(null);
  const [menuItems, setMenuItems] = useState<null | MenuItem[]>(null);
  const [clickedMenuItem, setClickedMenuItem] = useState<null | MenuItem>(null);

  useEffect(() => {
    fetch("http://localhost:4000/foodCategories")
      .then((response) => response.json())
      .then((response) => setfoodCategories(response));
  }, []);
  useEffect(() => {
    fetch("http://localhost:4000/MenuItems")
      .then((response) => response.json())
      .then((response) => setMenuItems(response));
  }, []);

  function toggle(id: number) {
    const newCategory = structuredClone(foodCategories);
    const match = newCategory.find((item) => item.id === id);
    match.isClicked = !match.isClicked;

    fetch(`http://localhost:4000/foodCategories/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));

    setfoodCategories(newCategory);
  }

  console.log(foodCategories);
  console.log(menuItems);

  return (
    <>
      <header className="second-header">
        <div className="header-photo">
          <img src="/src/assets/img6.jpeg" alt="" />
          <div className="white-div">
            <img src="/src/assets/logo.svg" alt="" className="logo-img2" />
            <h1>Crave Mediterranean Grill</h1>
            <span>Mediterranean - Spanish</span>
            <span>⭐ 4.5</span>
            <span>Luciano Caño,9, 15004 A Coruña Galicia, Spain</span>
          </div>
        </div>
      </header>
      <main>
        <nav className="menu-nav">
          <div>
            {foodCategories?.map((item) => (
              <span key={item.id}>
                <a href="">{item.Category}</a>{" "}
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
                >
                  {item.Category}
                  <span className="material-symbols-outlined">expand_more</span>
                </li>
                {item.isClicked && <RenderItems />}
              </>
            ))}
          </ul>
          <div className="basket">
            <form action="" className="form">
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
                  <li className="item-inbasket">
                    <input type="number" />
                    <span>food name</span>
                    <span className="material-symbols-outlined">delete</span>
                    <span>55$</span>
                  </li>
                </ul>
              </main>
              <footer>
                <span>Order Total</span>
                <span>55$</span>
              </footer>
              <div className="order-button">
                <button>Order</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
