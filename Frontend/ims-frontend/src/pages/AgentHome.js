import {Input, Button} from '@mui/material'
import { height } from '@mui/system';
import React from 'react'
import Card from '../components/Card';
import NavbarAgent from '../components/NavbarAgent';
import './AgentHome.css'

function UserHome() {
    
  return (
    <>
        <NavbarAgent className='userHome__navbar'/>
        {/* <div className="userHome__container"> */}
            {/* <img className="userHome__img" src={require('../assets/a.jpg')}  alt="" /> */}
        {/* </div> */}

        {/* <div className="userHome__bgImage">
        </div>

        <div className="userHome__text">
            <h1>Insurance Management System</h1>
            <p>Zindagi ke saath bhi Zindagi ke baad bhi</p>
        </div> */}

        {/* <div id="userHome__popUp" onClick={clickHandler}></div> */}

        {/* <div className="userHome__groupcards">
            <div className="userHome__cards">
                <Card title='Card' desc='Desc' img='a.jpg' />
            </div>        
            <div className="userHome__cards">
                <Card title='Card' desc='Desc' img='a.jpg' />
            </div>  
            <div className="userHome__cards">
                <Card title='Card' desc='Desc' img='a.jpg' />
            </div>  
        </div> */}
        
        
    </>
  )
}
export default UserHome;