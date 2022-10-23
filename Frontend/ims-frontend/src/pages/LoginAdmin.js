import {Input, Button} from '@mui/material'
import React from 'react'
import {useState} from 'react'
import './LoginAdmin.css'

function LoginAdmin() {
  const[signUp,setSignUp]=useState(false);

  return (
    <>
        <form className='loginAdmin__container'>
          {
            signUp
            ?<center><h3>Admin Login</h3></center>
            :<center><h3>Admin Sign Up</h3></center>
          }
            
            <Input className='loginAdmin__email' type='email' placeholder='Username' />
            <Input className='loginAdmin__password' type='password' placeholder='Password'/>
            {
              signUp
              ?<center><div className='loginAdmin__text' onClick={()=>setSignUp(false)}>Already a user? Sign In</div></center>
              :<center><div className='loginAdmin__text' onClick={()=>setSignUp(true)}>Sign Up if not already a user</div></center>
            }
            <center><Button className='loginAdmin__button'>Submit</Button></center>
        </form>
    </>
  )
}
export default LoginAdmin