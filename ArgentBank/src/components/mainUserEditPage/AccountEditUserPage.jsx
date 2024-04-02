import React from 'react';
import AccountEditUserPageItem from './AccountEditUserPageItem';

const AccountItemEditUserPage = () => {
    const dataAccounts = [
        {
            id:1,
            argentBankChecking: 8349,
            accountAmout:2082.79,
        },
        {
            id:2,
            argentBankChecking: 6712,
            accountAmout:10928.42,
        },
        {
            id:3,
            argentBankChecking: 8349,
            accountAmout:184.79,
        }
    ]
    return (
        <div>
            <h2 className='sr-only'>Accounts</h2>
            {dataAccounts.map(({id, argentBankChecking, accountAmout}) => <AccountEditUserPageItem key={id} argentBankChecking={argentBankChecking} accountAmout={accountAmout}/>)}     
        </div>
    );
};

export default AccountItemEditUserPage;