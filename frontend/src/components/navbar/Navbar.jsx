import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState('shop');

    const navigate = useNavigate();

    const handleclick = () =>{
        navigate('/loginsignup')
    }

    const CartNavigate = () =>{
        navigate('/cart')
    }

  return (
    <div className='navbar'>
        <div className="navlogo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('mens')}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==='mens'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('womens')}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==='womens'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
        </ul>
        <div className="login-cart">
            <button onClick={handleclick}>Login</button>
            <img src={cart_icon} onClick={CartNavigate} alt="" />
            <div className="cart-counter">
                0
            </div>
        </div>
    </div>
  )
}

export default Navbar