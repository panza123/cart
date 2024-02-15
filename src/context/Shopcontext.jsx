import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../Product';

export const Shopcontext = createContext(null);

function getDefaultCart() {
  let cart = {};
  for (let i = 0; i < PRODUCTS.length; i++) {
    cart[PRODUCTS[i].id] = 0;
  }
  return cart;
}

export default function ShopcontextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  function addToCart(itemId) {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  }

  function removeFromCart(itemId) {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] - 1,
      }));
    }
  }
  function updateItemAmount(newAmount, itemId) {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: newAmount,
    }));
  }
  function getTotalAmount() {
    let totalAmount = 0;
    for (const [itemId, quantity] of Object.entries(cartItems)) {
      if (quantity > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === Number(itemId));
        if (itemInfo) {
          totalAmount += quantity * itemInfo.price;
        }
      }
    }
    return totalAmount;
  }
  
  const contextValue = { cartItems, 
    addToCart,
     removeFromCart,
     updateItemAmount,
     getTotalAmount
     };

  console.log(cartItems);

  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  );
}
