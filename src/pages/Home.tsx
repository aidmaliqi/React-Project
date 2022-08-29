import "material-symbols";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img src="/src/assets/logo.svg" alt="" />
          <span className="Logo-span0">Crave Mediterranean Grill</span>
        </div>
        <div></div>
        <div className="header-items">
          <Link to={'/Profile'} className="link"><span className="material-symbols-outlined1">account_circle</span></Link>
          
          <span className="material-symbols-outlined1 ">menu</span>
        </div>
      </header>
      <main>
        <div className="background-wrapper">
          <img
            src="/src/assets/bg111.jpeg"
            alt=""
            className="background-image"
          />
        </div>
        <div className="logo-div">
          <img src="/src/assets/logo.svg" alt="" className="logo-img" />
          <span className="Logo-span">Crave </span>
          <span className="Logo-span"> Mediterranean </span>
          <span className="Logo-span"> Grill</span>
          <div></div>
          <a href="#first-section">
            <span className="material-symbols-outlined2">arrow_downward</span>
          </a>
        </div>

        <section className="categories-section" id="first-section">
          <div className="res-circle">
            <Link to="/menu" className="link">
              <div className="circle-txt">Order Online</div>
            </Link>
          </div>
          <div className="categories">
            <img
              src="/src/assets/img2.jpeg"
              alt=""
              className="categories-image"
            />
          </div>
          <div className="categories-menu">Menu</div>
          <div className="categories">
            <img
              src="/src/assets/bg5.webp"
              alt=""
              className="categories-image"
            />
          </div>
        </section>

        <section className="categories-section2">
          <div className="categories">
            <img
              src="/src/assets/img6.webp"
              alt=""
              className="categories-image"
            />
          </div>
          <div className="categories-about-us">About-Us</div>
          <div className="categories">
            <img
              src="/src/assets/img3.jpeg"
              alt=""
              className="categories-image"
            />
          </div>
        </section>
        <section className="categories-section3">
          <div className="categories-chef">
            <img
              src="/src/assets/img8.jpeg"
              alt=""
              className="categories-image"
            />
          </div>
          <div className="categories-location">
            <span className="span">Contact &</span>
            <span className="span">Location</span>
            <span className="material-symbols-outlined">location_on</span>
          </div>
          <div className="categories">
            <img
              src="/src/assets/img5.jpeg"
              alt=""
              className="categories-image"
            />
          </div>
          <div className="categories">
            <img
              src="/src/assets/img9.jpeg"
              alt=""
              className="categories-image"
            />
          </div>
        </section>

        <section className="story-section">
          <span>Our Story</span>
          <div className="line"></div>
          <div className="text">
            <span className="about-us">
              We are a family owned and run business with many years of culinary
              Mediterranean cuisine experience. Gaining expertise in Five Star
              Hotels in Spain and continuing by working with many well known
              Italian chefs and restaurants in Veniece.
            </span>

            <span>Read more 🧾</span>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
