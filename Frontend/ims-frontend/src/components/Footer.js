import {Input, Button} from '@mui/material'
import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>

        <div className="container">
             <div className="tookre-1">
                <h3 className='lst'>About Us</h3>
                <h3 className='lst'>Policies</h3>
                <h3 className='lst'>Contact Us</h3>
             </div>

             <div className="tookre-2">
                
                <div className="tookre-2a">
                    <h3>+91 7217213319</h3>
                    <h3>mishra.x.dhruv18@gmail.com</h3>
                    <h4>Vishwesaraya hostel, Near Hyderabad gate, IIT BHU-Varanasi</h4>
                    <img src="" alt="" />
                </div>
                
                <div className="tookre-2b">
                    <a href="https://www.youtube.com/c/jamesqquick"
                        className="youtube social">
                        <FontAwesomeIcon icon={faYoutube} size="4x" />
                    </a>
                    <a href="https://www.facebook.com/learnbuildteach/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="4x" />
                    </a>
                    <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="4x" />
                    </a>
                    <a href="https://www.instagram.com/learnbuildteach"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="4x" />
                    </a>
                </div>
                
             </div>
             <div className="tookre-3">
                <h1>Write to us :</h1>
                 <form className="form" action="">
                   <input type="text" className='name' placeholder='Your Name'/>
                    <br />
                   <input type="email" className='email' placeholder='Email'/>
                   <textarea name="" id="" cols="30" rows="10" placeholder='Your Concern '></textarea>
                   <br />
                   <input type="submit" className='btn'/>
                 </form>
             </div>
        </div>
    </>
  )
} 
export default Footer;

