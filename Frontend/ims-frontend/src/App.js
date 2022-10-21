// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import UserHome from './pages/UserHome';

import {
  Routes, Route
} from "react-router-dom"

import LoginAdmin from './pages/LoginAdmin';
import LoginUser from './pages/LoginUser';
import AgentHome from './pages/AgentHome';
import Home from './pages/Home';
import About from './pages/About';
import Policies from './pages/Policies';

function App() {
  return(
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path= '/loginAdmin' element={<LoginAdmin />} />
      <Route path= '/loginUser' element={<LoginUser />} />
      <Route path= '/userhome' element={<UserHome />} />
      <Route path= '/agenthome' element={<AgentHome />} />
      <Route path= '/home' element={<Home />} />
      <Route path= '/about' element={<About />} />
      <Route path= '/policies' element={<Policies />} />
    </Routes>
  );
}

export default App;
