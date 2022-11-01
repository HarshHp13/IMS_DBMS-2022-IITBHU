import {Input, Button} from '@mui/material'
import React from 'react'
import {useState} from 'react'
import './LoginAdmin.css'

function LoginAdmin() {
  const[signUp,setSignUp]=useState(false);

  return (
    <>
        <form className='loginAdmin__container'>
          <center><h3>Admin Login</h3></center>
          <Input className='loginAdmin__email' type='email' placeholder='Username' />
          <Input className='loginAdmin__password' type='password' placeholder='Password'/>
          <center><Button className='loginAdmin__button'>Login</Button></center>
        </form>
    </>
  )
}
export default LoginAdmin