import React from 'react';
import './PolicyDescription.css'

function PolicyDescription() {
    return (
        <div className='PolicyDescription__container'>
            <div className='PolicyDescription__name'><h1>Pehli Policy</h1></div>
            <div className='PolicyDescription__description PolicyDescription__bottomBorder'>
                <h3>Policy Description</h3>
                <p>Pehli Policy is a term insurance plan that takes care of your protection and savings needs for securing the future of your children. As a parent, one of your most important goals would be to make sure that your children have a bright future and lead their lives comfortably. These plans can help you achieve this by saving for your children’s higher education at a prestigious university.</p>
            </div>
            <div className='PolicyDescription__eligibility PolicyDescription__bottomBorder'>
                <h3>Eligibility</h3>
                <strong>minAge : </strong> 4 <br/>
                <strong>maxAge : </strong> 18 <br/>
                <strong>Ocupation : </strong> Student <br/>
            </div>
            <div className='PolicyDescription__buy'>
                Proceed to buy
            </div>
        </div>
    );
}

export default PolicyDescription;

// (1, "Pehli Policy",18,"Pehli Policy is a term insurance plan that takes care of your protection and savings needs for securing the future of your children. As a parent, one of your most important goals would be to make sure that your children have a bright future and lead their lives comfortably. These plans can help you achieve this by saving for your children’s higher education at a prestigious university.",
// 3000,100000,2022-10-31,"Term",0,18,"NA"),