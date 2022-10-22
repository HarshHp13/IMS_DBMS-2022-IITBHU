// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';

import {
  Routes, Route
} from "react-router-dom"

import LoginAdmin from './pages/LoginAdmin';
import LoginUser from './pages/LoginUser';
import Home from './pages/Home';
import About from './pages/About';
import Policies from './pages/Policies';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return(
    <>
    <Navbar />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path= '/loginAdmin' element={<LoginAdmin />} />
      <Route path= '/loginUser' element={<LoginUser />} />
      <Route path= '/' element={<Home />} />
      <Route path= '/about' element={<About />} />
      <Route path= '/policies' element={<Policies />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
