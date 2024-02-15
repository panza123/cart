import React, { useContext } from 'react';
import { Shopcontext } from '../../context/Shopcontext';

export default function CartItems({ data }) {
  const { id, productName, price, productImage } = data;
  const { cartItems, addToCart, removeFromCart, updateItemAmount,  } = useContext(Shopcontext);


  return (
    <>
    <div className='cartItem'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <p><b>{productName}</b></p>
        <p>${price}</p>
        <div className='countHandler'>
          <button onClick={() => { removeFromCart(id) }}>-</button>
          <input value={cartItems[id]} onChange={(e) => updateItemAmount(id, Number(e.target.value))} />
          <button onClick={() => { addToCart(id) }}>+</button>
        </div>
  
      </div>
      
    </div>
    
</>
  );
}
