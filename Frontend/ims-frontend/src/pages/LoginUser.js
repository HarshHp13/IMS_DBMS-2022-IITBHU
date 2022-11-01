import {Input, Button} from '@mui/material'
import React from 'react'
import {useState} from 'react'
import './LoginUser.css'
import axios from '../services/axios'
import qs from 'qs'
import UseAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

function LoginUser() {
  const[signUp,setSignUp]=useState(false);
  const { setAuth }=UseAuth();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [usernameSignup, setUsernameSignup] = useState("")
  const [passwordSignup, setPasswordSignup] = useState("")
  const navigate=useNavigate()

  const userLogin=async (username, password)=>{
    const auth={
      username: username,
      password: password
    }
    const data=qs.stringify(auth)
    const res = await axios.post('/login', data, {
      headers: {
          'Content-Type': "application/x-www-form-urlencoded",
      }
    });
    console.log(username+" : "+password)
    return res;
  }

  function clickHandler(e,user,pass){
    e.preventDefault();
    userLogin(user,pass)
    .then((res)=>{
      try{
        const accessToken=res.headers.get('access_token')
        const refreshToken=res.headers.get('refresh_token')
        setAuth({accessToken, refreshToken})
        navigate('/')
      }
      catch(e){
        console.log(e)
        alert("Wrong Username or Password!!")
      }
    })
    
  }


  const userSignup= async (username, password)=>{
    const auth={
        username: username,
        password: password
    }
    const data=qs.stringify(auth)
    const res = await axios.post('/signUp', data, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded",
        }
    })
    // .then(userLogin(username,password))
    console.log(username+" : "+password)
    return res;
 }

 

 

 function clickHandlerSignup(e){
       e.preventDefault();
       userSignup(usernameSignup,passwordSignup)
       .then((res)=>{
          
          // console.log(auth.accessToken)
          

          clickHandler(e,usernameSignup,passwordSignup)
          
          // navigate('/home')
          // res.status===200?setRouteSignUp(true):console.log("failure");
       })
       // .then((res)=>{
       //     if(routeSignUp){
       //         navigate('/home')
       //         alert("Account Created Successfully!! Please Sign In.")
       //     }
       //     else {
       //         alert("It seems there was a problem. Please try again")
       //     }
          
       // })
       
 }




  if(signUp){
    return (
      <>
          <form className='signUpUser__container'>

            <center><h3>User Sign Up</h3></center>
            <Input className='loginUser__input' type='text' placeholder='First Name' />
            <Input className='loginUser__input' type='text' placeholder='Last Name' />
            <Input className='loginUser__input' type='text' placeholder='Username' onChange={(e)=>setUsernameSignup(e.target.value)} required/>
            <Input className='loginUser__input' type='password' placeholder='Password' onChange={(e)=>setPasswordSignup(e.target.value)} required/> 
            <Input className='loginUser__input' type='email' placeholder='Email' />
            <Input className='loginUser__input' type='tel' placeholder='Phone' />
            <center><Button className='loginUser__button' onClick={clickHandlerSignup}>Sign Up</Button></center>
            <center><div className='loginUser__text' onClick={()=>setSignUp(false)}>Already a user? Sign In</div></center>
          </form>
      </>
    )
  }
  else{
    return (
      <>
          <form className='loginUser__container'>
            <center><h3>User Login</h3></center>
            <Input className='loginUser__input' type='email' placeholder='Username' onChange={(e)=>setUsername(e.target.value)} required/>
            <Input className='loginUser__input' type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>
            <center><Button className='loginUser__button' onClick={(e)=>{clickHandler(e,username,password)}}>Login</Button></center>
            <center><div className='loginUser__text' onClick={()=>setSignUp(true)}>Sign Up if not already a user</div></center>
          </form>
      </>
    )
  }
    
}
export default LoginUser