import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import { ToastContainer, toast, Bounce } from "react-toastify"; 
import Product from "./Product"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./ProductDetail.css"; 

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter(
      (product) => product.id === parseInt(id)
    ); // Use parseInt to compare
    setProduct(filterProduct[0]);
    if (filterProduct[0]) {
      const related = items.filter(
        (suman) => suman.category === filterProduct[0].category
      );
      setRelatedProducts(related);
    }
  }, [id]);

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = { id, price, title, description, imgSrc };

    setCart((prevCart) => [...prevCart, obj]);

    toast.success("🦄 Your item is added!", {
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
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <h1 className="card-title">{product.title}</h1>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-primary mx-3">{product.price} ₹</button>
            <button
              onClick={() =>
                addToCart(
                  product.id,
                  product.price,
                  product.title,
                  product.description,
                  product.imgSrc
                )
              }
              className="btn btn-warning mx-3"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <h1 className="text-center my-5">Related Products</h1>
      <div className="container">
        <Product cart={cart} setCart={setCart} items={relatedProducts} />
      </div>
    </>
  );
};

export default ProductDetail;
