import React, { useState } from 'react';
import { Modal } from '@mui/material'
import './UserProfile.css'
import PolicyDetails from './PolicyDetails';
import PolicyDescription from './PolicyDescription';
import { useLocation } from 'react-router-dom';

function UserProfile() {
    const location = useLocation();
    const [openDescription, setOpenDescription] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);
    const [ApprovedPolicyData, setApprovedPolicyData] = useState({});
    const [policyData, setPolicyData] = useState({});
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
                    <div className='UserProfile__name'>{location.state.userData.firstName} {location.state.userData.middleName} {location.state.userData.lastName}</div>
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
                            {location.state.userData.phone}
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
                            {location.state.userData.professoin}
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
                            ${location.state.userData.id}#{location.state.userData.firstName}
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
                    <div className='UserProfile__dataBlock'>
                        <div className='UserProfile__requestPolicyInfo'>
                            <div className='UserProfile__left_dataBlock UserProfile__pointer' onClick={() => {
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
                        <button className='UserProfile__button' onClick={() => {
                            setApprovedPolicyData({
                                name: "Pehli Policy",
                                premium: 1100,
                                premiumCount: 12,
                                sumAssurance: 4000000, // in Rs
                                tenure: 60, // in years
                                agentName: "Bheem pal",
                            });
                            setOpenDetails(true);
                        }}>Status</button>
                    </div>
                    <div className='UserProfile__dataBlock'>
                        <div className='UserProfile__requestPolicyInfo'>
                            <div className='UserProfile__left_dataBlock UserProfile__pointer' onClick={() => {
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
                        <button className='UserProfile__button' onClick={() => {
                            setApprovedPolicyData({
                                name: "Aviva i-Life",
                                premium: 2100,
                                premiumCount: 4,
                                sumAssurance: 10000000, // in Rs
                                tenure: 40, // in years
                                agentName: "Rati pal",
                            });
                            setOpenDetails(true);
                        }}>Status</button>
                    </div>
                </div>
                <div className='UserProfile__requestedPolicies'>
                    <h3>Requested Policies</h3>
                    <div className='UserProfile__dataBlock'>
                        <div className='UserProfile__requestPolicyInfo'>
                            <div className='UserProfile__left_dataBlock UserProfile__pointer' onClick={() => {
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
                        {
                            location.state.show === 1
                                ? <button className='UserProfile__button' onClick={() => {
                                    setApprovedPolicyData({
                                        name: "KIC Life eShield",
                                        premium: 1650,
                                        premiumCount: 0,
                                        sumAssurance: 3000000, // in Rs
                                        tenure: 40, // in years
                                        agentName: "Jagat pal",
                                    });
                                    setOpenDetails(true);
                                }}>Proceed</button>
                                : <div></div>
                        }
                    </div>
                </div>
                {
                    location.state.show === 1
                    ?<div>
                        <button>logOut</button>
                    </div>
                    :<div></div>
                }
            </div>
        </>
    );
}

export default UserProfile;
