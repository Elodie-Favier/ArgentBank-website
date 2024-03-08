import React from 'react';
import '../../styles/main.css'


const Account = () => {
    return (
        <div>
            <h2 className='sr-only'>Accounts</h2>
            <section className='account'>
                <div className='account-content-wrapper'>
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper-cta">
                    <button className='transaction-button'>View transaction</button>
                </div>
            </section>
            <section className='account'>
                <div className='account-content-wrapper'>
                    <h3 className="account-title">Argent Bank Checking (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper-cta">
                    <button className='transaction-button'>View transaction</button>
                </div>
            </section>
            <section className='account'>
                <div className='account-content-wrapper'>
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$184.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper-cta">
                    <button className='transaction-button'>View transaction</button>
                </div>
            </section>
        </div>
    );
};

export default Account;