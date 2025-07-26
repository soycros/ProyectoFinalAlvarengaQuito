// src/components/Checkout/CheckoutForm.jsx
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer: { nombre, email, telefono },
      items: cart,
      total: totalPrice(),
      date: serverTimestamp()
    };

    try {
      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, order);

      clearCart();
      navigate(`/checkout/success/${docRef.id}`);
    } catch (error) {
      console.error("Error al generar la orden:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario de compra</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={e => setTelefono(e.target.value)}
        required
      />
      <button type="submit">Generar orden</button>
    </form>
  );
};

export default CheckoutForm;