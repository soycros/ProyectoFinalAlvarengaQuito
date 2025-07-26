import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  const { orderId } = useParams();

  return (
    <section className="order-success">
      <h2>¡Gracias por tu compra!</h2>
      <p>Tu número de orden es:</p>
      <strong>{orderId}</strong>
      <br />
      <Link to="/" className="return-button">Volver al catálogo</Link>
    </section>
  );
};

export default OrderSuccess;
