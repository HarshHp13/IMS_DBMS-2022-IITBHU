import {Input, Button} from '@mui/material'
import { height } from '@mui/system';
import React from 'react'
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css'

function Home() {
    
  return (
    <>
        <Navbar className='userHome__navbar'/>
        <div className="container-1">
        <img className="mainImg" src="https://licindia.in/Slider_Images/LIC-Bima-Jyoti-Web-Banner_2042-x-610-pix_eng" alt="" />
       </div>
       
        <br />
        <div className="conatiner-2">
            <div className="sub">
                <div className="subsub">
                    <img className="img-1" src="https://static.insurancedekho.com/pwa/img/time.svg" alt="" />
                </div>
                <div className="subsub text" >
                    <h2 className='subsubhead'>5 Minutes Policy Issuance*</h2>
                    <p>Say no to spending hours and days in queues doing the paperwork for your insurance policy. Get your insurance issued instantly with InsuranceDekho. The entire process from selecting the best insurance policy to getting it issued takes just 5 minutes on InsuranceDekho.</p>
                </div>
                
            </div>

            <div className="sub">
                <div className="subsub text">
                    <h2 className='subsubhead'>Over 45 Lac Happy Customers</h2>
                    <p>InsuranceDekho is becoming a household name in India. Till now we have been successful in providing a delightful experience to more than 45 lac customers with the help of our transparent and quick process, a dedicated support team along with the availability of numerous insurers.</p>
                </div>
                <div className="subsub">
                <img className="img-1" src="https://static.insurancedekho.com/pwa/img/policy-sold.svg" alt="" />
                </div>
                
            </div>

            <div className="sub">
                <div className="subsub">
                <img className="img-1" src="https://static.insurancedekho.com/pwa/img/support.svg" alt="" />
                </div>
                <div className="subsub text">
                    <h2 className='subsubhead'>Dedicated Support Team</h2>
                    <p>Our dedicated support team is available for your assistance all the 7 days. Feel free to reach out to us in case of any confusion - be it related to the purchase of an insurance policy or assistance during the settlement of a claim, our team of experts is at your service all days.</p>
                </div>
                
            </div>
        </div>

        <Footer className='userHome__navbar'/>
    </>
  )
}
export default Home;