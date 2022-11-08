import {Input, Button} from '@mui/material'
import React from 'react'
import {useState} from 'react'
import './LoginUser.css'
import axios from '../services/axios'
import qs from 'qs'
import UseAuth from '../hooks/useAuth'
// import UseAxiosPrivate from '../hooks/useAxiosPrivate'
import { useNavigate } from 'react-router-dom'


function LoginUser() {
  const { auth,setAuth }=UseAuth();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
 
  const navigate= useNavigate()
  const [roleStat, setRoleStat]= useState(null)



  const userLogin=async ()=>{
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
    return res;
  }

  function clickHandler(e,user,pass) {
    e.preventDefault();
    if(roleStat===true){
      userLogin(user,pass)
      .then((res)=>{
        const accessToken=res.headers.get('access_token')
        const refreshToken=res.headers.get('refresh_token')
        setAuth({accessToken, refreshToken, isAuthenticated: true, role:"AGENT"})
        navigate('/')
      })
      .catch((error)=>{
        console.log(error)
        alert("Wrong Username or Password!!")
      })
      document.elementFromPoint(0,0).click()
    }
    else{
      alert("Wrong Username or Password!!!")
    }
    
  }


 const checkAuth=(val)=>{
  axios.post("/auth/checkRole",{username:val,role:"AGENT"}).then((res)=>{setRoleStat(res.data)})
 }



 return (
  <>
      <form className='loginUser__container'>
        <center><h3>Agent Login</h3></center>
        <Input className={roleStat===true?'loginUser__inputCorrect':roleStat===false?'loginUser__inputWrong':'loginUser__input'} type='email' placeholder='Username' onChange={(e)=>{setUsername(e.target.value);checkAuth(e.target.value)}} required/>
        <Input className='loginUser__input' type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>
        <center><Button className='loginUser__button' onClick={(e)=>{clickHandler(e,username,password)}}>Login</Button></center>
      </form>
  </>
)
    
}
export default LoginUser