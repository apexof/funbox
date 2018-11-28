import React from 'react';
import ProductList from '../ProductList';
import products from '../../products.js';
import './App.sass';

function App() {
  return (
    <ProductList products = {products} />
  );
};

export default App;
