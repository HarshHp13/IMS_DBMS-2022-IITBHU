import React, { useState } from 'react';
import './AgentProfile.css'
import PolicyDescription from './PolicyDescription';
import PolicyDetails from './PolicyDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal } from '@mui/material'

function AgentProfile() {
    const location = useLocation();
    const navigate = useNavigate();
    const [openDescription, setOpenDescription] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);
    const [ApprovedPolicyData, setApprovedPolicyData] = useState({});
    const [policyData, setPolicyData] = useState({});
    const userData = {
        firstName: "Harshit",
        middleName: null,
        lastName: "Singh",
    };
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
                                <h3>Complete Policies</h3>
                                <div className='AgentProfile__dataBlock'>
                                    <div className='AgentProfile__left_dataBlock'>
                                        <strong>Policy</strong>
                                    </div>
                                    <div className='AgentProfile__right_dataBlock'>
                                        <strong>Holder</strong>
                                    </div>
                                </div>
                                <div className='AgentProfile__dataBlock'>
                                    <div className='AgentProfile__requestPolicyInfo'>
                                        <div className='AgentProfile__left_dataBlock policyName'>
                                            <p onClick={() => {
                                                setPolicyData({
                                                    desc: "Pehli Policy is a term insurance plan that takes care of your protection and savings needs for securing the future of your children. As a parent, one of your most important goals would be to make sure that your children have a bright future and lead their lives comfortably. These plans can help you achieve this by saving for your children’s higher education at a prestigious university.",
                                                    minAge: 12,
                                                    maxAge: 60,
                                                    profession: "student",
                                                    name: "LIC",
                                                    registrationFee: 199,
                                                    premium: 2999,
                                                    tenure: 20,
                                                });
                                                setOpenDescription(true);
                                            }}>LIC</p>
                                        </div>
                                        <div className='AgentProfile__right_dataBlock userName'>
                                            <p onClick={() => {
                                                navigate("/userProfile", {
                                                    state: {
                                                        userData: {
                                                            id: 7,
                                                            firstName: "Harshit",
                                                            middleName: null,
                                                            lastName: "Singh",
                                                            email: "artofharshit00@gmail.com",
                                                            date_of_birth: "18th January, 2000",
                                                            age: "22",
                                                            referrals: 4,
                                                            phone: "9910279337",
                                                            house: "House no. 154",
                                                            street: "street no. 8, tigaon Road, near RK-Tower",
                                                            city: "Faridabad",
                                                            state: "Haryana",
                                                            professoin: "Ganja fukna",
                                                            income: "13.6",
                                                            gender: "Female",
                                                            branch: "IMS-Delhi",
                                                            zipcode: "121005",
                                                        },
                                                        show: 0,
                                                    }
                                                })
                                            }}>Harshit Singh</p>
                                        </div>
                                    </div>
                                    <button className='AgentProfile__button' onClick={() => {
                                        setApprovedPolicyData({
                                            name: "LIC",
                                            premium: 1100,
                                            premiumCount: 12,
                                            sumAssurance: 4000000, // in Rs
                                            tenure: 60, // in years
                                            agentName: "Bheem pal",
                                        });
                                        setOpenDetails(true);
                                    }}>Details</button>
                                </div>
                            </div>
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
                                <div className='AgentProfile__dataBlock'>
                                    <div className='AgentProfile__requestPolicyInfo'>
                                        <div className='AgentProfile__left_dataBlock policyName'>
                                            <p onClick={() => {
                                                setPolicyData({
                                                    desc: "Pehli Policy is a term insurance plan that takes care of your protection and savings needs for securing the future of your children. As a parent, one of your most important goals would be to make sure that your children have a bright future and lead their lives comfortably. These plans can help you achieve this by saving for your children’s higher education at a prestigious university.",
                                                    minAge: 12,
                                                    maxAge: 60,
                                                    profession: "student",
                                                    name: "LIC",
                                                    registrationFee: 199,
                                                    premium: 2999,
                                                    tenure: 20,
                                                });
                                                setOpenDescription(true);
                                            }}>LIC</p>
                                        </div>
                                        <div className='AgentProfile__right_dataBlock userName'>
                                            <p onClick={() => {
                                                navigate("/userProfile", {
                                                    state: {
                                                        userData: {
                                                            id: 7,
                                                            firstName: "Harshit",
                                                            middleName: null,
                                                            lastName: "Singh",
                                                            email: "artofharshit00@gmail.com",
                                                            date_of_birth: "18th January, 2000",
                                                            age: "22",
                                                            referrals: 4,
                                                            phone: "9910279337",
                                                            house: "House no. 154",
                                                            street: "street no. 8, tigaon Road, near RK-Tower",
                                                            city: "Faridabad",
                                                            state: "Haryana",
                                                            professoin: "Ganja fukna",
                                                            income: "13.6",
                                                            gender: "Female",
                                                            branch: "IMS-Delhi",
                                                            zipcode: "121005",
                                                        },
                                                        show: 0,
                                                    }
                                                })
                                            }}>Harshit Singh</p>
                                        </div>
                                    </div>
                                    <button className='AgentProfile__button' onClick={() => {
                                        setApprovedPolicyData({
                                            name: "LIC",
                                            premium: 1100,
                                            premiumCount: 12,
                                            sumAssurance: 4000000, // in Rs
                                            tenure: 60, // in years
                                            agentName: "Bheem pal",
                                        });
                                        setOpenDetails(true);
                                    }}>Details</button>
                                </div>
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
                                <div className='AgentProfile__dataBlock AgentProfile__requestedPolicies'>
                                    <div className='AgentProfile__requestPolicyInfo'>
                                        <div className='AgentProfile__left_dataBlock policyName'>
                                            <p onClick={() => {
                                                setPolicyData({
                                                    desc: "Pehli Policy is a term insurance plan that takes care of your protection and savings needs for securing the future of your children. As a parent, one of your most important goals would be to make sure that your children have a bright future and lead their lives comfortably. These plans can help you achieve this by saving for your children’s higher education at a prestigious university.",
                                                    minAge: 12,
                                                    maxAge: 60,
                                                    profession: "student",
                                                    name: "Pehli IC",
                                                    registrationFee: 199,
                                                    premium: 2999,
                                                    tenure: 20,
                                                });
                                                setOpenDescription(true);
                                            }}>Pehli IC</p>
                                        </div>
                                        <div className='AgentProfile__right_dataBlock userName'>
                                            <p onClick={() => {
                                                navigate("/userProfile", {
                                                    state: {
                                                        userData: {
                                                            id: 7,
                                                            firstName: "Arsla",
                                                            middleName: null,
                                                            lastName: "Bhagat",
                                                            email: "artofarsla00@gmail.com",
                                                            date_of_birth: "18th January, 2000",
                                                            age: "22",
                                                            referrals: 4,
                                                            phone: "9910279337",
                                                            house: "House no. 154",
                                                            street: "street no. 8, tigaon Road, near RK-Tower",
                                                            city: "Faridabad",
                                                            state: "Haryana",
                                                            professoin: "Ganja fukna",
                                                            income: "13.6",
                                                            gender: "Female",
                                                            branch: "IMS-Delhi",
                                                            zipcode: "121005",
                                                        },
                                                        show: 0,
                                                    }
                                                })
                                            }}>Arsla Bhagat</p>
                                        </div>
                                    </div>
                                    <button className='AgentProfile__button'>Verify</button>
                                    <button className='AgentProfile__button'>Not Eligible</button>
                                </div>
                            </div>
                            <div>
                                <button className='AgentProfile__button'>logOut</button>
                            </div>
                        </div>
                        : <div></div>
                }
            </div>
        </>
    );
}

export default AgentProfile;
