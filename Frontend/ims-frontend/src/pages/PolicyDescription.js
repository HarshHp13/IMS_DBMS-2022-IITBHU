import React, { useState } from 'react'
import { Input, Button } from '@mui/material'
import './PolicyDescription.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function PolicyDescription(props) {
    const [modelState, setModelState] = useState("decsription");
    if (modelState === "decsription") {
        return (
            <div className='PolicyDescription__container'>
                <div className='PolicyDescription__name'><h1>{props.policyData.name}</h1></div>
                <div className='PolicyDescription__description'>
                    <h3>Policy Description</h3>
                    <p>{props.policyData.desc}</p>
                </div>
                <div className='PolicyDescription__eligibility'>
                    <h3>Eligibility</h3>
                    <div className='PolicyDescription__dataBlock PolicyDescription__bottomBorder'>
                        <strong className=' PolicyDescription__leftDataBlock'>minimum Age : </strong> {props.policyData.minAge} years<br />
                    </div>
                    <div className='PolicyDescription__dataBlock PolicyDescription__bottomBorder'>
                        <strong className=' PolicyDescription__leftDataBlock'>maximum Age : </strong> {props.policyData.maxAge} years<br />
                    </div>
                    <div className='PolicyDescription__dataBlock'>
                        <strong className=' PolicyDescription__leftDataBlock'>Ocupation : </strong> {props.policyData.profession} <br />
                    </div>
                </div>
                <div className='PolicyDescription__paymentDetails'>
                    <h3>Details</h3>
                    <div className='PolicyDescription__dataBlock PolicyDescription__bottomBorder'>
                        <strong className=' PolicyDescription__leftDataBlock'>Premium : </strong> Rs. {props.policyData.premium} <br />
                    </div>
                    <div className='PolicyDescription__dataBlock'>
                        <strong className=' PolicyDescription__leftDataBlock'>Tenure : </strong> {props.policyData.tenure} years <br />
                    </div>
                </div>
                {
                    props.policyData.ApplyButton==1
                    ?<div className='PolicyDescription__apply'>
                        <button onClick={() => setModelState("request")}>
                            Apply
                        </button>
                    </div>
                    :<div></div>
                }
            </div>
        );
    }
    else if (modelState === "request") {
        return (
            <div className='PolicyDescription__container'>
                Your request has successfully sent. We shall contact you soon and let you know if your request is approved or not. Thank you for using IMS insurance company.
            </div>
        )
    }
} 

export default PolicyDescription;

// (1, "Pehli Policy",18,"Pehli Policy is a term insurance plan that takes care of your protection and savings needs for securing the future of your children. As a parent, one of your most important goals would be to make sure that your children have a bright future and lead their lives comfortably. These plans can help you achieve this by saving for your children’s higher education at a prestigious university.",
// 3000,100000,2022-10-31,"Term",0,18,"NA"),

// 8826291716