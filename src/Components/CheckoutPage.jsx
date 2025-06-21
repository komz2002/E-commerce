// CheckoutPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, []);

  // Calculate total amount explicitly using reduce and + operator
  const totalAmount = cartItems.reduce((acc, item) => {
    // Convert price to number before adding
    return acc + Number(item.price);
  }, 0);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    localStorage.removeItem('cartItems');

    // Redirect to home page after 2 seconds
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">🧾 Checkout</h2>

      {orderPlaced ? (
        <div className="alert alert-success text-center">
          ✅ Order placed successfully! Redirecting to homepage...
        </div>
      ) : (
        <>
          <div className="card mb-4">
            <div className="card-header fw-bold">Order Summary</div>
            <div className="card-body">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <>
                  {cartItems.map((item, i) => (
                    <div
                      key={i}
                      className="d-flex justify-content-between align-items-center mb-2"
                    >
                      <div>
                        <strong>{item.title}</strong>
                        <div className="text-muted small">{item.description}</div>
                      </div>
                      <span className="fw-semibold">₹{item.price}</span>
                    </div>
                  ))}
                  <hr />
                  <div className="d-flex justify-content-between fs-5 fw-bold">
                    <span>Total Amount:</span>
                    <span>₹{totalAmount}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <button
            className="btn btn-success w-100"
            onClick={handlePlaceOrder}
            disabled={cartItems.length === 0}
          >
            🛒 Place Order (₹{totalAmount})
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
