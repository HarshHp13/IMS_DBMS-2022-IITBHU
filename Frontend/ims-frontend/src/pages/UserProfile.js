import React from 'react';
import './UserProfile.css'

function UserProfile() {
    return (
        <div className='UserProfile__container'>
            <div className='UserProfile__user'>
                <div className='UserProfile__picture'></div>
                <div className='UserProfile__name'>Harshit Singh</div>
            </div>
            <div className='UserProfile__userData'>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Username:</strong>
                    </div>
                    <div className='UserProfile__left_dataBlock UserProfile__username'>
                        ArtofHarry7
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Email:</strong>
                    </div>
                    <div className='UserProfile__left_dataBlock UserProfile__email'>
                        artofharry00@gmail.com
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Date of Birth:</strong>
                    </div>
                    <div className='UserProfile__left_dataBlock UserProfile__dateOfBirth'>
                        18th January, 2000
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Age:</strong>
                    </div>
                    <div className='UserProfile__left_dataBlock UserProfile__age'>
                        22
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Referrals:</strong>
                    </div>
                    <div className='UserProfile__left_dataBlock UserProfile__referrals'>
                        4
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>phone:</strong>
                    </div>
                    <div className='UserProfile__left_dataBlock UserProfile__phone'>
                        9910279337
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Address:</strong>
                    </div>
                    <div className='UserProfile__left_dataBlock UserProfile__address'>
                        House no. 154<br />
                        street no. 8, tigaon Road<br />
                        near RK-Tower<br />
                        Faridabad, Haryana - 121005
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Profession:</strong>
                    </div>
                    <div className='UserProfile__left_dataBlock UserProfile__profession'>
                        Software Developer
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Income:</strong>
                    </div>
                    <div className='UserProfile__left_dataBlock UserProfile__income'>
                        13.6 lakh PA
                    </div>
                </div>
            </div>
            <div className='UserProfile__policyData'>
                <h3>Your Policies</h3>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Requested Policies:</strong>
                    </div>
                    <div className='UserProfile__left_dataBlock UserProfile__requestedPolicies'>
                        3
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Approved Policies:</strong>
                    </div>
                    <div className='UserProfile__left_dataBlock UserProfile__approvedPolicies'>
                        6
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Current Policies:</strong>
                    </div>
                    <div className='UserProfile__left_dataBlock UserProfile__currentPolicies'>
                        2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
