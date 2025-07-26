import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./src/components/NavBar/NavBar";
import ItemListContainer from "./src/components/ItemList/ItemListContainer";
import ItemDetailContainer from "./src/components/ItemDetail/ItemDetailContainer";
import Cart from "./src/components/cart/Cart";
import CheckoutForm from "./src/components/Checkout/CheckoutForm";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
