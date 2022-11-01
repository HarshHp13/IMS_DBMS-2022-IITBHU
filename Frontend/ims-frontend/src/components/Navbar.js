import {Modal} from '@mui/material'
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
// import Login from '../pages/Login';
import './Navbar.css'
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
import User from '@mui/icons-material/Person' ;
// import Settings from '@mui/icons-material/VerifiedUser';
import Agent from '@mui/icons-material/SupportAgent';
import LoginAdmin from '../pages/LoginAdmin';
import LoginUser from '../pages/LoginUser';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openUser, setOpenUser] = useState(false);
   const [openAdmin, setOpenAdmin] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const loginOpen=Boolean(anchorEl)
  return (

    <>
    {/* <Modal 
    open={loginOpen}
    onClose={()=>setLoginOpen(false)}
    >
      <Login />
    </Modal> */}
    <Modal
      open={openAdmin}
      onClose={()=>setOpenAdmin(false)}
    >
      <LoginAdmin />
    </Modal>
    <Modal
      open={openUser}
      onClose={()=>setOpenUser(false)}
    >
      <LoginUser />
    </Modal>

    <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={loginOpen}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider /> */}
        
        <MenuItem onClick={()=>setOpenUser(true)} >
          <ListItemIcon>
            <User fontSize="small" />
          </ListItemIcon>
          User
        </MenuItem>
        <MenuItem onClick={()=>setOpenAdmin(true)}>
          <ListItemIcon>
            <Agent fontSize="small" />
          </ListItemIcon>
          Agent
        </MenuItem>
        {/* <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem> */}
      </Menu>

    <div className="navbar__container">
        <h3 className='navbar__link'><Link className='link' to={'/'}>Home</Link></h3>    
        <h3 className='navbar__link'><Link className='link' to={'/policies'}>Policies</Link></h3>
        {/* <h3 className='navbar__link'><Link className='link' to={'/'}>Active Plans</Link></h3> */}
        <h3 className='navbar__link'><Link className='link' to={'/about'}>About Us</Link></h3>
        <h3 className='navbar__link right' onClick={()=>{
          window.scrollBy({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
          });
        }}>Contact Us</h3>
        <h3 className='navbar__link' onClick={handleClick} >Login</h3>
    </div>
    </>
  )
}
export default Navbar;