import {Input, Button} from '@mui/material'
import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
        <div className="navbar__container">
            <h3 className='navbar__left'>Home</h3>
            <h3 className='navbar__left'>About Us</h3>
            <h3 className='navbar__left'>Policies</h3>
            <h3 className='navbar__left'>Contact Us</h3>
            <h3 className='navbar__left'>Your Clients</h3>
        </div>
    </>
  )
}
export default Navbar;