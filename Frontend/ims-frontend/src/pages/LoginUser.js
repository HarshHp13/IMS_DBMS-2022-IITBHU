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
  const [fname, setfname] = useState("")
  const [lname, setlname] = useState("")
  const [dob, setDob] = useState(null)
  // const [email, setEmail] = useState("")
  const [house, setHouse] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [profession, setProfession] = useState("")
  const [income, setIncome] = useState("")
  // const [referrals, setReferrals] = useState(0)
  const [gender, setGender] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("")
  const [signUpDate, setSignUpDate] = useState(null)
  // const [referred, setReferred] = useState("")
  // const [branchId, setBranchId] = useState("")
  const [phone, setPhone] = useState("")
  const navigate= useNavigate()

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
    return res;
  }

  function clickHandler(e,user,pass){
    e.preventDefault();
    userLogin(user,pass)
    .then((res)=>{
      const accessToken=res.headers.get('access_token')
      const refreshToken=res.headers.get('refresh_token')
      setAuth({accessToken, refreshToken})
      document.elementFromPoint(0,0).click()
      
    })
    .catch((error)=>{
      console.log(error)
      alert("Wrong Username or Password!!")
    })
    
  }


  const userSignup= async ()=>{
    const auth={
      username: usernameSignup,
      password: passwordSignup,
      fname: fname,
      lname: lname,
      // date: dob,
      house: house,
      street: street,
      city: city,
      state: state,
      zipcode: zipcode,
      income: income,
      profession: profession,
      gender: gender,
      maritalStatus: maritalStatus,
      phone: phone

    }
    const data=qs.stringify(auth)
    const res = await axios.post('/signUp', data, {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded",
        }
    })
    // .then(userLogin(username,password))
    console.log(usernameSignup+" : "+passwordSignup)
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
      <><div className='signUpUser__wrapper'>

      
          <form className='signUpUser__container'>

            <center><h3>User Sign Up</h3></center>
            <Input className='loginUser__input' type='email' placeholder='Email' onChange={(e)=>setUsernameSignup(e.target.value)} required/>
            <Input className='loginUser__input' type='password' placeholder='Password' onChange={(e)=>setPasswordSignup(e.target.value)} required/> 
            <Input className='loginUser__input' type='text' placeholder='First Name' onChange={(e)=>setfname(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='Last Name' onChange={(e)=>setlname(e.target.value)} required />
            <Input className='loginUser__input' type='date' placeholder='DOB' onChange={(e)=>setDob(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='House No' onChange={(e)=>setHouse(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='Street Name' onChange={(e)=>setStreet(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='City' onChange={(e)=>setCity(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='State' onChange={(e)=>setState(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='Zipcode' onChange={(e)=>setZipcode(e.target.value)} required />
            <Input className='loginUser__input' type='number' placeholder='Income' onChange={(e)=>setIncome(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='Profession' onChange={(e)=>setProfession(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='Gender' onChange={(e)=>setGender(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='Marital Status' onChange={(e)=>setMaritalStatus(e.target.value)} required />
            <Input className='loginUser__input' type='tel' placeholder='Phone' onChange={(e)=>setPhone(e.target.value)} required />
            <center><Button className='loginUser__button' onClick={clickHandlerSignup}>Sign Up</Button></center>
            <center><div className='loginUser__text' onClick={()=>setSignUp(false)}>Already a user? Sign In</div></center>
          </form>
          </div>
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