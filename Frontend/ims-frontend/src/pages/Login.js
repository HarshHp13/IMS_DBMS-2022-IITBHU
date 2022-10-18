import React, {useState} from 'react';
import {Button, Modal} from '@mui/material'
import LoginAdmin from './LoginAdmin';
import LoginUser from './LoginUser';


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
         <h1>Welcome</h1>
         <Button
            className='login__user'
            onClick={()=>setOpenAdmin(true)}
         >
         User
         </Button>
         <Button
            className='login__admin'
            onClick={()=>setOpenAdmin(true)}
         >
         Admin
         </Button>
            
      </div>
   )
}
export default Login