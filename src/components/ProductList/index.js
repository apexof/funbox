import React from 'react';
import Product from '../Product';
import './ProductList.sass';

function ProductList({products}) {
  const productElements = products.map(function(item){
    return (
      <div className="col-12 col-md-6 col-xl-4" key = {item.id}>
        <Product product = {item} />
      </div>
    );
  });
  return (
    <div className="product-list">
      <div className="container">
        <h1 className="product-list__title">Ты сегодня покормил кота?</h1>
        <div className="row justify-content-center">
          {productElements}
        </div>
      </div>
    </div>
  );
};

export default ProductList;