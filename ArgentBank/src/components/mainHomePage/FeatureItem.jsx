import React from 'react';
import "../../styles/main.css";
const FeatureItem = ({src, alt, title, content}) => {
    return (
        <div className="feature-item">
            <img className="feature-icon" src={src} alt={alt} />
            <h3 className="feature-item-title">{title}</h3>  
            <p>{content}</p>
        </div>
    );
};

export default FeatureItem;