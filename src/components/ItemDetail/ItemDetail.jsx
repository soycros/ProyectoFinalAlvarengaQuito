import ItemCount from ".../item/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, title, price, description, stock }) => {
  const [addedQuantity, setAddedQuantity] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleAdd = quantity => {
    setAddedQuantity(quantity);
    addItem({ id, title, price }, quantity);
  };

  return (
    <div className="item-detail">
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
      <p>Stock: {stock}</p>
      {addedQuantity > 0 ? (
        <Link to="/cart">Ir al carrito</Link>
      ) : (
        <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
