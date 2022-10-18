// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import UserHome from './pages/UserHome';

import {
  Routes, Route
} from "react-router-dom"

import LoginAdmin from './pages/LoginAdmin';
import LoginUser from './pages/LoginUser';

function App() {
  return(
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path= '/loginAdmin' element={<LoginAdmin />} />
      <Route path= '/loginUser' element={<LoginUser />} />
      <Route path= '/userhome' element={<UserHome />} />
    </Routes>
  );
}

export default App;
