import React from 'react';
import "../../styles/main.css";
const FeatureItem = () => {
    return (
        <>
            <div className="feature-item">
            <img className="feature-icon" src="./icon-chat.png" alt="Chat Icon" />
           <h3 className="feature-item-title">You are our #1 priority</h3>  
           <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
        </div>
        <div className="feature-item">
            <img className="feature-icon" src="./icon-money.png" alt="Money Icon" />
           
           <h3 className="feature-item-title">More savings means higher rates</h3>  
           <p>The more you save with us, the higher your interest rate will be!</p>
        </div>
        <div className="feature-item">
            <img className="feature-icon" src="./icon-security.png" alt="Security Icon" />
            
           <h3 className="feature-item-title">Security you can trust</h3>  
           <p>We use top of the line encryption to make sure your data and money is always safe.</p>
        </div>
        </>
    );
};

export default FeatureItem;