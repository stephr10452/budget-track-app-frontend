import React from "react"
import AccountInfoList from "../../components/accountInfoList/AccountInfoList";

import PageLayout from '../../layouts/pageLayout/PageLayout';

const AccountSummary = () => {
  
  
    return (
        <PageLayout>
            <div className="accountSummary">
                    <AccountInfoList  />
            </div>
        </PageLayout>
    );
  };
  
  export default AccountSummary;
  