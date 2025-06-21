// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ setCart }) => {
  const navigate = useNavigate();

  const sampleProduct = {
    title: "T-Shirt",
    price: 599,
    description: "Comfortable cotton T-shirt",
    imgSrc: "https://via.placeholder.com/150"
  };

  const addToCart = () => {
    setCart(prev => [...prev, sampleProduct]);
    navigate('/cart');
  };

  return (
    <div className="container my-5">
      <h2>Sample Product</h2>
      <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Home;
