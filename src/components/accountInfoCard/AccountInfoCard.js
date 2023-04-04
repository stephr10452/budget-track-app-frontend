import React from 'react';
import './AccountInfoCard.css';

const AccountInfoCard = ({account}) => {
  
  console.log(account)

  return (
    <div className="accountInfoCard">
      <div className="account-type">{account.name}</div>
      <div className="account-amount">${account.balances.current.toFixed(2)}</div>
      <div className="account-name">Account Type: {account.subtype}</div>
      <div className= "account-transactions">Account Transactions: {account.balances.transactions}</div>
     </div>
  );
};

export default AccountInfoCard;
