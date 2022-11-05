import React, {useState} from 'react';
import './UserProfile.css'
import {Modal} from '@mui/material'
import PolicyDetails from './PolicyDetails';

function UserProfile() {
    const [openDetails, setOpenDetails] = useState(false);
    const [ApprovedPolicyData, setApprovedPolicyData] = useState({
        name: null,
        premium: null,
        premiumCount: null,
        sumAssurance: null, // in Rs
        tenure: null,
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
    return (
        <>
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
                        <div className='UserProfile__left_dataBlock UserProfile__pointer'>
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
                        <div className='UserProfile__left_dataBlock UserProfile__pointer'>
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
                        <div className='UserProfile__left_dataBlock UserProfile__pointer'>
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
        </div>
    </>
    );
}

export default UserProfile;
