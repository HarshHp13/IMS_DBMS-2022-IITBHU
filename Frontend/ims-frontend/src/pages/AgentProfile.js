import React from 'react';
import './AgentProfile.css'

function AgentProfile() {
    const totalStars = 5;
    const activeStars = 4.3;

    return (
        <div className='AgentProfile__container'>
            <div className='AgentProfile__top AgentProfile_bottomBorder'>
                <div className='AgentProfile__agent'>
                    <div className='AgentProfile__picture'></div>
                    <div className='AgentProfile__name'>Harshit Singh</div>
                </div>
                <div className='AgentProfile__stars'>
                    Rating : {activeStars}
                </div>
            </div>
            <div className='AgentProfile__agentData AgentProfile_bottomBorder'>
                <div className='AgentProfile__dataBlock'>
                    <div className='AgentProfile__left_dataBlock'>
                        <strong>username:</strong>
                    </div>
                    <div className='AgentProfile__right_dataBlock AgentProfile__username'>
                        ArtofHarry7
                    </div>
                </div>
                <div className='AgentProfile__dataBlock'>
                    <div className='AgentProfile__left_dataBlock'>
                        <strong>Email:</strong>
                    </div>
                    <div className='AgentProfile__right_dataBlock AgentProfile__email'>
                        artofharry00@gmail.com
                    </div>
                </div>
                <div className='AgentProfile__dataBlock'>
                    <div className='AgentProfile__left_dataBlock'>
                        <strong>Date of Birth:</strong>
                    </div>
                    <div className='AgentProfile__right_dataBlock AgentProfile__dateOfBirth'>
                        18th January, 2000
                    </div>
                </div>
                <div className='AgentProfile__dataBlock'>
                    <div className='AgentProfile__left_dataBlock'>
                        <strong>Age:</strong>
                    </div>
                    <div className='AgentProfile__right_dataBlock AgentProfile__age'>
                        22
                    </div>
                </div>
                <div className='AgentProfile__dataBlock'>
                    <div className='AgentProfile__left_dataBlock'>
                        <strong>Referrals:</strong>
                    </div>
                    <div className='AgentProfile__right_dataBlock AgentProfile__referrals'>
                        4
                    </div>
                </div>
                <div className='AgentProfile__dataBlock'>
                    <div className='AgentProfile__left_dataBlock'>
                        <strong>phone:</strong>
                    </div>
                    <div className='AgentProfile__right_dataBlock AgentProfile__phone'>
                        9910279337
                    </div>
                </div>
                <div className='AgentProfile__dataBlock'>
                    <div className='AgentProfile__left_dataBlock'>
                        <strong>Address:</strong>
                    </div>
                    <div className='AgentProfile__right_dataBlock AgentProfile__address'>
                        House no. 154<br />
                        street no. 8, tigaon Road<br />
                        near RK-Tower<br />
                        Faridabad, Haryana - 121005
                    </div>
                </div>
                <div className='AgentProfile__dataBlock'>
                    <div className='AgentProfile__left_dataBlock'>
                        <strong>Profession:</strong>
                    </div>
                    <div className='AgentProfile__right_dataBlock AgentProfile__profession'>
                        Software Developer
                    </div>
                </div>
                <div className='AgentProfile__dataBlock'>
                    <div className='AgentProfile__left_dataBlock'>
                        <strong>Income:</strong>
                    </div>
                    <div className='AgentProfile__right_dataBlock AgentProfile__income'>
                        13.6 lakh PA
                    </div>
                </div>
            </div>
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
                            <p>Arsla Bhagat</p>
                        </div>
                    </div>
                    <button className='AgentProfile__button'>Verified</button>
                    <button className='AgentProfile__button'>Not Eligible</button>
                </div>
            </div>
        </div>
    );
}

export default AgentProfile;
