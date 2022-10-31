import { Input, Button } from '@mui/material'
import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import { Link } from 'react-router-dom';

function Footer() {
  let scrollToTop = ()=>{
    // console.log("function to call ho rha hai...");
    // window.scrollBy({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    window.scrollTo(0, 0);
  }

  return (
    <div className='Footer__container'>
      <div className='Footer__contact'>
        <div className='Footer__phone'>9910279337</div>
        <div className='Footer__phone'>9910279227</div>
        <div className='Footer__email'>help@ims.ac.in</div>
        <div className='Footer__address'>Vishwesaraya hostel, Near Hyderabad gate, IIT BHU-Varanasi</div>
      </div>
      <div className="Footer__bottomLine Footer__topLine">
        <a href="https://www.youtube.com/c/jamesqquick" className="Footer__youtube Footer__social">
          <FontAwesomeIcon icon={faYoutube} size="3x" />
        </a>
        <a href="https://www.facebook.com/learnbuildteach/" className="Footer__facebook Footer__social">
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        <a href="https://www.twitter.com/jamesqquick" className="Footer__twitter Footer__social">
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
        <a href="https://www.instagram.com/learnbuildteach" className="Footer__instagram Footer__social">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
      </div>
      <div className='Footer__links'>
        <div className='Footer__home Footer__link' onClick={scrollToTop}><Link className='link' to={'/'}>Home</Link></div>
        <div className='Footer__policies Footer__link' onClick={scrollToTop}><Link className='link' to={'/policies'}>Policies</Link></div>
        <div className='Footer__aboutUs Footer__link' onClick={scrollToTop}><Link className='link' to={'/about'}>About Us</Link></div>
      </div>
    </div>
  );
}
export default Footer;

