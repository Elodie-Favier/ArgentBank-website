import React from 'react';
import '../../styles/main.css';

const PersoHeader = () => {
    return (
        <div className='header'>
            <h1>Welcome back
            <br/>
            "Max la menace"
            </h1>
            <button className='edit-button'>Edit Name</button>
        </div>
    );
};

export default PersoHeader;