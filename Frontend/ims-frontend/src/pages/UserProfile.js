import React, {useState} from 'react';
import './UserProfile.css'
import {Button, Modal} from '@mui/material'
import PolicyDetails from './PolicyDetails';
import PolicyDescription from './PolicyDescription';
// import axios from '../services/axios';
import UseAxiosPrivate from '../hooks/useAxiosPrivate';
import { useNavigate } from 'react-router-dom';
import UseAuth from '../hooks/useAuth';

function UserProfile() {
    const navigate=useNavigate()
    const {auth, setAuth}=UseAuth()
    const [openDescription, setOpenDescription] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);
    const [ApprovedPolicyData, setApprovedPolicyData] = useState({
        name: null,
        premium: null,
        premiumCount: null,
        sumAssurance: null, // in Rs
        tenure: null,
    });
    const [policyData, setPolicyData] = useState({
        desc: null,
        minAge: null,
        maxAge: null,
        profession: null,
        name: null,
        registrationFee: null,
        premium: null,
        tenure: null,
        ApplyButton: 0,
    });
    let userData={
        id: 1,
        firstName: "Harshit",
        middleName: null,
        lastName: "Singh",
        email: "artofharry00@gmail.com",
        date_of_birth: "18th January, 2000",
        age: "22",
        referrals: 4,
        phone: "9910279337",
        house: "House no. 154",
        street: "street no. 8, tigaon Road, near RK-Tower",
        city: "Faridabad",
        state: "Haryana",
        zipcode: "121005",
    }

    const logoutHandler=()=>{
        setAuth(prev=>{
            return {...prev, access_token:"", refresh_token:"", isAuthenticated:false}
        })
        navigate("/")
        console.log(auth)
        
    }

    return (
        <>
        <Modal
            open={openDescription}
            onClose={()=>setOpenDescription(false)}
        >
        <PolicyDescription policyData={policyData} userData={userData}/>
        </Modal>
        <Modal
            open={openDetails}
            onClose={()=>setOpenDetails(false)}
        >
            <PolicyDetails ApprovedPolicyData={ApprovedPolicyData} userData={userData}></PolicyDetails>
        </Modal>
        <div className='UserProfile__container'>
            <div className='UserProfile__user'>
                <div className='UserProfile__picture'></div>
                <div className='UserProfile__name'>{userData.firstName} {userData.middleName} {userData.lastName}</div>
            </div>
            <div className='UserProfile__userData'>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Email:</strong>
                    </div>
                    <div className='UserProfile__right_dataBlock UserProfile__email'>
                        {userData.email}
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Date of Birth:</strong>
                    </div>
                    <div className='UserProfile__right_dataBlock UserProfile__dateOfBirth'>
                        {userData.date_of_birth}
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Age:</strong>
                    </div>
                    <div className='UserProfile__right_dataBlock UserProfile__age'>
                        {userData.age}
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Referrals:</strong>
                    </div>
                    <div className='UserProfile__right_dataBlock UserProfile__referrals'>
                        {userData.referrals}
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>phone:</strong>
                    </div>
                    <div className='UserProfile__right_dataBlock UserProfile__phone'>
                        {userData.phone}
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Address:</strong>
                    </div>
                    <div className='UserProfile__right_dataBlock UserProfile__address'>
                        {userData.house}<br />
                        {userData.street}<br />
                        {userData.city}, {userData.state} - {userData.zipcode}
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Profession:</strong>
                    </div>
                    <div className='UserProfile__right_dataBlock UserProfile__profession'>
                        Software Developer
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Income:</strong>
                    </div>
                    <div className='UserProfile__right_data Block UserProfile__income'>
                        13.6 lakh PA
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Refferal Code:</strong>
                    </div>
                    <div className='UserProfile__right_data Block UserProfile__income'>
                        ${userData.id}#{userData.firstName}
                    </div>
                </div>
            </div>
            <div className='UserProfile__currentPolicies'>
                <h3>Current Policies</h3>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__requestPolicyInfo'>
                        <div className='UserProfile__left_dataBlock UserProfile__pointer' onClick={()=>{
                                setPolicyData({
                                    desc: "Pehli Policy is a term insurance plan that takes care of your protection and savings needs for securing the future of your children. As a parent, one of your most important goals would be to make sure that your children have a bright future and lead their lives comfortably. These plans can help you achieve this by saving for your children’s higher education at a prestigious university.",
                                    minAge: 12,
                                    maxAge: 60,
                                    profession: "student",
                                    name: "pehli Policy",
                                    registrationFee: 199,
                                    premium: 2999,
                                    tenure: 20,
                                });
                                setOpenDescription(true);
                            }}>
                            Pehli Policy
                        </div>
                    </div>
                    <button className='UserProfile__button' onClick={()=>{
                        setApprovedPolicyData({
                            name: "Pehli Policy",
                            premium: 1100,
                            premiumCount: 12,
                            sumAssurance: 4000000, // in Rs
                            tenure: 60, // in years
                        });
                        setOpenDetails(true);
                    }}>Details</button>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__requestPolicyInfo'>
                        <div className='UserProfile__left_dataBlock UserProfile__pointer' onClick={()=>{
                                setPolicyData({
                                    desc: "Pehli Policy is a term insurance plan that takes care of your protection and savings needs for securing the future of your children. As a parent, one of your most important goals would be to make sure that your children have a bright future and lead their lives comfortably. These plans can help you achieve this by saving for your children’s higher education at a prestigious university.",
                                    minAge: 12,
                                    maxAge: 60,
                                    profession: "student",
                                    name: "Aviva i-Life",
                                    registrationFee: 199,
                                    premium: 2999,
                                    tenure: 20,
                                });
                                setOpenDescription(true);
                            }}>
                        Aviva i-Life
                        </div>
                    </div>
                    <button className='UserProfile__button' onClick={()=>{
                        setApprovedPolicyData({
                            name: "Aviva i-Life",
                            premium: 2100,
                            premiumCount: 4,
                            sumAssurance: 10000000, // in Rs
                            tenure: 40, // in years
                        });
                        setOpenDetails(true);
                    }}>Details</button>
                </div>
            </div>
            <div className='UserProfile__requestedPolicies'>
                <h3>Requested Policies</h3>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__requestPolicyInfo'>
                        <div className='UserProfile__left_dataBlock UserProfile__pointer' onClick={()=>{
                                setPolicyData({
                                    desc: "Pehli Policy is a term insurance plan that takes care of your protection and savings needs for securing the future of your children. As a parent, one of your most important goals would be to make sure that your children have a bright future and lead their lives comfortably. These plans can help you achieve this by saving for your children’s higher education at a prestigious university.",
                                    minAge: 12,
                                    maxAge: 60,
                                    profession: "student",
                                    name: "KIC Life eShield",
                                    registrationFee: 199,
                                    premium: 2999,
                                    tenure: 20,
                                });
                                setOpenDescription(true);
                            }}>
                            KIC Life eShield: 
                        </div>
                        <div className='UserProfile__right_data Block UserProfile__income'>
                            Approved
                        </div>
                    </div>
                    <button className='UserProfile__button' onClick={()=>{
                        setApprovedPolicyData({
                            name: "KIC Life eShield",
                            premium: 1650,
                            premiumCount: 0,
                            sumAssurance: 3000000, // in Rs
                            tenure: 40, // in years
                        });
                        setOpenDetails(true);
                    }}>Proceed</button>
                </div>
            </div>
            <Button onClick={()=>logoutHandler()}>Logout</Button>
        </div>
    </>
    );
}

export default UserProfile;
