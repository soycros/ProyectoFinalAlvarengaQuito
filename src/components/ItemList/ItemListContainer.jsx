import { useState, useEffect } from "react";
import { getProducts } from "../../../services/getProducts";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(response => setProductos(response))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <section>
      <h2>Catálogo</h2>
      <ItemList productos={productos} />
    </section>
  );
};

export default ItemListContainer;
