import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>

<div className='links'>
<Link to='/'>Shop</Link>
<Link to='/cart'><FaCartShopping size={32} /></Link>
</div>
    </div>
  )
}
