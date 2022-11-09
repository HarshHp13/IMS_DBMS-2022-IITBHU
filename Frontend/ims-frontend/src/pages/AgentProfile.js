import React, { useState,useEffect } from 'react';
import './AgentProfile.css'
import PolicyDescription from './PolicyDescription';
import PolicyDetails from './PolicyDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal,Button } from '@mui/material'
import UseAuth from '../hooks/useAuth';
import UseAxiosPrivate from '../hooks/useAxiosPrivate';

function AgentProfile() {
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPrivate=UseAxiosPrivate()
    const {auth,setAuth}=UseAuth()
    const [openDescription, setOpenDescription] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);
    const [ApprovedPolicyData, setApprovedPolicyData] = useState({});
    const [policyData, setPolicyData] = useState({});
    const [isTrue,setIsTrue] = useState(true);
    const [agentReq, setAgentReq]=useState([])
    const [agentCurr, setAgentCurr]=useState([])

    // console.log(auth.user.id)
    // const totalStars = 5;
    // const activeStars = 4.3;
    window.onload=()=>{setIsTrue(true)}

    useEffect(() => {
        if(isTrue){
            axiosPrivate.post("/policy/agentReq",{agent_id:auth.user.id}).then((res)=>{setAgentReq(res.data)})
            axiosPrivate.post("/policy/agentCurr",{agent_id:auth.user.id}).then((res)=>{setAgentCurr(res.data)})
        }
        return () => {
            setIsTrue(false)
        };
    }, [isTrue]);

    const verify=(policy_id,user_id,agent_id)=>{
        axiosPrivate.post("/policy/policyApproval/update",{policy_id:policy_id,user_id:user_id,agent_id:agent_id,status:1})
        setIsTrue(true)
    }

    const reject=(policy_id,user_id,agent_id)=>{
        axiosPrivate.post("/policy/policyApproval/update",{policy_id:policy_id,user_id:user_id,agent_id:agent_id,status:-1})
        setIsTrue(true)
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
                onClose={() => setOpenDescription(false)}
            >
                <PolicyDescription policyData={policyData} />
            </Modal>
            <Modal
                open={openDetails}
                onClose={() => setOpenDetails(false)}
            >
                <PolicyDetails ApprovedPolicyData={ApprovedPolicyData} show={0}></PolicyDetails>
            </Modal>
            <div className='AgentProfile__container'>
                <div className='AgentProfile__top AgentProfile_bottomBorder'>
                    <div className='AgentProfile__agent'>
                        <div className='AgentProfile__picture'></div>
                        <div className='AgentProfile__name'>{location.state?.agentData.first_name} {location.state?.agentData.middle_name} {location.state?.agentData.last_name}</div>
                    </div>
                    {/* <div className='AgentProfile__stars'>
                    Rating : {activeStars}
                </div> */}
                </div>
                <div className='AgentProfile__agentData AgentProfile_bottomBorder'>
                    <div className='AgentProfile__dataBlock'>
                        <div className='AgentProfile__left_dataBlock'>
                            <strong>Email:</strong>
                        </div>
                        <div className='AgentProfile__right_dataBlock AgentProfile__email'>
                            {location.state?.agentData.email}
                        </div>
                    </div>
                    <div className='AgentProfile__dataBlock'>
                        <div className='AgentProfile__left_dataBlock'>
                            <strong>Phone:</strong>
                        </div>
                        <div className='AgentProfile__right_dataBlock AgentProfile__phone'>
                            {location.state?.agentData.phone}
                        </div>
                    </div>
                    {
                        location.state?.show === 1
                            ? <div>
                                <div className='AgentProfile__dataBlock'>
                                    <div className='AgentProfile__left_dataBlock'>
                                        <strong>Date of Birth:</strong>
                                    </div>
                                    <div className='AgentProfile__right_dataBlock AgentProfile__dateOfBirth'>
                                        {location.state?.agentData.date_of_birth}
                                    </div>
                                </div>
                                <div className='AgentProfile__dataBlock'>
                                    <div className='AgentProfile__left_dataBlock'>
                                        <strong>Age:</strong>
                                    </div>
                                    <div className='AgentProfile__right_dataBlock AgentProfile__age'>
                                        {location.state?.agentData.age}
                                    </div>
                                </div>
                                <div className='AgentProfile__dataBlock'>
                                    <div className='AgentProfile__left_dataBlock'>
                                        <strong>Gender:</strong>
                                    </div>
                                    <div className='AgentProfile__right_dataBlock AgentProfile_gender'>
                                        {location.state?.agentData.gender}
                                    </div>
                                </div>
                                <div className='AgentProfile__dataBlock'>
                                    <div className='AgentProfile__left_dataBlock'>
                                        <strong>Address:</strong>
                                    </div>
                                    <div className='AgentProfile__right_dataBlock AgentProfile__address'>
                                        {location.state?.agentData.house}<br />
                                        {location.state?.agentData.street}<br />
                                        {location.state?.agentData.city}, {location.state?.agentData.state} - {location.state?.agentData.zipcode}
                                    </div>
                                </div>
                            </div>
                            : <div></div>
                    }
                    <div className='AgentProfile__dataBlock'>
                        <div className='AgentProfile__left_dataBlock'>
                            <strong>Branch:</strong>
                        </div>
                        <div className='AgentProfile__right_dataBlock AgentProfile__branch'>
                            {location.state?.agentData.branch}
                        </div>
                    </div>
                </div>
                {
                    location.state?.show === 1
                        ? <div>                    
                            <div className='AgentProfile__CompletePolicies AgentProfile_bottomBorder'>
                                <h3>Running Policies</h3>
                                <div className='AgentProfile__dataBlock'>
                                    <div className='AgentProfile__left_dataBlock'>
                                        <strong>Policy</strong>
                                    </div>
                                    <div className='AgentProfile__right_dataBlock'>
                                        <strong>Holder</strong>
                                    </div>
                                </div>
                                {
                                    agentCurr.map((policy,key)=>(
                                        <div className='AgentProfile__dataBlock' key={key}>
                                            <div className='AgentProfile__requestPolicyInfo'>
                                                <div className='AgentProfile__left_dataBlock policyName'>
                                                    <p onClick={() => {
                                                        setPolicyData(policy);
                                                        setOpenDescription(true);
                                                    }}>{policy.policy_name}</p>
                                                </div>
                                                <div className='AgentProfile__right_dataBlock userName'>
                                                    <p onClick={() => {
                                                        navigate("/userProfile", {
                                                            state: {
                                                                userData: policy,
                                                                show: 0,
                                                            }
                                                        })
                                                    }}>{policy.first_name} {policy.last_name}</p>
                                                </div>
                                            </div>
                                            <button className='AgentProfile__button' onClick={() => {
                                                setApprovedPolicyData(policy);
                                                setOpenDetails(true);
                                            }}>Details</button>
                                        </div>
                                    ))
                                }
                                
                            </div>
                            <div className='AgentProfile__Requests'>
                                <h3>Requests</h3>
                                <div className='AgentProfile__dataBlock'>
                                    <div className='AgentProfile__left_dataBlock'>
                                        <strong>Requested Policy</strong>
                                    </div>
                                    <div className='AgentProfile__right_dataBlock'>
                                        <strong>Requested by</strong>
                                    </div>
                                </div>
                            {
                                agentReq.map((policy,key)=>(
                                    
                                        
                                        <div className='AgentProfile__dataBlock AgentProfile__requestedPolicies'>
                                            <div className='AgentProfile__requestPolicyInfo'>
                                                <div className='AgentProfile__left_dataBlock policyName'>
                                                    <p onClick={() => {
                                                        setPolicyData(policy);
                                                        setOpenDescription(true);
                                                    }}>{policy.policy_name}</p>
                                                </div>
                                                <div className='AgentProfile__right_dataBlock userName'>
                                                    <p onClick={() => {
                                                        navigate("/userProfile", {
                                                            state: {
                                                                userData:policy,
                                                                show: 0,
                                                            }
                                                        })
                                                    }}>{policy.first_name} {policy.last_name}</p>
                                                </div>
                                            </div>
                                            {
                                                policy.status===0?
                                                <>
                                                    <button className='AgentProfile__button' onClick={()=>{verify(policy.policy_id,policy.id,auth.user.id)}}>Verify</button>
                                                    <button className='AgentProfile__button' onClick={()=>{reject(policy.policy_id,policy.id,auth.user.id)}}>Not Eligible</button>
                                                </>
                                                :policy.status===1?<>Approved</>
                                                :<>Rejected</>
                                            }
                                            
                                        </div>
                                    
                                ))
                            }
                            </div>
                            
                            <div>
                                <Button onClick={()=>logoutHandler()}>Logout</Button>
                            </div>
                        </div>
                        : <div></div>
                }
            </div>
        </>
    );
}

export default AgentProfile;
