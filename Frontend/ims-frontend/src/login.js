import React from 'react'
import {useState} from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
import { userLogin, userSignup } from './services/api_connect';


export default function 
Login() {
    const[username, setUsername]=useState("");
    const[password, setPassword]=useState("");
    const[route, setRoute]=useState(false);
    function clickHandler(e){
        e.preventDefault();
        userLogin(username,password).then((res)=>{res===200?setRoute(true):console.log("failure")})
    }
    function clickHandlerSignup(e){
        e.preventDefault();
        userSignup(username,password).then((res)=>{res===200?setRoute(true):console.log("failure")})
    }
    
    const navigate=useNavigate()
    if(route){navigate('/home')}
    else{}
  return (
    <div className='login__container'>
        <form className='login__form'>
            <input className='login__input' type="text" onChange={e=>setUsername(e.target.value)}  placeholder="Username"/>
            <input className='login__input' type="password" onChange={e=>setPassword(e.target.value)}  placeholder="Password" />
            <center><div>
            <button className='login__button' onClick={clickHandler}>Sign In</button>
            <button className='login__button' onClick={clickHandlerSignup}>Sign Up</button>
            </div></center>
        </form>
    
    </div>
  )
}
