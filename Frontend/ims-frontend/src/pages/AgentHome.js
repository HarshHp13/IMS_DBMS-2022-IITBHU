import {Input, Button} from '@mui/material'
import { height } from '@mui/system';
import React from 'react'
import Card from '../components/Card';
import NavbarAgent from '../components/NavbarAgent';
import './AgentHome.css'

function UserHome() {
    
    function clickHandler(){
        // console.log('ho raha hai' );
        var text = document.getElementsByClassName('userHome__text')[0];
        var bg = document.getElementsByClassName('userHome__bgImage')[0];
        var popUp = document.getElementById('userHome__popUp');
        var nav = document.getElementsByClassName('navbar__container')[0];
        
        text.style.display = "none";
        bg.style.display = "none";
        popUp.style.display = "none";
        nav.style.display = "flex";
        document.body.style.backgroundColor = "gray";
    }
    
  return (
    <>
        <NavbarAgent className='userHome__navbar'/>
        {/* <div className="userHome__container"> */}
            {/* <img className="userHome__img" src={require('../assets/a.jpg')}  alt="" /> */}
        {/* </div> */}

        <div className="userHome__bgImage">
        </div>

        <div className="userHome__text">
            <h1>Insurance Management System</h1>
            <p>Zindagi ke saath bhi Zindagi ke baad bhi</p>
        </div>

        <div id="userHome__popUp" onClick={clickHandler}></div>

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