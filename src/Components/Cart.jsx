// Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart = [], setCart }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleCheckout = () => {
    // Save cart to localStorage before going to checkout
    localStorage.setItem('cartItems', JSON.stringify(cart));
    navigate('/checkout');
  };

  return (
    <>
      <div className="container my-5" style={{ width: "50%" }}>
        {cart.length === 0 ? (
          <>
            <h4>Your cart is empty</h4>
            <button className="btn btn-warning mt-2" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </>
        ) : (
          cart.map((product, index) => (
            <div className="card mb-3 my-5" style={{ width: '700px' }} key={index}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.imgSrc} className="img-fluid rounded-start" alt={product.title || "Product Image"} />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title || "No title available"}</h5>
                    <p className="card-text">{product.description || "No description available"}</p>
                    <button className="btn btn-primary mx-3">
                      {product.price} ₹
                    </button>
                    <button className="btn btn-warning">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length !== 0 && (
        <div className="container text-center my-5" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "50%" }}>
          <button className="btn btn-warning mx-5" onClick={handleCheckout}>
            Checkout
          </button>
          <button className="btn btn-danger mt-2 text-center mx-5" onClick={() => setCart([])}>
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
