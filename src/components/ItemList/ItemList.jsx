import Item from ".../item/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="grid-productos">
      {productos.map(prod => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
