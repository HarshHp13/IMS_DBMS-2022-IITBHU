import React, {useState} from 'react';
import './BuyPolicy.css'

const BuyPolicy = () => {
    const sumAssurance = 3000000; // in Rs
    const minTenure = 40;
    const maxTenure = 60;
    const minPeriod = 1;
    const maxPeriod = 3;
    const [period, setPeriod] = useState(1);
    const [tenure, setTenure] = useState(minTenure);
    return (
        <div className='BuyPolicy__container'>
            <div className='BuyPolicy__heading'>
                <h1>Payment Details</h1>
            </div>
            <div className='BuyPolicy__policyName'>
                <h3>Pehli Policy</h3>
            </div>
            <div className='BuyPolicy__dataBlock BuyPolicy__bottomBorder'>
                <div className='BuyPolicy__leftDataBlock'>
                    <strong>Minimum Tenure :</strong>
                </div>
                {minTenure} years
            </div>
            <div className='BuyPolicy__dataBlock BuyPolicy__bottomBorder'>
                <div className='BuyPolicy__leftDataBlock'>
                    <strong>Maximum Tenure :</strong>
                </div>
                {maxTenure} years
            </div>
            <div className='BuyPolicy__dataBlock BuyPolicy__bottomBorder'>
                <div className='BuyPolicy__leftDataBlock'>
                    <strong>Minimum Period :</strong>
                </div>
                {minPeriod} months
            </div>
            <div className='BuyPolicy__dataBlock BuyPolicy__bottomBorder'>
                <div className='BuyPolicy__leftDataBlock'>
                    <strong>Maximum Period :</strong>
                </div>
                {maxPeriod} months
            </div>
            <div className='BuyPolicy__dataBlock BuyPolicy__premium'>
                premium: {Math.ceil(sumAssurance*period/(tenure*12))} Rs for every
                <div className='BuyPolicy__decrement' id='BuyPolicy__decrement'>
                    <button onClick={()=>{if(period > minPeriod) setPeriod(period-1);}}>-</button>
                </div>
                <div>{period}</div>
                <div className='BuyPolicy__increment' id='BuyPolicy__increment'>
                    <button onClick={()=>{if(period < maxPeriod) setPeriod(period+1);}}>+</button>
                </div>
                month for
                <div className='BuyPolicy__decrement' id='BuyPolicy__decrement'>
                    <button onClick={()=>{if(tenure > minTenure) setTenure(tenure-1);}}>-</button>
                </div>
                <div>{tenure}</div>
                <div className='BuyPolicy__increment' id='BuyPolicy__increment'>
                    <button onClick={()=>{if(tenure < maxTenure) setTenure(tenure+1);}}>+</button>
                </div>
                years
            </div>
        </div>
    );
}

export default BuyPolicy;