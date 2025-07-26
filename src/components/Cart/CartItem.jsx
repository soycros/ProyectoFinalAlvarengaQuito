import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartItem = ({ id, title, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="cart-item">
      <h3>{title}</h3>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;