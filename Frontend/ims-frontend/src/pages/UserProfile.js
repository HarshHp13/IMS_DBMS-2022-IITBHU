import React, {useState} from 'react';
import './UserProfile.css'
import {Modal} from '@mui/material'
import StartPolicy from './StartPolicy'

function UserProfile() {
    const [openTransaction, setOpenTransaction] = useState(false);
    const id = 1;
    const firstName = "Harshit";
    const lastName = "Singh";
    const email = "artofharry00@gmail.com";
    return (
        <>
        <Modal
            open={openTransaction}
            onClose={()=>setOpenTransaction(false)}
        >
        <StartPolicy></StartPolicy>
        </Modal>
        <div className='UserProfile__container'>
            <div className='UserProfile__user'>
                <div className='UserProfile__picture'></div>
                <div className='UserProfile__name'>{firstName} {lastName}</div>
            </div>
            <div className='UserProfile__userData'>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Email:</strong>
                    </div>
                    <div className='UserProfile__left_dataBlock UserProfile__email'>
                        {email}
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
                    <div className='UserProfile__left_data Block UserProfile__income'>
                        13.6 lakh PA
                    </div>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__left_dataBlock'>
                        <strong>Refferal Code:</strong>
                    </div>
                    <div className='UserProfile__left_data Block UserProfile__income'>
                        ${id}#{firstName}
                    </div>
                </div>
            </div>
            <div className='UserProfile__currentPolicies'>
                <h3>Current Policies</h3>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__requestPolicyInfo'>
                        <div className='UserProfile__left_dataBlock UserProfile__pointer'>
                            KIC Life eShield
                        </div>
                    </div>
                    <button className='UserProfile__button'>Details</button>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__requestPolicyInfo'>
                        <div className='UserProfile__left_dataBlock UserProfile__pointer'>
                        Aviva i-Life
                        </div>
                    </div>
                    <button className='UserProfile__button'>Details</button>
                </div>
            </div>
            <div className='UserProfile__requestedPolicies'>
                <h3>Requested Policies</h3>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__requestPolicyInfo'>
                        <div className='UserProfile__left_dataBlock UserProfile__pointer'>
                            KIC Life eShield: 
                        </div>
                        <div className='UserProfile__left_data Block UserProfile__income'>
                            Approved
                        </div>
                    </div>
                    <button className='UserProfile__button' onClick={()=>setOpenTransaction(true)}>Proceed</button>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__requestPolicyInfo'>
                        <div className='UserProfile__left_dataBlock UserProfile__pointer'>
                            KIC Life eShield: 
                        </div>
                        <div className='UserProfile__left_data Block UserProfile__income'>
                            Approved
                        </div>
                    </div>
                    <button className='UserProfile__button'>Proceed</button>
                </div>
                <div className='UserProfile__dataBlock'>
                    <div className='UserProfile__requestPolicyInfo'>
                        <div className='UserProfile__left_dataBlock UserProfile__pointer'>
                            KIC Life eShield: 
                        </div>
                        <div className='UserProfile__left_data Block UserProfile__income'>
                            Approved
                        </div>
                    </div>
                    <button className='UserProfile__button'>Proceed</button>
                </div>
            </div>
        </div>
    </>
    );
}

export default UserProfile;
