import {Input, Button} from '@mui/material'
import React from 'react'
import './LoginAdmin.css'

function LoginAdmin() {
  return (
    <>
        <form className='loginAdmin__container'>
            <center><h3>Admin Login</h3></center>
            <Input className='loginAdmin__email' type='email' placeholder='Username' />
            <Input className='loginAdmin__password' type='password' placeholder='Password'/>
            <Button className='loginAdmin__button'>Submit</Button> 
        </form>
    </>
  )
}
export default LoginAdmin