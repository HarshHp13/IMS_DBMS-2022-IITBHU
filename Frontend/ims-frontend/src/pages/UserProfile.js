import React from 'react';
import './UserProfile.css'

function UserProfile(){
    return (
        <div className='UserProfile__container'>
            <div className='UserProfile__user'>
                <div className='UserProfile__picture'></div>
                <div className='UserProfile__name'>Archana Pardhaan</div>
            </div>
            <div className='UserProfile__line'></div>
            <div className='UserProfile__dataBlock'>
                <div className='UserProfile__left_dataBlock'>
                    <strong>Username:</strong>
                </div>
                <div className='UserProfile__left_dataBlock'>
                    arshiii!!!
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
