import React, {useState} from 'react';
import {Button, Modal} from '@mui/material'
import LoginAdmin from './LoginAdmin';
import LoginUser from './LoginUser';
import './Login.css'

function Login(){
   const [openUser, setOpenUser] = useState(false);
   const [openAdmin, setOpenAdmin] = useState(false);
   return(
      <div>
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
         <div className="daba">
            <h1>Welcome!</h1>
               <div className="chotu">
                  <button
                     className='login__user'
                     onClick={()=>setOpenAdmin(true)}
                  >
                  User
                  </button>
                  <button
                     className='login__admin'
                     onClick={()=>setOpenAdmin(true)}
                  >
                  Admin
                  </button>
               </div>
         </div>
         <div className="bada">
            <img className="bada-img" src="./c2.png" alt="" />
         </div>
            
      </div>
   )
}
export default Login