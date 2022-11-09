// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';

import {
  Routes, Route
} from "react-router-dom"

import LoginAgent from './pages/LoginAgent';
import LoginUser from './pages/LoginUser';
import Home from './pages/Home';
import About from './pages/About';
import Policies from './pages/Policies';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserProfile from './pages/UserProfile';
import AgentProfile from './pages/AgentProfile';
import AdminProfile from './pages/AdminProfile';
import Agent from './pages/Agent';

function App() {
  return(
    <>
    <Navbar />
    <Routes>
      {/* <Route path='/login' element={<Login />} /> */}
      {/* <Route path= '/loginAgent' element={<LoginAgent />} /> */}
      {/* <Route path= '/loginUser' element={<LoginUser />} /> */}
      <Route path= '/' element={<Home />} />
      <Route path= '/about' element={<About />} />
      <Route path= '/policies' element={<Policies />} />
      <Route path= '/userProfile' element={<UserProfile />} />
      <Route path= {'/agentProfile'} element={<AgentProfile />} />
      <Route path= {'/adminProfile'} element={<AdminProfile />} />
      <Route path= {'/agent'} element={<Agent />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
