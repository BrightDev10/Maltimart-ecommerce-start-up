import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ data }) => {
  return (
    <div className='xs=“1“ sm=“2“ md=“4“ d-flex flex-row flex-wrap'>
      {data?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
