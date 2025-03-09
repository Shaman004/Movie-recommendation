import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>
            <Link to='/'>Home</Link>
        </div>
        <div className='nav-items'>
            
            <Link to='/Favourites' className='nav-item'>Favourites</Link>
        </div>
    </nav>
  )
}

export default Navbar