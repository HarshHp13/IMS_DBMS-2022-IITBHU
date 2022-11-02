import React, {useState} from 'react';
import './UserProfile.css'
import {Modal} from '@mui/material'
import BuyPolicy from './BuyPolicy'

function UserProfile() {
    const [openTransaction, setOpenTransaction] = useState(false);
    return (
        <>
        <Modal
            open={openTransaction}
            onClose={()=>setOpenTransaction(false)}
        >
        <BuyPolicy></BuyPolicy>
        </Modal>
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
                    <div className='UserProfile__left_data Block UserProfile__income'>
                        13.6 lakh PA
                    </div>
                </div>
            </div>
            <div className='UserProfile__policyData'>
                <h3>Current Policies</h3>
                <div className='UserProfile__dataBlock UserProfile__pointer'>
                    KIC Life eShield
                </div>
                <div className='UserProfile__dataBlock UserProfile__pointer'>
                    Aviva i-Life
                </div>
            </div>
            <div className='UserProfile__policyData'>
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
