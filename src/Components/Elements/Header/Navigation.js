import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Shop from "../../Pages/Shop";
import Contact from "../../Pages/Contact";
import Cart from "../../Pages/Cart";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Cart" element={<Cart />} />
    </Routes>
  );
};

export default Navigation;
