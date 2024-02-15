import React, { useContext } from 'react'
import { PRODUCTS } from '../../Product'
import { Shopcontext } from '../../context/Shopcontext'
import CartItems from './CartItems'
import  './cart.css'
import { useNavigate } from 'react-router-dom'
export default function Cart() {
  const {cartItems,getTotalAmount} = useContext(Shopcontext)
  const totalAmount = getTotalAmount(); 
  const navigate = useNavigate()
  return (
    <div className='cart'>
<div>
  Your Cart Items
</div>
<div className='cartItems'>
{PRODUCTS.map((products)=>{
  if(cartItems[products.id] !== 0){
    return <CartItems data={products}/>
  }
})}
</div>
  {totalAmount > 0 ? 
<div className='checkout'>
          <p>subamount: ${totalAmount}</p>
          <button onClick={()=>navigate('/')}>Continue Shopping</button>
          <button>Checkout</button>
        </div>:<></> }
    </div>
  )
}
