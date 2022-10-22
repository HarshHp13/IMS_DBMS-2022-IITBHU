import {Input, Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <>
        <div className="navbar__container">
            <h3 className='navbar__link'><Link className='link' to={'/'}>Home</Link></h3>    
            <h3 className='navbar__link'><Link className='link' to={'/policies'}>Policies</Link></h3>
            {/* <h3 className='navbar__link'><Link className='link' to={'/'}>Active Plans</Link></h3> */}
            <h3 className='navbar__link'><Link className='link' to={'/about'}>About Us</Link></h3>
            <h3 className='navbar__link'><Link className='link' to={'/'}>Contact Us</Link></h3>
        </div>
    </>
  )
}
export default Navbar;