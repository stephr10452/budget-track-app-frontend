import React from 'react';
import './AccountInfoCard.css';

const AccountInfoCard = ({account}) => {
  
  console.log(account)

  return (
    <div className="accountInfoCard">
      <div className="account-type">{account.type}</div>
      <div className="account-amount">${account.balances.current.toFixed(2)}</div>
      <div className="account-number">Account #: {account.accountNumber}</div>
     </div>
  );
};

export default AccountInfoCard;
