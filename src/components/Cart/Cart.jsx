import { useContext } from "react";
import { CartContext } from "..../context/cartcontext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <section>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>Carrito de compras</h2>
      {cart.map(prod => (
        <CartItem key={prod.id} {...prod} />
      ))}
      <p>Total: ${totalPrice()}</p>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </section>
  );
};

export default Cart;