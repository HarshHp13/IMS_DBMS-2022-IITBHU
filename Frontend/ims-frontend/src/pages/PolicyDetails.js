import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseAuth from '../hooks/useAuth';
import UseAxiosPrivate from '../hooks/useAxiosPrivate';
// import { axiosPrivate } from '../services/axios';
import './PolicyDetails.css'

const PolicyDetails = (props) => {
    const [popUp, setPopUp] = useState("PolicyDetails");
    const [agent, setAgent] = useState({})
    const {auth}=UseAuth()
    const axiosPrivate=UseAxiosPrivate()
    const navigate = useNavigate()

    const onClickHandler=(policy_id)=>{
        axiosPrivate.post("/policy/update",{user_id:auth.user.id, policy_id:policy_id}).then((res)=>{document.elementFromPoint(0,0).click()}).catch((error)=>console.log(error))
        alert("Premium Payed Successfully")
    }

    if (popUp === "PolicyDetails") {
        return (
            <div className='PolicyDetails__container'>
                <div className='PolicyDetails__heading'>
                    <h1>{props.ApprovedPolicyData.policy_name}</h1>
                </div>
                <h3>Details</h3>
                <div className='PolicyDetails__details'>
                    <div className='PolicyDetails__dataBlock PolicyDetails__bottomBorder'>
                        <div className='PolicyDetails__leftDataBlock'>
                            <strong>User :</strong>
                        </div>
                        {props.ApprovedPolicyData.first_name} {props.ApprovedPolicyData.middle_name} {props.ApprovedPolicyData.last_name}
                    </div>
                    {
                        props.ApprovedPolicyData.premiumCount === 0
                            ? <div></div>
                            : <div className='PolicyDetails__dataBlock PolicyDetails__bottomBorder'>
                                <div className='PolicyDetails__leftDataBlock'>
                                    <strong>payed premiums :</strong>
                                </div>
                                {props.ApprovedPolicyData.premium_count}
                            </div>
                    }
                    <div className='PolicyDetails__dataBlock PolicyDetails__bottomBorder'>
                        <div className='PolicyDetails__leftDataBlock'>
                            <strong>Sum Assurance :</strong>
                        </div>
                        {props.ApprovedPolicyData.sum_assurance} Rs.
                    </div>
                    <div className='PolicyDetails__dataBlock PolicyDetails__bottomBorder'>
                        <div className='PolicyDetails__leftDataBlock'>
                            <strong>Tenure :</strong>
                        </div>
                        {props.ApprovedPolicyData.tenure} years
                    </div>
                    <div className='PolicyDetails__dataBlock'>
                        <div className='PolicyDetails__leftDataBlock'>
                            <strong>Premium :</strong>
                        </div>
                        {props.ApprovedPolicyData.premium} Rs.
                    </div>
                    
                </div>
                    {
                        props.show === 1
                        ? props.ApprovedPolicyData.premiumCount === 0
                            ? <div><h3>Start your policy by Paying first premium</h3>
                                <button onClick={() => setPopUp("transaction")}>Continue</button>
                                </div>
                            : <div>
                                <h3>Pay your next premium</h3>
                                <button onClick={() => setPopUp("transaction")}>Continue</button>
                            </div>
                        : <div></div>
                    }
            </div>
        );
    }
    else {
        return (
            <div className='PolicyDetails__container'>
                <div className='PolicyDetails__heading'>
                    <h1>Transaction Details</h1>
                </div>
                <div className='PolicyDetails__TransactionDetails'>
                    <div className='PolicyDetails__dataBlock PolicyDetails__bottomBorder'>
                        <div className='PolicyDetails__leftDataBlock'>
                            <strong>Policy Name :</strong>
                        </div>
                        {props.ApprovedPolicyData.policy_name}
                    </div>
                    <div className='PolicyDetails__dataBlock PolicyDetails__bottomBorder'>
                        <div className='PolicyDetails__leftDataBlock'>
                            <strong>Premium no :</strong>
                        </div>
                        {props.ApprovedPolicyData.premium_count + 1}
                    </div>
                    <div className='PolicyDetails__dataBlock'>
                        <div className='PolicyDetails__leftDataBlock'>
                            <strong>premium : </strong>
                        </div>
                        {props.ApprovedPolicyData.premium} Rs.
                    </div>
                </div>
                <div className='PolicyDetails__button'>
                    <button onClick={()=>{onClickHandler(props.ApprovedPolicyData.policy_id)}}>Pay</button>
                </div>
            </div>
        );
    }
}

export default PolicyDetails;