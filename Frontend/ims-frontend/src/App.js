import logo from './logo.svg';
import './App.css';
import {
  Route,
  Routes
} from "react-router-dom"
import { 
  listUser,
  // insertUser,
  deleteUserById, 
  getUserById 
} from './services/api_connect';
import Login from './login';
import Home from './Home';

// const view=listUser().then((data)=>console.log(data, "getBefore"))
// const user={
//   name:"Dhruv Mishra",
//   email:"dhruv.mishra.cse20@itbhu.ac.in",
//   age:21,
//   income:5000000
// }
// const insert=insertUser(user).then((data)=>console.log(data, "insert"))
// const view1=listUser().then((data)=>console.log(data, "getMid"))

// const userDlt={
//   id:22
// }

// const delt=deleteUser(userDlt).then(()=>console.log("delete"))
// const view2=listUser().then((data)=>console.log(data, "getLast"))

// getUserById(24).then((data)=>console.log(data))
// deleteUserById(26).then(()=>{listUser().then((data)=>console.log(data))})

function App() {
  
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
