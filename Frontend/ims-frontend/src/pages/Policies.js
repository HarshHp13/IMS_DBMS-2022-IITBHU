import React, {useState} from 'react'
import {Modal} from '@mui/material'
import PolicyDescription from './PolicyDescription'
import './Policies.css'

function Policies() {
    const [openDescription, setOpenDescription] = useState(false);

    return (
        <>
            {/* <Navbar className='userHome__navbar'/> */}
            <Modal
                open={openDescription}
                onClose={()=>setOpenDescription(false)}
            >
            <PolicyDescription />
            </Modal>
            <div className="container-3a">
                <div className="container-3a1">
                    <div className="nav-3a">
                        <div className="aa" id='a1'>Insurerance</div>
                        <div className="aa" id='a2'>Life Cover</div>
                        <div className="aa" id='a3'>Coverage till age</div>
                        <div className="aa" id='a4'>Claim settled</div>
                        <div className="aa" id='a5'>Monthly payment</div>
                    </div>

                    <div className="body-3a">
                        <div className="ba baa1">
                            <img className="a-img" src="./b1.png" alt="" />
                            <p className='a-imgtag' onClick={()=>setOpenDescription(true)}>Plan Details</p>
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
            {/* <Footer className='userHome__navbar'/> */}
        </>
    )
}
export default Policies;