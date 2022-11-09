import {Input, Button} from '@mui/material'
import { height } from '@mui/system';
import React from 'react'
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css'

function About() {
    
  return (
    <>
        {/* <Navbar className='userHome__navbar'/> */}
        <div className="container1">
            <div className="head-img1">
                <img className="img1" src="./11.png" alt="" />
            </div>
            <h2>Finding you the best insurance since 2022</h2>
            <p className='head-para'>It’s a fine balancing act when 9 million+ insurance buyers and more than 50+ insurers transact a few lac crores of insurance cover and a few thousand crores of insurance premium on a platform with complete confidence every year.</p>
            <br />
            <div className="chota-nav">
                <h3 className='sunn-be'>About Company</h3>
                <h3 className='sunn-be'>Our team</h3>
            </div>
            <br />

            <div className="dhruv">
                <div className="riya">
                    <div className="one always">
                        <h3 className='texthead'><strong>Our origin ⎯⎯⎯⎯</strong></h3>
                        <h1 className='textsecond'>How it all started</h1>
                        <p className="desc">Dhruv Insurance was founded in 2022 with one objective: bringing transparency in insurance. The founders wanted to reimagine insurance, so they started by simplifying all the information around plans, ending the rampant mis-selling, and preventing policy lapses.</p>
                    </div>
                    <div className="one">
                        <img className="img1" src="./animated.gif" alt="" />
                    </div>
                </div>

                <div className="riya">
                    <div className="one">
                    <img className="img2" src="https://www.softcron.com/assets/img/bulk_sms/seo18.png" alt="" />
                    </div>
                    <div className="one always">
                    <h3 className='texthead'><strong>Our present ⎯⎯⎯⎯</strong></h3>
                        <h1 className='textsecond'>1 year of success</h1>
                        <p className="desc">Today, we are India’s best & largest online insurance marketplace. Over 9+ million (90 lakh+) individuals have come to us & bought the best insurance plans from the top insurers in the country. We have sold over 19 million policies since inception, and this number is only growing.</p>
                    </div>
                </div>

                <div className="riya">
                    <div className="one always">
                       <h3 className='texthead'><strong>Our Vision ⎯⎯⎯⎯</strong></h3>
                        <h1 className='textsecond'>A look forward</h1>
                        <p className="desc">While we are happy with how we are changing insurance for the country, we know there is still a lot of work to be done. Our vision to bring pioneering technologies & innovations to the field continues to grow. We aspire to build a health & financial safety net for more households in India in the coming years.</p>
                    </div>
                    <div className="one">
                    <img className="img3" src="./arrow.gif" alt="" />
                    </div>
                </div>

            </div>

            
             <h1 className='ourteam'>Meet the team ⎯⎯</h1>
             <p className="head-para">Our leadership brings together an energetic group of people with a wealth of experience and commitment towards helping people make better financial decisions</p>
             <div className="team">
                <div className="cards">
                    <img className="teampic" src="./dhruv.png" alt="we" />
                </div>
                <div className="cards"><img className="teampic" src="./harshit.jpg" alt="we" /></div>
                <div className="cards"><img className="teampic" src="./archana.jpg" alt="we" /></div>
            </div>
            <div className="team">
                <div className="cards"><img className="teampic" src="./hp.jpg" alt="we" /></div>
                <div className="cards"></div>
                <div className="cards"></div>
            </div>
        </div>
        

        {/* <Footer className='userHome__navbar'/> */}
    </>
  )
}
export default About;