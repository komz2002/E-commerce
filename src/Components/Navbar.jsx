import React, { useState } from "react";
import { items } from './Data';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import { FaCartArrowDown } from "react-icons/fa";
import "./Navbar.css"

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid nav-bar-p">
            <Link to="/" className="navbar-brand">E-cart</Link>
            
            {/* Toggler for mobile view */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form
                onSubmit={handleSubmit}
                className="d-flex me-auto me-3"
              >
                <input
                  className="form-control me-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type="search"
                  placeholder="Search Products"
                  aria-label="Search"
                />
              </form>

              <Link to='/cart' className="btn btn-primary position-relative me-3">
                <FaCartArrowDown style={{ fontSize: '1.5rem' }} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>
            </div>
          </div>
        </nav>

        {location.pathname === "/" && (
          <div className="container-fluid  nav-bar-wrapper">
            <div className="row text-center">
              <div className="col-12 col-md-auto mb-2 mb-md-0">Filter by {"->"}</div>
              <div className="col-12 col-md-auto mb-2 mb-md-0" onClick={() => setData(items)}>No Filter</div>
              <div className="col-12 col-md-auto mb-2 mb-md-0" onClick={() => filterByCategory('mobiles')}>Mobiles</div>
              <div className="col-12 col-md-auto mb-2 mb-md-0" onClick={() => filterByCategory('laptops')}>Laptops</div>
              <div className="col-12 col-md-auto mb-2 mb-md-0" onClick={() => filterByCategory('tablets')}>Tablets</div>
              <div className="col-12 col-md-auto mb-2 mb-md-0" onClick={() => filterByPrice(29999)}>{">="} 29999</div>
              <div className="col-12 col-md-auto mb-2 mb-md-0" onClick={() => filterByPrice(49999)}>{">="} 49999</div>
              <div className="col-12 col-md-auto mb-2 mb-md-0" onClick={() => filterByPrice(69999)}>{">="} 69999</div>
              <div className="col-12 col-md-auto mb-2 mb-md-0" onClick={() => filterByPrice(89999)}>{">="} 89999</div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
