import React from 'react';

const AccountItem = ({argentBankChecking, accountAmout}) => {
    return (
        
        <section className='account'>
                <div className='account-content-wrapper'>
                    <h3 className="account-title">Argent Bank Checking (x{argentBankChecking})</h3>
                    <p className="account-amount">${accountAmout}</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper-cta">
                    <button className='transaction-button'>View transaction</button>
                </div>
            </section>
            
    );
};

export default AccountItem;