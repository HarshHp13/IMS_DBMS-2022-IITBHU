import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PolicyDetails.css'

const PolicyDetails = (props) => {
    const [popUp, setPopUp] = useState("PolicyDetails");
    const firstName = "Harshit";
    const middleName = null;
    const lastName = "Singh";
    const navigate = useNavigate()
    if (popUp === "PolicyDetails") {
        return (
            <div className='PolicyDetails__container'>
                <div className='PolicyDetails__heading'>
                    <h1>{props.ApprovedPolicyData.name}</h1>
                </div>
                <h3>Details</h3>
                <div className='PolicyDetails__details'>
                    <div className='PolicyDetails__dataBlock PolicyDetails__bottomBorder'>
                        <div className='PolicyDetails__leftDataBlock'>
                            <strong>User :</strong>
                        </div>
                        {firstName} {middleName} {lastName}
                    </div>
                    {
                        props.ApprovedPolicyData.premiumCount === 0
                            ? <div></div>
                            : <div className='PolicyDetails__dataBlock PolicyDetails__bottomBorder'>
                                <div className='PolicyDetails__leftDataBlock'>
                                    <strong>payed premiums :</strong>
                                </div>
                                {props.ApprovedPolicyData.premiumCount}
                            </div>
                    }
                    <div className='PolicyDetails__dataBlock PolicyDetails__bottomBorder'>
                        <div className='PolicyDetails__leftDataBlock'>
                            <strong>Sum Assurance :</strong>
                        </div>
                        {props.ApprovedPolicyData.sumAssurance} Rs.
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
                    <div className='PolicyDetails__dataBlock'>
                        <div className='PolicyDetails__leftDataBlock'>
                            <strong>Agent :</strong>
                        </div>
                        <div className='agent' onClick={() => {
                            navigate("/agentProfile", {
                                state: {
                                    agentData: {
                                        id: 1,
                                        firstName: "Harshit",
                                        middleName: null,
                                        lastName: "Singh",
                                        email: "artofharry00@gmail.com",
                                        phone: "9910279337",
                                    },
                                    show: 0,
                                }
                            })
                        }}>
                            {props.ApprovedPolicyData.agentName}
                        </div>
                    </div>
                </div>
                <div>
                    {
                        props.ApprovedPolicyData.premiumCount === 0
                            ? <h3>Start your policy by Paying first premium</h3>
                            : <h3>Pay your next premium</h3>
                    }
                    <button onClick={() => setPopUp("transaction")}>Continue</button>
                </div>
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
                        {props.ApprovedPolicyData.name}
                    </div>
                    <div className='PolicyDetails__dataBlock PolicyDetails__bottomBorder'>
                        <div className='PolicyDetails__leftDataBlock'>
                            <strong>Premium no :</strong>
                        </div>
                        {props.ApprovedPolicyData.premiumCount + 1}
                    </div>
                    <div className='PolicyDetails__dataBlock'>
                        <div className='PolicyDetails__leftDataBlock'>
                            <strong>premium : </strong>
                        </div>
                        {props.ApprovedPolicyData.premium} Rs.
                    </div>
                </div>
                <div className='PolicyDetails__button'>
                    <button>Pay</button>
                </div>
            </div>
        );
    }
}

export default PolicyDetails;