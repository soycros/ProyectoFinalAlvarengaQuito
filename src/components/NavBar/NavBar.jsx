import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <header className="navbar">
      <Link to="/" className="logo">TechStore</Link>
      <nav>
        <NavLink to="/category/laptops">Laptops</NavLink>
        <NavLink to="/category/mobiles">Móviles</NavLink>
        <NavLink to="/category/accessories">Accesorios</NavLink>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
