import React, { useState } from 'react';
import './AdminProfile.css'
import PolicyDescription from './PolicyDescription';
import PolicyDetails from './PolicyDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal, Button } from '@mui/material'
import UseAuth from '../hooks/useAuth';

function AdminProfile() {
    const location = useLocation();
    const navigate = useNavigate();
    const [openDescription, setOpenDescription] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);
    const [ApprovedPolicyData, setApprovedPolicyData] = useState({});
    const [policyData, setPolicyData] = useState({});
    const { auth, setAuth } = UseAuth()
    const userData = {
        firstName: "Harshit",
        middleName: null,
        lastName: "Singh",
    }

    const logoutHandler = () => {
        setAuth(prev => {
            return { ...prev, access_token: "", refresh_token: "", isAuthenticated: false }
        })
        navigate("/")
        console.log(auth)

    }

    // const totalStars = 5;
    // const activeStars = 4.3;
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
                <PolicyDetails ApprovedPolicyData={ApprovedPolicyData} userData={userData} show={0}></PolicyDetails>
            </Modal>
            <div className='AdminProfile__container'>
                {/* <div className='AdminProfile__heading'></div> */}
                <div className='AdminProfile__top AdminProfile_bottomBorder'>
                    <div className='AdminProfile__agent'>
                        <div className='AdminProfile__picture'></div>
                        <div className='AdminProfile__name'>{location.state?.agentData.first_name} {location.state?.agentData.middle_name} {location.state?.agentData.last_name}</div>
                    </div>
                    {/* <div className='AdminProfile__stars'>
                    Rating : {activeStars}
                </div> */}
                </div>
                <div className='AdminProfile__agentData'>
                    <div className='AdminProfile__dataBlock'>
                        <div className='AdminProfile__left_dataBlock'>
                            <strong>Email:</strong>
                        </div>
                        <div className='AdminProfile__right_dataBlock AdminProfile__email'>
                            {location.state?.agentData.email}
                        </div>
                    </div>
                    <div className='AdminProfile__dataBlock'>
                        <div className='AdminProfile__left_dataBlock'>
                            <strong>Date of Birth:</strong>
                        </div>
                        <div className='AdminProfile__right_dataBlock AdminProfile__dateOfBirth'>
                            {location.state?.agentData.date_of_birth}
                        </div>
                    </div>
                    <div className='AdminProfile__dataBlock'>
                        <div className='AdminProfile__left_dataBlock'>
                            <strong>Age:</strong>
                        </div>
                        <div className='AdminProfile__right_dataBlock AdminProfile__age'>
                            {location.state?.agentData.age}
                        </div>
                    </div>
                    <div className='AdminProfile__dataBlock'>
                        <div className='AdminProfile__left_dataBlock'>
                            <strong>Gender:</strong>
                        </div>
                        <div className='AdminProfile__right_dataBlock AdminProfile_gender'>
                            {location.state?.agentData.gender}
                        </div>
                    </div>
                    <div className='AdminProfile__dataBlock'>
                        <div className='AdminProfile__left_dataBlock'>
                            <strong>Branch:</strong>
                        </div>
                        <div className='AdminProfile__right_dataBlock AdminProfile__branch'>
                            {location.state?.agentData.branch_name}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminProfile;
