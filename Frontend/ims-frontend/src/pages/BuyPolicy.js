import React, {useState} from 'react';
import './BuyPolicy.css'

const BuyPolicy = () => {
    const sumAssurance = 3000000; // in Rs
    const tenure = 40;
    const premium = 1650;
    return (
        <div className='BuyPolicy__container'>
            <div className='BuyPolicy__heading'>
                <h1>Pehli policy</h1>
            </div>
            <div className='BuyPolicy__policyName'>
                <h3>Details</h3>
            </div>
            <div className='BuyPolicy__details'>
                <div className='BuyPolicy__dataBlock BuyPolicy__bottomBorder'>
                    <div className='BuyPolicy__leftDataBlock'>
                        <strong>Sum Assurance :</strong>
                    </div>
                    {sumAssurance} Rs.
                </div>
                <div className='BuyPolicy__dataBlock BuyPolicy__bottomBorder'>
                    <div className='BuyPolicy__leftDataBlock'>
                        <strong>Tenure :</strong>
                    </div>
                    {tenure} years
                </div>
                <div className='BuyPolicy__dataBlock'>
                    <div className='BuyPolicy__leftDataBlock'>
                        <strong>Premium :</strong>
                    </div>
                    {premium} Rs.
                </div>
            </div>
            <div>
                <h3>Start your policy by Paying first premium</h3>
                <button >Continue</button>
            </div>
        </div>
    );
}

export default BuyPolicy;