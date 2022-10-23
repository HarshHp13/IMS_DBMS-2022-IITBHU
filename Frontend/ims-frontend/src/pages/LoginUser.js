import {Input, Button} from '@mui/material'
import React from 'react'
import {useState} from 'react'
import './LoginUser.css'

function LoginUser() {
  const[signUp,setSignUp]=useState(false);

  if(signUp){
    return (
      <>
          <form className='loginUser__container'>

            <center><h3>User Sign Up</h3></center>
            <Input className='loginUser__input' type='text' placeholder='First Name' required/>
            <Input className='loginUser__input' type='text' placeholder='Last Name' required/>
            <Input className='loginUser__input' type='text' placeholder='Username' required/>
            <Input className='loginUser__input' type='password' placeholder='Password' required/>
            <Input className='loginUser__input' type='email' placeholder='Email' required/>
            <Input className='loginUser__input' type='tel' placeholder='Phone' />
            <center><div className='loginUser__text' onClick={()=>setSignUp(false)}>Already a user? Sign In</div></center>
            <center><Button className='loginUser__button'>Submit</Button></center>
          </form>
      </>
    )
  }
  else{
    return (
      <>
          <form className='loginUser__container'>
            <center><h3>User Login</h3></center>
            <Input className='loginUser__input' type='email' placeholder='Username' />
            <Input className='loginUser__input' type='password' placeholder='Password'/>
            <center><div className='loginUser__text' onClick={()=>setSignUp(true)}>Sign Up if not already a user</div></center>
            <center><Button className='loginUser__button'>Submit</Button></center>
          </form>
      </>
    )
  }
    
}
export default LoginUser