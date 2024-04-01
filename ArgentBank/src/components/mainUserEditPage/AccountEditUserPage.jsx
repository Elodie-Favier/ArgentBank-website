import React from 'react';
import '../../styles/main.css'


const AccountEditUserPage = () => {
    return (
        <div>
            <h2 className='sr-only'>Accounts</h2>
            <section className='account-edit-user'>
                <div className='account-content-wrapper'>
                    <h3 className="account-title-edit-user">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount-edit-user">$2,082.79</p>
                    <p className="account-amount-description-edit-user">Available Balance</p>
                </div>
                <div className="account-content-wrapper-cta">
                    <img src='./big-arrow-next.png' className='big-arrow-next' alt='flèche vers la droite'/>
                   
                </div>
            </section>
            <section className='account-edit-user'>
                <div className='account-content-wrapper'>
                    <h3 className="account-title-edit-user">Argent Bank Checking (x6712)</h3>
                    <p className="account-amount-edit-user">$10,928.42</p>
                    <p className="account-amount-description-edit-user">Available Balance</p>
                </div>
                <div className="account-content-wrapper-cta">
                <img src='./big-arrow-next.png' className='big-arrow-next' alt='flèche vers la droite'/>
                 
                </div>
            </section>
            <section className='account-edit-user'>
                <div className='account-content-wrapper'>
                    <h3 className="account-title-edit-user">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount-edit-user">$184.79</p>
                    <p className="account-amount-description-edit-user">Available Balance</p>
                </div>
                <div className="account-content-wrapper-cta">
                <img src='./big-arrow-next.png' className='big-arrow-next' alt='flèche vers la droite'/>
                    
                </div>
            </section>
        </div>
    );
};

export default AccountEditUserPage;