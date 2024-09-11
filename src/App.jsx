import Navbar from './Components/Navbar';
import React, { useState } from 'react';
import { items } from './Components/Data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Components/Product';
import ProductDetail from './Components/ProductDetail';
import Searchitems from './Components/Searchitems';
import Cart from './Components/Cart';

const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} setData={setData} />
      <Routes>
        <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search/:term" element={<Searchitems cart={cart}setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
};

export default App;

