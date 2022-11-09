import React from 'react'
import {Input, Button, Select, InputLabel, MenuItem, FormControl} from '@mui/material'
import {useState, useEffect} from 'react'
import './LoginUser.css'
import axios from '../services/axios'
import qs from 'qs'
import UseAuth from '../hooks/useAuth'
// import UseAxiosPrivate from '../hooks/useAxiosPrivate'
import { useNavigate } from 'react-router-dom'
import UseAxiosPrivate from '../hooks/useAxiosPrivate'

export default function AddAdmin() {
const axiosPrivate=UseAxiosPrivate()
    const[signUp,setSignUp]=useState(false);
  const { auth,setAuth }=UseAuth();
  const [image, setImage] = useState(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
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
  const [income, setIncome] = useState()
  // const [referrals, setReferrals] = useState(0)
  const [gender, setGender] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("")
  // const [signUpDate, setSignUpDate] = useState(null)
  // const [referred, setReferred] = useState("")
  const [branchId, setBranchId] = useState()
  const [branch, setBranch] = useState()
  const [phone, setPhone] = useState("")
  const navigate= useNavigate()
  const [branches, setBranches]=useState([])
  const [roleStat, setRoleStat]= useState(null)

  useEffect(() => {
    let isTrue=true;
    if(isTrue){
      axios.get("/branch/list").then((res)=>setBranches(res.data)).catch((error)=>alert(error))
    }
    return () => {
      isTrue=false
    };
  }, []);


const setAge=()=>{
    const date=new Date()
    const a=parseInt(date.getDate())-parseInt(dob?.slice(8,10))
    const b=parseInt(date.getMonth()+1)-parseInt(dob?.slice(5,7))
    const c=parseInt(date.getFullYear())-parseInt(dob?.slice(0,4))
    const age=a<0?b-1<0?c-1:c:b<0?c-1:c
    return age
}

const userSignup= async ()=>{
    // console.log(signUpDate)
    const dat={
      username: username,
      password: password,
      fname: fname,
      lname: lname,
      house: house,
      street: street,
      city: city,
      state: state,
      zipcode: zipcode,
      gender: gender,
      phone: phone,
      branch_id:branch

    }
    
    const data=qs.stringify(dat)
    console.log(data) 
    const res = await axiosPrivate.post('/addAgent', data,{
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        }
    })
    // .then(userLogin(username,password))
    console.log(username+" : "+password)
    return res;
 }



  return (
    <><div className='signUpUser__wrapper'>

      
          <form className='signUpUser__container'>

            <center><h3>Add Admin</h3></center>

            <Input className='login_input' type='email' placeholder='Email' onChange={(e)=>{setUsername(e.target.value)}} required/>
            <Input className='loginUser__input' type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/> 
            <Input className='loginUser__input' type='text' placeholder='First Name' onChange={(e)=>setfname(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='Last Name' onChange={(e)=>setlname(e.target.value)} required />
            <Input className='loginUser__input' type='date' placeholder='DOB' onChange={(e)=>setDob(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='House No' onChange={(e)=>setHouse(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='Street Name' onChange={(e)=>setStreet(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='City' onChange={(e)=>setCity(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='State' onChange={(e)=>setState(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='Zipcode' onChange={(e)=>setZipcode(e.target.value)} required />
            <Input className='loginUser__input' type='tel' placeholder='Phone' onChange={(e)=>setPhone(e.target.value)} required />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="loginUser__genderInput_label">Gender</InputLabel>
              <Select labelId='loginUser__genderInput_label' id='loginUser__genderInput' value={gender} onChange={(e)=>setGender(e.target.value)} required >
                <MenuItem value={''}><em>None</em></MenuItem>
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
                <MenuItem value={'other'}>Other</MenuItem>
                <MenuItem value={'NA'}>Prefer not to say</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="loginUser__branchInput_label">Branch</InputLabel>
              <Select labelId='loginUser__branchInput_label' id='loginUser__branchInput' value={branch} onChange={(e)=>setBranch(e.target.value)} required >
                <MenuItem value=""><em>None</em></MenuItem>
                {
                  branches.map((branch)=>(
                    <MenuItem value={branch.id}>{branch.name}</MenuItem>
                  ))
                }
                {/* <MenuItem value={'IMS-Delhi'}>IMS-Delhi</MenuItem>
                <MenuItem value={'IMS-Noida'}>IMS-Noida</MenuItem>
                <MenuItem value={'IMS-Banglore'}>IMS-Banglore</MenuItem> */}
              </Select>
            </FormControl>
            <center><Button className='loginUser__button' onClick={userSignup}>Add Agent</Button></center>
          </form>
          </div>
      </>
  )
}
