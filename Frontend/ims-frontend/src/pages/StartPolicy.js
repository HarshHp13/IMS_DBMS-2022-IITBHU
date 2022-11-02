import React, { useState } from 'react';
import './StartPolicy.css'

const StartPolicy = () => {
    const [popUp, setPopUp] = useState("startPolicy");
    const policyName = "Pehli Policy"
    const sumAssurance = 3000000; // in Rs
    const tenure = 40;
    const premium = 1650;
    const premiumNo = 1;
    if (popUp === "startPolicy") {
        return (
            <div className='StartPolicy__container'>
                <div className='StartPolicy__heading'>
                    <h1>Pehli policy</h1>
                </div>
                <h3>Details</h3>
                <div className='StartPolicy__details'>
                    <div className='StartPolicy__dataBlock StartPolicy__bottomBorder'>
                        <div className='StartPolicy__leftDataBlock'>
                            <strong>Sum Assurance :</strong>
                        </div>
                        {sumAssurance} Rs.
                    </div>
                    <div className='StartPolicy__dataBlock StartPolicy__bottomBorder'>
                        <div className='StartPolicy__leftDataBlock'>
                            <strong>Tenure :</strong>
                        </div>
                        {tenure} years
                    </div>
                    <div className='StartPolicy__dataBlock'>
                        <div className='StartPolicy__leftDataBlock'>
                            <strong>Premium :</strong>
                        </div>
                        {premium} Rs.
                    </div>
                </div>
                <div>
                    <h3>Start your policy by Paying first premium</h3>
                    <button onClick={() => setPopUp("transaction")}>Continue</button>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='StartPolicy__container'>
                <div className='StartPolicy__heading'>
                    <h1>Transaction Details</h1>
                </div>
                <div className='StartPolicy__TransactionDetails'>
                    <div className='StartPolicy__dataBlock StartPolicy__bottomBorder'>
                        <div className='StartPolicy__leftDataBlock'>
                            <strong>Policy Name :</strong>
                        </div>
                        {policyName}
                    </div>
                    <div className='StartPolicy__dataBlock StartPolicy__bottomBorder'>
                        <div className='StartPolicy__leftDataBlock'>
                            <strong>Premium no :</strong>
                        </div>
                        {premiumNo}
                    </div>
                    <div className='StartPolicy__dataBlock'>
                        <div className='StartPolicy__leftDataBlock'>
                            <strong>premium : </strong>
                        </div>
                        {premium} Rs.
                    </div>
                </div>
                <div className='StartPolicy__button'>
                    <button>Pay</button>
                </div>
            </div>
        );
    }
}

export default StartPolicy;