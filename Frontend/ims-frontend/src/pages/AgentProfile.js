import React from 'react';
import './AgentProfile.css'
import { useLocation, useNavigate } from 'react-router-dom';

function AgentProfile() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)
    // const totalStars = 5;
    // const activeStars = 4.3;
    // console.log(location.state?.name)
    // console.log(location.state?.agentData.firstName);
    return (
        <div className='AgentProfile__container'>
            <div className='AgentProfile__top AgentProfile_bottomBorder'>
                <div className='AgentProfile__agent'>
                    <div className='AgentProfile__picture'></div>
                    <div className='AgentProfile__name'>{location.state?.agentData.firstName} {location.state?.agentData.middleName} {location.state?.agentData.lastName}</div>
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
                    location.state?.show===1
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
                        IMS-Noida
                    </div>
                </div>
            </div>
            {
                location.state?.show === 1
                    ? <div>
                        <div className='AgentProfile__policyData AgentProfile_bottomBorder'>
                            <h3>Your Clients</h3>
                            <div className='AgentProfile__dataBlock'>
                                <div className='AgentProfile__left_dataBlock'>
                                    <strong>Complete Policies:</strong>
                                </div>
                                <div className='AgentProfile__right_dataBlock AgentProfile__completePolicies'>
                                    3
                                </div>
                            </div>
                            <div className='AgentProfile__dataBlock'>
                                <div className='AgentProfile__left_dataBlock'>
                                    <strong>Current Policies:</strong>
                                </div>
                                <div className='AgentProfile__right_dataBlock AgentProfile__currentPolicies'>
                                    1
                                </div>
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
                            <div className='AgentProfile__dataBlock'>
                                <div className='AgentProfile__requestPolicyInfo'>
                                    <div className='AgentProfile__left_dataBlock policyName'>
                                        <p>LIC</p>
                                    </div>
                                    <div className='AgentProfile__right_dataBlock userName'>
                                        <p>Harshit Singh</p>
                                    </div>
                                </div>
                                <button className='AgentProfile__button'>Verified</button>
                                <button className='AgentProfile__button'>Not Eligible</button>
                            </div>
                            <div className='AgentProfile__dataBlock'>
                                <div className='AgentProfile__requestPolicyInfo'>
                                    <div className='AgentProfile__left_dataBlock policyName'>
                                        <p>Pehli IC</p>
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
                                <button className='AgentProfile__button'>Verified</button>
                                <button className='AgentProfile__button'>Not Eligible</button>
                            </div>
                        </div>
                    </div>
                    : <div></div>
            }
        </div>
    );
}

export default AgentProfile;
