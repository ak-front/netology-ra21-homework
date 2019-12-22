import React from 'react';

import ShopProduct from './models/ShopProduct';

import Store from './components/Store';

import productsJson from './data/products';

import './App.css';

function App() {
  return (
    <Store products={productsJson.map(product => new ShopProduct(product))} />
  );
}

export default App;
