import React from 'react';
import '../../styles/main.css'


const AccountEditUserPageItem = ({argentBankChecking, accountAmout}) => {
    return (
        
            <section className='account-edit-user'>
                <div className='account-content-wrapper'>
                    <h3 className="account-title-edit-user">Argent Bank Checking (x{argentBankChecking})</h3>
                    <p className="account-amount-edit-user">${accountAmout}</p>
                    <p className="account-amount-description-edit-user">Available Balance</p>
                </div>
                <div className="account-content-wrapper-cta">
                    <img src='./big-arrow-next.png' className='big-arrow-next' alt='flèche vers la droite'/>
                   
                </div>
            </section>
            
            
        
    );
};

export default AccountEditUserPageItem;