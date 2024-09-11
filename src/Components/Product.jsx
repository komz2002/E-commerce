import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ items, cart, setCart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = { id, price, title, description, imgSrc };
    
    setCart((prevCart) => [...prevCart, obj]);
    
    toast.success('🦄 Your item is added!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <div className="container my-6">
        <div className="row">
          {items.map((product) => {
            return (
              <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 my-3 text-center">
                <div className="card" style={{ width: "100%" }}>
                  <Link 
                    to={`/product/${product.id}`}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <img
                      src={product.imgSrc}
                      className="card-img-top img-fluid"
                      alt={product.title}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary mx-3">
                      {product.price} ₹
                    </button>
                    <button
                      onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                      className="btn btn-warning"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      
      <style jsx>{`
        .card-img-top {
          object-fit: contain;
          height: auto;
        }
        
        @media (max-width: 576px) {
          .card {
            width: 100%; 
          }
        }
      `}</style>
    </>
  );
};

export default Product;
