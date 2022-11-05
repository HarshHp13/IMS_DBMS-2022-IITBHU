// import {Input, Button} from '@mui/material'
// import { height } from '@mui/system';
import React from 'react'
import Carousel from '../components/Carousel';
import './Home.css'
import UseAxiosPrivate from '../hooks/useAxiosPrivate'
import RefreshToken from '../hooks/refreshToken';
import UseAuth from '../hooks/useAuth';
import { useEffect } from 'react';
// import UseAxiosPrivate from '../hooks/useAxiosPrivate'

function Home() {
    const {auth,setAuth}= UseAuth()
    const axiosPrivate=UseAxiosPrivate();
    const refresh=RefreshToken();
    const getClient=async ()=>{
        const res = await axiosPrivate.get('/clients')
        return res.data;
    }
    const setUser=()=>{
        axiosPrivate.get("/user/getUser").then((res)=>{
            const user=res.data
            setAuth(prev=>{
            return {...prev,user:user}
            })
            
        })
    }
    
    useEffect(() => {
        if(auth.isAuthenticated) setUser();
    }, [auth.isAuthenticated]);

    // const getUser=async ()=>{
    //     const res=await 
            
    //     })
    //     // console.log(res.data)
    //     // return res.data;
    // }
    

    return (
        <>
            <Carousel />
            <br />
            {/* <button onClick={()=>getUser()}>Get User</button> */}

            <div className="text1">
                <p className="head-text">
                    A term insurance plan helps protect your loved ones and maintains their standard of living even in unforeseen circumstances. Control what you can—a term plan is what you need to ensure that your family is taken care of in your absence.
                </p>
            </div>

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

            <div className="container-4">
                <div className="card-11">
                    <img className="imagea" src="./a1.png" alt="" />
                    <p className="card-11head">One of the best Prices</p>
                </div>
                <div className="card-11">
                    <img className="imagea" src="./a2.png" alt="" />
                    <p className="card-11head">Unbiased Advice</p>
                </div>
                <div className="card-11">
                    <img className="imagea" src="./a3.png" alt="" />
                    <p className="card-11head">100% Reliable</p>
                </div>
                <div className="card-11">
                    <img className="imagea" src="./a4.png" alt="" />
                    <p className="card-11head">Claims Support</p>
                </div>
                <div className="card-11">
                    <img className="imagea" src="./a5.png" alt="" />
                    <p className="card-11head">Happy to Help</p>
                </div>
            </div>

            <div className="container-3">
                <div className="small-1">
                    <p className='text-head'>Get the Dhruv Insurance app</p>
                    <span></span>
                    <p className='text-sub'>Get control of all your insurance needs anywhere, anytime</p>
                    <ul>
                        <li>Compare different insurance policies</li>
                        <li>Buy, store and share all your policies online</li>
                        <li>Track your policy status on the go</li>
                        <li>Download your policy with a single tap</li>
                    </ul>
                </div>
                <div className="small">
                    <img className="mobile-app" src="https://static.pbcdn.in/cdn/images/home-v1/get-app.png" alt="" />
                </div>
            </div>

            <div className="inipicdiv">
                <img className="ini-pic" src="https://www.maxlifeinsurance.com/corp-static/images/benefits-of-health-insurance-plans.jpg" alt="load hi nahi ho rahi" />
            </div>
        </>
    )
}
export default Home;