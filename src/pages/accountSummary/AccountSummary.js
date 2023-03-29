import React from "react"
import AccountInfoList from "../../components/accountInfoList/AccountInfoList";

const AccountSummary = ({accounts}) => {
  
  
    return (
        <div className="accountSummary">
                 <AccountInfoList  accounts={[{type: 'Checking', amount: 2500, accountNumber: '2468135790' },{type: 'Checking', amount: 2500, accountNumber: '2468135790' }]}/>
        </div>
    );
  };
  
  export default AccountSummary;
  