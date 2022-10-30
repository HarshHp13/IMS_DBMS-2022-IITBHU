import React from 'react';
import './AdminProfile.css'

function AdminProfile() {
    const totalStars = 5;
    const activeStars = 3.6;

    return (
        <div className='AdminProfile__container'>
            <div className='AdminProfile__top AdminProfile_bottomBorder'>
                <div className='AdminProfile__admin'>
                    <div className='AdminProfile__picture'></div>
                    <div className='AdminProfile__name'>Harshit Singh</div>
                </div>
                <div className='AdminProfile__stars'>
                    Rating : 4.3
                </div>
            </div>
            <div className='AdminProfile__adminData AdminProfile_bottomBorder'>
                <div className='AdminProfile__dataBlock'>
                    <div className='AdminProfile__left_dataBlock'>
                        <strong>username:</strong>
                    </div>
                    <div className='AdminProfile__right_dataBlock AdminProfile__username'>
                        ArtofHarry7
                    </div>
                </div>
                <div className='AdminProfile__dataBlock'>
                    <div className='AdminProfile__left_dataBlock'>
                        <strong>Email:</strong>
                    </div>
                    <div className='AdminProfile__right_dataBlock AdminProfile__email'>
                        artofharry00@gmail.com
                    </div>
                </div>
                <div className='AdminProfile__dataBlock'>
                    <div className='AdminProfile__left_dataBlock'>
                        <strong>Date of Birth:</strong>
                    </div>
                    <div className='AdminProfile__right_dataBlock AdminProfile__dateOfBirth'>
                        18th January, 2000
                    </div>
                </div>
                <div className='AdminProfile__dataBlock'>
                    <div className='AdminProfile__left_dataBlock'>
                        <strong>Age:</strong>
                    </div>
                    <div className='AdminProfile__right_dataBlock AdminProfile__age'>
                        22
                    </div>
                </div>
                <div className='AdminProfile__dataBlock'>
                    <div className='AdminProfile__left_dataBlock'>
                        <strong>Referrals:</strong>
                    </div>
                    <div className='AdminProfile__right_dataBlock AdminProfile__referrals'>
                        4
                    </div>
                </div>
                <div className='AdminProfile__dataBlock'>
                    <div className='AdminProfile__left_dataBlock'>
                        <strong>phone:</strong>
                    </div>
                    <div className='AdminProfile__right_dataBlock AdminProfile__phone'>
                        9910279337
                    </div>
                </div>
                <div className='AdminProfile__dataBlock'>
                    <div className='AdminProfile__left_dataBlock'>
                        <strong>Address:</strong>
                    </div>
                    <div className='AdminProfile__right_dataBlock AdminProfile__address'>
                        House no. 154<br />
                        street no. 8, tigaon Road<br />
                        near RK-Tower<br />
                        Faridabad, Haryana - 121005
                    </div>
                </div>
                <div className='AdminProfile__dataBlock'>
                    <div className='AdminProfile__left_dataBlock'>
                        <strong>Profession:</strong>
                    </div>
                    <div className='AdminProfile__right_dataBlock AdminProfile__profession'>
                        Software Developer
                    </div>
                </div>
                <div className='AdminProfile__dataBlock'>
                    <div className='AdminProfile__left_dataBlock'>
                        <strong>Income:</strong>
                    </div>
                    <div className='AdminProfile__right_dataBlock AdminProfile__income'>
                        13.6 lakh PA
                    </div>
                </div>
            </div>
            <div className='AdminProfile__policyData AdminProfile_bottomBorder'>
                <h3>Your Clients</h3>
                <div className='AdminProfile__dataBlock'>
                    <div className='AdminProfile__left_dataBlock'>
                        <strong>Complete Policies:</strong>
                    </div>
                    <div className='AdminProfile__right_dataBlock AdminProfile__completePolicies'>
                        3
                    </div>
                </div>
                <div className='AdminProfile__dataBlock'>
                    <div className='AdminProfile__left_dataBlock'>
                        <strong>Current Policies:</strong>
                    </div>
                    <div className='AdminProfile__right_dataBlock AdminProfile__currentPolicies'>
                        1
                    </div>
                </div>
            </div>
            <div className='AdminProfile__Requests'>
                <h3>Requests</h3>
                <div className='AdminProfile__dataBlock'>
                    <div className='AdminProfile__left_dataBlock'>
                        <strong>Requested Policy</strong>
                    </div>
                    <div className='AdminProfile__right_dataBlock'>
                        <strong>Requested by</strong>
                    </div>
                </div>
                <div className='AdminProfile__dataBlock'>
                    <div className='AdminProfile__left_dataBlock policyName'>
                        <p>LIC</p>
                    </div>
                    <div className='AdminProfile__right_dataBlock userName'>
                        <p>Harshit Singh</p>
                    </div>
                </div>
                <div className='AdminProfile__dataBlock'>
                    <div className='AdminProfile__left_dataBlock policyName'>
                        <p>Pehli IC</p>
                    </div>
                    <div className='AdminProfile__right_dataBlock userName'>
                        <p>Arsla Bhagat</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminProfile;
