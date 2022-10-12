import { Link } from "react-router-dom";
import Logo from "../../../Image/LogoV2-1.png.webp";
import { FaSearch, FaUserAlt, FaShoppingBag } from "react-icons/fa";

const Header = () => {
  return (
    <section className="menus-bar" style={{ padding: "40px 40px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 menu-col">
            <div className="brand">
              <Link to="/">
                <img className="logo-img" src={Logo} alt="logo" />
              </Link>
            </div>
            <ul className="menu-name">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="shop">Shop</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>

              <li>
                <Link to="cart">Cart</Link>
              </li>
            </ul>
            <ul className="menu-icons">
              <li>
                <FaSearch />
              </li>
              <li>
                <FaUserAlt />
              </li>
              <li>
                <FaShoppingBag />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
