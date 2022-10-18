import {Input, Button} from '@mui/material'
import React from 'react'
import './LoginUser.css'

function LoginAdmin() {
  return (
    <>
        <form className='loginUser__container'>
            <center><h3>User Login</h3></center>   
            <Input className='loginUser__email' type='email' placeholder='Username' />
            <Input className='loginUser__password' type='password' placeholder='Password'/>
            <Button className='loginUser__button'>Submit</Button> 
        </form>
    </>
  )
}
export default LoginAdmin