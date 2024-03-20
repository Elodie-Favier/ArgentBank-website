import React from 'react';
import '../../styles/main.css';




const PersoHeader = () => {

    

    return (
        <div className='header'>
            <h1 className='header-title'>Welcome back
            <br/>
            {/* {userConnected ? "ok" : "Raté"} */}
            </h1>
            <button className='edit-button'>Edit Name</button>

            <form >

            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username"/>
            </form>
        </div>
    );
};

export default PersoHeader;