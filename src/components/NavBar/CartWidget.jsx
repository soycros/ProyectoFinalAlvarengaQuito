import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const quantity = totalQuantity();

  return (
    <Link to="/cart" className="cart-widget">
      🛒 {quantity > 0 && <span>{quantity}</span>}
    </Link>
  );
};

export default CartWidget;
