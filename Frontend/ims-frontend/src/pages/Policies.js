import React, {useState, useEffect} from 'react'
import {Modal} from '@mui/material'
import PolicyDescription from './PolicyDescription'
import './Policies.css'
import UseAxiosPrivate from '../hooks/useAxiosPrivate'
import UseAuth from '../hooks/useAuth'

function Policies() {
    const axiosPrivate=UseAxiosPrivate();
    const {auth}=UseAuth()
    const [openDescription, setOpenDescription] = useState(false);
    const [policyData, setPolicyData] = useState(null);
    const [approval, setApproval] = useState(null);
    const ApplyButton=1;

    // axiosPrivate.get("/policy/list").then((res)=>console.log(res.data))
    const [policies, setPolicies] = useState([]);

    useEffect(() => {
        const controller=new AbortController()
        axiosPrivate.get("/policy/list").then((response)=>setPolicies(response.data))
        return()=>{controller.abort()}
    }, [policies]);

    


    return (
        <>
            <Modal
                open={openDescription}
                onClose={()=>setOpenDescription(false)}
            >
            <PolicyDescription policyData={policyData} ApplyButton={ApplyButton} approval={approval}/>
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
                    {
                     policies.map((policy)=>(
                        <div className="body-3a" key={policy.id}>
                            <div className="ba baa1">
                                <div  className='policiy__img'>
                                    <h3>{policy.policy_name}</h3>
                                </div>
                                {/* <img className="a-img" src="./b1.png" alt="" /> */}
                                <p className='a-imgtag' onClick={async ()=>{
                                    // console.log(policy.id)
                                    setPolicyData(policy);
                                    setOpenDescription(true);
                                    
                                }}>Plan Details</p>
                            </div>
                            <div className="ba baa2">
                                <p className="lifecover">{policy.life_cover}</p>
                            </div>
                            <div className="ba baa3">
                                <p className="age">
                                    {policy.min_age}-{policy.max_age} year
                                </p>
                            </div>
                            <div className="ba baa4">
                                <p className="claimsettled">
                                    {policy.tenure} years
                                </p>
                            </div>
                            <div className="ba baa5">
                                <button className="payment">
                                    Rs.{policy.premium}
                                </button>
                            </div>
                        </div>
                     ))   
                    }
                    

                </div>
                <div className="container-3a2">
                    <img className="img-3a2" src="./features.png" alt="" />
                </div>
            </div>

            <div className="container-3b">
                <p className="heading">How Does a Term Plan Work?</p>
                <p className="desc-3b">Term plans work like limited life insurance policies. They provide life cover for a specific time. To enjoy the life cover, you must pay premiums at regular intervals. If anything happens to you, the policyholder, during the policy tenure, your nominee receives the promised sum assured as the policy payout. To enhance your family???s financial protection, you can choose to purchase riders or add-ons.</p>
            </div>
            <div className="container-3b1">
                <p className="heading">Why Do I Need Term Insurance?</p>
                <p className="desc-3b">Despite the many features and benefits of term insurance plans, some people are still not sure how these policies impact them. Your family depends on you emotionally and financially. You may want to help your parents secure a better retirement or pay for your child???s higher education. The payout from a term plan can help your family achieve their goals even if something were to happen to you. Many young people today require loans to help them purchase a vehicle or a home. If something were to happen to you while you are repaying a loan, your family may have to deal with your loss, the loss of your income and a new financial burden. If they are unable to repay the loan, they risk losing the asset. The payout from a term plan can help your family deal with debt and protect your assets.</p>

            </div>
        </>
    )
}
export default Policies;