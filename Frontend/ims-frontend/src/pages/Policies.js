import React, {useState} from 'react'
import {Modal} from '@mui/material'
import PolicyDescription from './PolicyDescription'
import './Policies.css'

function Policies() {
    const [openDescription, setOpenDescription] = useState(false);
    const [policyData, setPolicyData] = useState({
        desc: null,
        minAge: null,
        maxAge: null,
        profession: null,
        name: null,
        registrationFee: null,
        premium: null,
        tenure: null,
    });
    let userData={
        firstName: "Harshit",
        middleName: null,
        lastName: "Singh",
    }

    return (
        <>
            <Modal
                open={openDescription}
                onClose={()=>setOpenDescription(false)}
            >
            <PolicyDescription policyData={policyData} userData={userData}/>
            </Modal>
            <div className="container-3a">
                <div className="container-3a1">
                    <div className="nav-3a">
                        <div className="aa" id='a1'>Insurerance</div>
                        <div className="aa" id='a2'>Life Cover</div>
                        <div className="aa" id='a3'>Age Limit</div>
                        <div className="aa" id='a4'>Tenure</div>
                        <div className="aa" id='a5'>Premium</div>
                    </div>

                    <div className="body-3a">
                        <div className="ba baa1">
                            <img className="a-img" src="./b1.png" alt="" />
                            <p className='a-imgtag' onClick={()=>{
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
                            }}>Plan Details</p>
                        </div>
                        <div className="ba baa2">
                            <p className="lifecover">50 Lakh</p>
                        </div>
                        <div className="ba baa3">
                            <p className="age">
                                99 yrs
                            </p>
                        </div>
                        <div className="ba baa4">
                            <p className="claimsettled">
                                97.9%
                            </p>
                        </div>
                        <div className="ba baa5">
                            <button className="payment">
                                ₹10,863
                            </button>
                        </div>
                    </div>

                    <div className="body-3a">
                        <div className="ba baa1">
                            <img className="a-img" src="./b2.png" alt="" />
                            <p className='a-imgtag'>Plan Details</p>
                        </div>
                        <div className="ba baa2">
                            <p className="lifecover">50 Lakh</p>
                        </div>
                        <div className="ba baa3">
                            <p className="age">
                                85 yrs
                            </p>
                        </div>
                        <div className="ba baa4">
                            <p className="claimsettled">
                                98.7%
                            </p>
                        </div>
                        <div className="ba baa5">
                            <button className="payment">
                                ₹18,121
                            </button>
                        </div>
                    </div>


                    <div className="body-3a">
                        <div className="ba baa1">
                            <img className="a-img" src="./b3.png" alt="" />
                            <p className='a-imgtag'>Plan Details</p>
                        </div>
                        <div className="ba baa2">
                            <p className="lifecover">50 Lakh</p>
                        </div>
                        <div className="ba baa3">
                            <p className="age">
                                85 yrs
                            </p>
                        </div>
                        <div className="ba baa4">
                            <p className="claimsettled">
                                99.3%
                            </p>
                        </div>
                        <div className="ba baa5">
                            <button className="payment">
                                ₹12,719
                            </button>
                        </div>
                    </div>

                    <div className="body-3a">
                        <div className="ba baa1">
                            <img className="a-img" src="./b4.png" alt="" />
                            <p className='a-imgtag'>Plan Details</p>
                        </div>
                        <div className="ba baa2">
                            <p className="lifecover">50 Lakh</p>
                        </div>
                        <div className="ba baa3">
                            <p className="age">
                                85 yrs
                            </p>
                        </div>
                        <div className="ba baa4">
                            <p className="claimsettled">
                                98.5%
                            </p>
                        </div>
                        <div className="ba baa5">
                            <button className="payment">
                                ₹16,872
                            </button>
                        </div>
                    </div>

                    <div className="body-3a">
                        <div className="ba baa1">
                            <img className="a-img" src="./b5.png" alt="" />
                            <p className='a-imgtag'>Plan Details</p>
                        </div>
                        <div className="ba baa2">
                            <p className="lifecover">35 Lakh</p>
                        </div>
                        <div className="ba baa3">
                            <p className="age">
                                65 yrs
                            </p>
                        </div>
                        <div className="ba baa4">
                            <p className="claimsettled">
                                97.1%
                            </p>
                        </div>
                        <div className="ba baa5">
                            <button className="payment">
                                ₹11,109
                            </button>
                        </div>
                    </div>

                    <div className="body-3a">
                        <div className="ba baa1">
                            <img className="a-img" src="./b3.png" alt="" />
                            <p className='a-imgtag'>Plan Details</p>
                        </div>
                        <div className="ba baa2">
                            <p className="lifecover">50 Lakh</p>
                        </div>
                        <div className="ba baa3">
                            <p className="age">
                                85 yrs
                            </p>
                        </div>
                        <div className="ba baa4">
                            <p className="claimsettled">
                                99.3%
                            </p>
                        </div>
                        <div className="ba baa5">
                            <button className="payment">
                                ₹12,719
                            </button>
                        </div>
                    </div>

                </div>
                <div className="container-3a2">
                    <img className="img-3a2" src="./features.png" alt="" />
                </div>
            </div>

            <div className="container-3b">
                <p className="heading">How Does a Term Plan Work?</p>
                <p className="desc-3b">Term plans work like limited life insurance policies. They provide life cover for a specific time. To enjoy the life cover, you must pay premiums at regular intervals. If anything happens to you, the policyholder, during the policy tenure, your nominee receives the promised sum assured as the policy payout. To enhance your family’s financial protection, you can choose to purchase riders or add-ons.</p>
            </div>
            <div className="container-3b1">
                <p className="heading">Why Do I Need Term Insurance?</p>
                <p className="desc-3b">Despite the many features and benefits of term insurance plans, some people are still not sure how these policies impact them. Your family depends on you emotionally and financially. You may want to help your parents secure a better retirement or pay for your child’s higher education. The payout from a term plan can help your family achieve their goals even if something were to happen to you. Many young people today require loans to help them purchase a vehicle or a home. If something were to happen to you while you are repaying a loan, your family may have to deal with your loss, the loss of your income and a new financial burden. If they are unable to repay the loan, they risk losing the asset. The payout from a term plan can help your family deal with debt and protect your assets.</p>

            </div>
        </>
    )
}
export default Policies;