import React from 'react';
import './shop.css';
import { PRODUCTS } from '../../Product';
import Products from './Products';

export default function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PANZA</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product, index) => (
          <Products key={index} data={product} />
        ))}
      </div>
    </div>
  );
}
