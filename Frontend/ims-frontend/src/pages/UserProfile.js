import React, { useState } from 'react';
// import { Modal } from '@mui/material'
import './UserProfile.css'
import {Button, Modal} from '@mui/material'
import PolicyDetails from './PolicyDetails';
import PolicyDescription from './PolicyDescription';
import { useLocation } from 'react-router-dom';
// import axios from '../services/axios';
import { useNavigate } from 'react-router-dom';
import UseAuth from '../hooks/useAuth';
import UseAxiosPrivate from '../hooks/useAxiosPrivate';

function UserProfile() {
    const location = useLocation()
    const axiosPrivate=UseAxiosPrivate()
    const navigate=useNavigate()
    const {auth, setAuth}=UseAuth()
    const [openDescription, setOpenDescription] = useState(false)
    const [openDetails, setOpenDetails] = useState(false)
    const [ApprovedPolicyData, setApprovedPolicyData] = useState({})
    const [policyData, setPolicyData] = useState({})
    const [allApproval, setAllApproval] = useState([])
    const [allApproved, setAllApproved] = useState([])


    const logoutHandler=()=>{
        setAuth(prev=>{
            return {...prev, access_token:"", refresh_token:"", isAuthenticated:false}
        })
        navigate("/")
        console.log(auth)
        
    }



    axiosPrivate.post("/policy/policyApproval/getAllApproval",{user_id:auth.user.id}).then((res)=>{
        setAllApproval(res.data)
        // getApproval(res.data.policy_id)
    }).catch((error)=>{
        // console.log(error)
    })

    axiosPrivate.post("/policy/policyApproval/getAllApproved",{user_id:auth.user.id}).then((res)=>{
        setAllApproved(res.data)
        // getApproved(res.data.policy_id)
    }).catch((error)=>{
        // console.log(error)
    })

    

    
    

    return (
        <>
            <Modal
                open={openDescription}
                onClose={() => setOpenDescription(false)}
            >
                <PolicyDescription policyData={policyData} userData={location.state.userData} />
            </Modal>
            <Modal
                open={openDetails}
                onClose={() => setOpenDetails(false)}
            >
                <PolicyDetails ApprovedPolicyData={ApprovedPolicyData} userData={location.state.userData} show={location.state.show}></PolicyDetails>
            </Modal>
            <div className='UserProfile__container'>
                <div className='UserProfile__user'>
                    <div className='UserProfile__picture'></div>
                    <div className='UserProfile__name'>{location.state.userData.first_name} {location.state.userData.middleName} {location.state.userData.last_name}</div>
                </div>
                <div className='UserProfile__userData'>
                    <div className='UserProfile__dataBlock'>
                        <div className='UserProfile__left_dataBlock'>
                            <strong>Email:</strong>
                        </div>
                        <div className='UserProfile__right_dataBlock UserProfile__email'>
                            {location.state.userData.email}
                        </div>
                    </div>
                    <div className='UserProfile__dataBlock'>
                        <div className='UserProfile__left_dataBlock'>
                            <strong>Date of Birth:</strong>
                        </div>
                        <div className='UserProfile__right_dataBlock UserProfile__dateOfBirth'>
                            {location.state.userData.date_of_birth}
                        </div>
                    </div>
                    <div className='UserProfile__dataBlock'>
                        <div className='UserProfile__left_dataBlock'>
                            <strong>Age:</strong>
                        </div>
                        <div className='UserProfile__right_dataBlock UserProfile__age'>
                            {location.state.userData.age}
                        </div>
                    </div>
                    <div className='UserProfile__dataBlock'>
                        <div className='UserProfile__left_dataBlock'>
                            <strong>Marrital Status:</strong>
                        </div>
                        <div className='UserProfile__right_dataBlock UserProfile__marritalStatus'>
                            {location.state.userData.marital_status}
                        </div>
                    </div>
                    <div className='UserProfile__dataBlock'>
                        <div className='UserProfile__left_dataBlock'>
                            <strong>Referrals:</strong>
                        </div>
                        <div className='UserProfile__right_dataBlock UserProfile__referrals'>
                            {location.state.userData.referrals}
                        </div>
                    </div>
                    <div className='UserProfile__dataBlock'>
                        <div className='UserProfile__left_dataBlock'>
                            <strong>phone:</strong>
                        </div>
                        <div className='UserProfile__right_dataBlock UserProfile__phone'>
                            {/* {location.state.userData.phone} */}
                        </div>
                    </div>
                    <div className='UserProfile__dataBlock'>
                        <div className='UserProfile__left_dataBlock'>
                            <strong>Address:</strong>
                        </div>
                        <div className='UserProfile__right_dataBlock UserProfile__address'>
                            {location.state.userData.house}<br />
                            {location.state.userData.street}<br />
                            {location.state.userData.city}, {location.state.userData.state} - {location.state.userData.zipcode}
                        </div>
                    </div>
                    <div className='UserProfile__dataBlock'>
                        <div className='UserProfile__left_dataBlock'>
                            <strong>Profession:</strong>
                        </div>
                        <div className='UserProfile__right_dataBlock UserProfile__profession'>
                            {location.state.userData.profession}
                        </div>
                    </div>
                    <div className='UserProfile__dataBlock'>
                        <div className='UserProfile__left_dataBlock'>
                            <strong>Income:</strong>
                        </div>
                        <div className='UserProfile__right_data Block UserProfile__income'>
                            {location.state.userData.income}
                        </div>
                    </div>
                    <div className='UserProfile__dataBlock'>
                        <div className='UserProfile__left_dataBlock'>
                            <strong>Refferal Code:</strong>
                        </div>
                        <div className='UserProfile__right_data Block UserProfile__income'>
                            ${location.state.userData.id}#{location.state.userData.first_name}
                        </div>
                    </div>
                    <div className='UserProfile__dataBlock'>
                        <div className='UserProfile__left_dataBlock'>
                            <strong>Gender:</strong>
                        </div>
                        <div className='UserProfile__right_data Block UserProfile__gender'>
                            {location.state.userData.gender}
                        </div>
                    </div>
                    <div className='UserProfile__dataBlock'>
                        <div className='UserProfile__left_dataBlock'>
                            <strong>Branch:</strong>
                        </div>
                        <div className='UserProfile__right_data Block UserProfile__branch'>
                            {location.state.userData.branch}
                        </div>
                    </div>
                </div>
                <div className='UserProfile__currentPolicies'>
                    <h3>Current Policies</h3>
                    {   allApproved?
                        allApproved.map((policy)=>(
                            <div className='UserProfile__dataBlock'>
                                <div className='UserProfile__requestPolicyInfo'>
                                    <div className='UserProfile__left_dataBlock UserProfile__pointer' onClick={() => {
                                        setPolicyData(policy);
                                        setOpenDescription(true);
                                    }}>
                                        {policy.policy_name}
                                    </div>
                                </div>
                                <button className='UserProfile__button' onClick={() => {
                                    setApprovedPolicyData({
                                        name: policy.policy_name,
                                        premium: policy.premium,
                                        premiumCount: policy.premium_count,
                                        sumAssurance: policy.life_cover, // in Rs
                                        tenure: policy.tenure, // in years
                                        agentName: policy.first_name+" "+policy.last_name,
                                    });
                                    setOpenDetails(true);
                                }}>Status</button>
                            </div>
                        ))
                        :<></>
                    }
                    
                </div>
                <div className='UserProfile__requestedPolicies'>
                    <h3>Requested Policies</h3>
                    {
                        allApproval?
                        allApproval?.map((policy)=>(
                            <div className='UserProfile__dataBlock'>
                                <div className='UserProfile__requestPolicyInfo'>
                                    <div className='UserProfile__left_dataBlock UserProfile__pointer' onClick={() => {
                                        setPolicyData(policy);
                                        setOpenDescription(true);
                                    }}>
                                        {policy.policy_name}:
                                    </div>
                                    {
                                        policy.status===1
                                        ?<div className='UserProfile__right_data Block UserProfile__income'>Approved</div>
                                        :policy.status===0
                                        ?<div className='UserProfile__right_data Block UserProfile__income'>Pending</div>
                                        :<div className='UserProfile__right_data Block UserProfile__income'>Rejected</div>
                                    }
                                    
                                </div>
                                {
                                    policy.status === 1
                                    ? <button className='UserProfile__button' onClick={() => {
                                        setApprovedPolicyData({
                                            name: policy.policy_name,
                                            premium: policy.premium,
                                            premiumCount: 0,
                                            sumAssurance: policy.life_cover, // in Rs
                                            tenure: policy.tenure, // in years
                                            agentName: "Jagat Pal",
                                        });
                                        setOpenDetails(true);
                                    }}>Proceed</button>
                                    : <div></div>
                                }
                            </div>
                        ))
                        :<></>
                    }
                    
                </div>
                {
                    location.state.show === 1
                    ?<div>
                        <Button onClick={()=>logoutHandler()}>Logout</Button>
                    </div>
                    :<div></div>
                }
            </div>

    </>
    );
}

export default UserProfile;
