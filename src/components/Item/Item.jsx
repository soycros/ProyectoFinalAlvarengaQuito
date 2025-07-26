import { Link } from "react-router-dom";

const Item = ({ id, title, price, description }) => {
  return (
    <div className="card-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
      <Link to={`/item/${id}`}>Ver más</Link>
    </div>
  );
};

export default Item;
