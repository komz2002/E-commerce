import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';
import "./Searchitems.css";

const Searchitems = ({ cart, setCart }) => {
  const { term } = useParams();  
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      if (term && typeof term === 'string') {
        const data = items.filter((p) =>
          p.title && typeof p.title === 'string' && p.title.toLowerCase().includes(term.toLowerCase())
        );
        setFilterData(data);
      }
    };
    filteredData();
  }, [term]);

  return (
    <div className="container-l my-5">
      <h2 className="text-center mb-4">Search Results for "{term}"</h2>

      {filterData.length === 0 ? (
        <div className="text-center">
          <p>No results found for "{term}".</p>
        </div>
      ) : (
        <Product cart={cart} setCart={setCart} items={filterData} />
      )}
    </div>
  );
};

export default Searchitems;
