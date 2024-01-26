import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";

import { Products, Navbar } from "./components";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import ShippingForm from "./components/Shipping/ShippingForm";
import OrderPlaced from "./components/Shipping/OrderPlaced";
import NotFound from "./components/NotFound";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  //Fetch Products when renders for the first time
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  //Fetch cart when renders for the first time
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  //Add item to the cart
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  //empty the cart
  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty();
    setCart(item);
  };

  //remove item from the cart
  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId);
    setCart(item);
  };

  //Update cart Quantity
  const handleUpdateCartQty = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, { quantity });
    setCart(item);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log(cart);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} handleEmptyCart={handleEmptyCart} handleRemoveFromCart={handleRemoveFromCart} handleUpdateCartQty={handleUpdateCartQty} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping" element={<ShippingForm />} />
          <Route path="/order" element={<OrderPlaced />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
