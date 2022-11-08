import {Input, Button, Select, InputLabel, MenuItem, FormControl} from '@mui/material'
import React from 'react'
import {useState} from 'react'
import './LoginUser.css'
import axios from '../services/axios'
import qs from 'qs'
import UseAuth from '../hooks/useAuth'
// import UseAxiosPrivate from '../hooks/useAxiosPrivate'
import { useNavigate } from 'react-router-dom'


function LoginUser() {
  const[signUp,setSignUp]=useState(false);
  const { auth,setAuth }=UseAuth();
  const [image, setImage] = useState(null)
  const [blob, setBlob]= useState()
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
  const [income, setIncome] = useState("")
  // const [referrals, setReferrals] = useState(0)
  const [gender, setGender] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("")
  // const [signUpDate, setSignUpDate] = useState(null)
  // const [referred, setReferred] = useState("")
  const [branchId, setBranchId] = useState()
  const [branch, setBranch] = useState("")
  const [phone, setPhone] = useState("")
  const navigate= useNavigate()
  const [branches, setBranches]=useState([])
  const [roleStat, setRoleStat]= useState(null)

  axios.get("/branch/list").then((res)=>setBranches(res.data)).catch((error)=>alert(error))

  
  // const calcAge=()=>{
  //   // dob.toLocaleDateString()
  // }

  // function createImage(imageFile, callback) {
  //   const image = document.createElement('img');
  //   image.onload = () => callback(image);
  //   image.setAttribute('src', imageFile);
  // }
  
  // function convertImage(image) {
  //   const canvas = drawImageToCanvas(image);
  //   const ctx = canvas.getContext('2d');
    
  //   let result = [];
  //   for (let y = 0; y < canvas.height; y++) {
  //     result.push([]);
  //     for (let x = 0; x < canvas.width; x++) {
  //       let data = ctx.getImageData(x, y, 1, 1).data;
  //       result[y].push(data[0]);
  //       result[y].push(data[1]);
  //       result[y].push(data[2]);
  //     }
  //   }
  //   console.log(convertArray(result))
  //   return convertArray(result)
  // }
  
  // function drawImageToCanvas(image) {
  //   const canvas = document.createElement('canvas');
  //   canvas.width = image.width;
  //   canvas.height = image.height;
  //   canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
  //   return canvas;
  // }
  
  // function convertArray(array) {
  //   return JSON.stringify(array).replace(/\[/g, '{').replace(/\]/g, '}');
  // }

  const handleChange=(e)=>{
    if(e.target.files[0]){
      const b=URL.createObjectURL(e.target.files[0])
      setImage(b);
      // setBlob(createImage(b,convertImage))
      

      // e.target.files[0].arrayBuffer().then((arrayBuffer) => {
      //   // const b = new Blob([new Uint8Array(arrayBuffer)], {type: e.target.files[0].type });
      //   // const b=e.target.files[0].convertToBase64((base64))
      //   setBlob(b)
      // });
      // console.log(qs.stringify(b))
    }
    if (!/^image\//.test(e.target.files[0].type)) {
      alert(`File ${e.target.files[0].name} is not an image.`);
      return false;
    }
  };

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
        setAuth({accessToken, refreshToken, isAuthenticated: true, role:"USER"})
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

  const setAge=()=>{
    const date=new Date()
    const a=parseInt(date.getDate())-parseInt(dob?.slice(8,10))
    const b=parseInt(date.getMonth()+1)-parseInt(dob?.slice(5,7))
    const c=parseInt(date.getFullYear())-parseInt(dob?.slice(0,4))
    const age=a<0?b-1<0?c-1:c:b<0?c-1:c
    return age
  }


  const userSignup= async ()=>{
    const date=new Date()
    const a=date.getDate()
    const b=date.getMonth()+1
    const c=date.getFullYear()
    // console.log(signUpDate)
    const dat={
      username: username,
      password: password,
      fname: fname,
      lname: lname,
      date: dob,
      age: setAge(),
      signUpDate: (`${c}-${b}-${a}`).toString(),
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
    
    const data=qs.stringify(dat)
    console.log(data) 
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
    userSignup(username,password)
      .then((res)=>{
        clickHandler(e)
      })
    
    
       
 }

 const checkAuth=(val)=>{
  axios.post("/auth/checkRole",{username:val,role:"USER"}).then((res)=>{setRoleStat(res.data)})
 }



  if(signUp){
    return (
      <><div className='signUpUser__wrapper'>

      
          <form className='signUpUser__container'>

            <center><h3>User Sign Up</h3></center>
            <label for="image_input" className='image_display'>
              {/* {image} */}
              <img src={image} className="image_displayContainer" />
              <input className='image_input' id='image_input' type='file' accept="image/*" onChange={handleChange} hidden ></input>
            </label>
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
            <Input className='loginUser__input' type='number' placeholder='Income' onChange={(e)=>setIncome(e.target.value)} required />
            <Input className='loginUser__input' type='text' placeholder='Profession' onChange={(e)=>setProfession(e.target.value)} required />
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
              <InputLabel id="loginUser__MaritalStatusInput_label">Marital Status</InputLabel>
              <Select defaultValue="" labelId='loginUser__MaritalStatusInput_label' id='loginUser__MaritalStatusInput' value={maritalStatus} onChange={(e)=>setMaritalStatus(e.target.value)} required >
                <MenuItem ><em>None</em></MenuItem>
                <MenuItem value={'single'}>Single</MenuItem>
                <MenuItem value={'married'}>Married</MenuItem>
                <MenuItem value={'divorced'}>Divorced</MenuItem>
                <MenuItem value={'other'}>other</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="loginUser__branchInput_label">Branch</InputLabel>
              <Select labelId='loginUser__branchInput_label' id='loginUser__branchInput' value={branch} onChange={(e)=>setBranch(e.target.value)} required >
                <MenuItem value=""><em>None</em></MenuItem>
                {
                  branches.map((branch)=>(
                    <MenuItem value={branch.name}>{branch.name}</MenuItem>
                  ))
                }
                {/* <MenuItem value={'IMS-Delhi'}>IMS-Delhi</MenuItem>
                <MenuItem value={'IMS-Noida'}>IMS-Noida</MenuItem>
                <MenuItem value={'IMS-Banglore'}>IMS-Banglore</MenuItem> */}
              </Select>
            </FormControl>
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
            <Input className={roleStat===true?'loginUser__inputCorrect':roleStat===false?'loginUser__inputWrong':'loginUser__input'} type='email' placeholder='Username' onChange={(e)=>{setUsername(e.target.value);checkAuth(e.target.value)}} required/>
            <Input className='loginUser__input' type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>
            <center><Button className='loginUser__button' onClick={(e)=>{clickHandler(e,username,password)}}>Login</Button></center>
            <center><div className='loginUser__text' onClick={()=>setSignUp(true)}>Sign Up if not already a user</div></center>
          </form>
      </>
    )
  }
    
}
export default LoginUser