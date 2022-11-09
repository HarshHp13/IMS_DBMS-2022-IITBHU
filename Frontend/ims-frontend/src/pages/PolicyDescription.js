import React, { useState } from 'react'
// import { Input, Button } from '@mui/material'
import Login from '@mui/icons-material/InfoOutlined';
import Rejected from '@mui/icons-material/WarningAmberOutlined';
import Approved from '@mui/icons-material/ThumbUpAltOutlined';
import Waiting from '@mui/icons-material/AccessTimeOutlined';
import './PolicyDescription.css'
import UseAuth from '../hooks/useAuth';
import UseAxiosPrivate from '../hooks/useAxiosPrivate';
function PolicyDescription(props) {
    const { auth } = UseAuth()
    const axiosPrivate=UseAxiosPrivate()
    const [approval, setApproval]= useState({})
    const apply=()=>{
        const data={
            user_id:auth.user.id,
            policy_id:props.policyData.policy_id
        }
        axiosPrivate.post("/policy/policyApproval/apply",data)
        .then((res)=>{
            console.log("Success")
            setModelState("request")
        })
        .catch((error)=>{
            console.log(error)
            alert("Something went wrong!!")
        })
    }

    const getApproval=async ()=>{
        const data={
            user_id:auth.user.id,
            policy_id:props.policyData.policy_id
        }
        await axiosPrivate.post("policy/policyApproval/approval",data,{headers:{"Content-Type":"application/json"}})
        .then((res)=>{
            setApproval(res.data)
        })
        .catch((error)=>{
            console.log(error)
            alert("Something went wrong!!")
        })
    }

    getApproval()

    // console.log(auth.isAuthenticated?1:0);
    const [modelState, setModelState] = useState("decsription");
    if (modelState === "decsription") {
        return (
            <div className='PolicyDescription__container'>
                <div className='PolicyDescription__name'><h1>{props.policyData.policy_name}</h1></div>
                <div className='PolicyDescription__description'>
                    <h3>Policy Description</h3>
                    <p>{props.policyData.policy_description}</p>
                </div>
                <div className='PolicyDescription__eligibility'>
                    <h3>Eligibility</h3>
                    <div className='PolicyDescription__dataBlock PolicyDescription__bottomBorder'>
                        <strong className=' PolicyDescription__leftDataBlock'>minimum Age : </strong> {props.policyData.min_age} years<br />
                    </div>
                    <div className='PolicyDescription__dataBlock PolicyDescription__bottomBorder'>
                        <strong className=' PolicyDescription__leftDataBlock'>maximum Age : </strong> {props.policyData.max_age} years<br />
                    </div>
                    <div className='PolicyDescription__dataBlock'>
                        <strong className=' PolicyDescription__leftDataBlock'>Ocupation : </strong> {props.policyData.occupation} <br />
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
                {/* {
                    console.log(auth.isAuthenticated)
                } */}
                {
                    auth.isAuthenticated
                    ?auth.role==="USER"
                        ?approval
                            ?approval.status===0
                                ?<div className='policyDesc__reviewing'><Waiting className='policyDesc__icon' fontSize='medium' /><div>Your request is being reviewed.</div></div>
                            :approval.status===1
                                ?<div className='policyDesc__current'><Approved className='policyDesc__icon' fontSize='medium' /><div>This premium is currently ongoing.</div></div>
                            :<div className='policyDesc__rejected'><Rejected className='policyDesc__icon' fontSize='medium' /><div>You are not eligible for this policy.</div></div>
                        :<div className='PolicyDescription__apply'><button onClick={() =>apply()}>Apply</button></div>
                        :<></>
                    :<div className='policyDesc__login'><Login className='policyDesc__icon' fontSize='medium' /><div>Login to proceed</div></div>
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