import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';
import react from 'react';

const Searchitems = ({cart,setCart}) => {
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
    <>
        <Product cart={cart} setCart={setCart} items={filterData} />
        </>
     

    
      

  );
}

export default Searchitems;
