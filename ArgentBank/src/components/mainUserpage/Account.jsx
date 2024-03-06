import React from 'react';
import '../../styles/main.css'


const Account = () => {
    return (
        <div>
            <h2 className='sr-only'>Accounts</h2>
            <section className='account'>
                <div className='account-content-wrapper'>
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="acount-amout">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
            </section>
            <section className='account'>
                <div className='account-content-wrapper'>
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="acount-amout">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
            </section>
            <section className='account'>
                <div className='account-content-wrapper'>
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="acount-amout">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
            </section>
        </div>
    );
};

export default Account;