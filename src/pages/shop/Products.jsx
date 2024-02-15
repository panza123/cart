import React, { useContext } from 'react';
import { Shopcontext } from '../../context/Shopcontext';

export default function Products({ data }) {
  const { addToCart,cartItems } = useContext(Shopcontext);
  const { id, productImage, productName, price } = data;
  

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" 
      onClick={() => addToCart(id)}>
        Add To Cart
      </button>
    </div>
  );
}

