import React, { useState,useEffect, useCallback } from "react";
import { usePlaidLink } from "react-plaid-link";
import AccountInfoCard from "../accountInfoCard/AccountInfoCard";
import "./AccountInfoList.css"

const AccountInfoList = () => {
    const [accounts, setAccounts] = useState([]);
    const [token, setToken] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const onSuccess = useCallback(async (publicToken) => {
      setLoading(true);
      await fetch("/api/exchange_public_token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ public_token: publicToken }),
      });
      await getBalance();
    }, []);
  
    // Creates a Link token
    const createLinkToken = React.useCallback(async () => {
      // For OAuth, use previously generated Link token
      if (window.location.href.includes("?oauth_state_id=")) {
        const linkToken = localStorage.getItem('link_token');
        setToken(linkToken);
      } else {
        const response = await fetch("/api/create_link_token", {});
        const data = await response.json();
        setToken(data.link_token);
        localStorage.setItem("link_token", data.link_token);
      }
    }, [setToken]);
  
    // Fetch balance data
    const getBalance = React.useCallback(async () => {
      setLoading(true);
      const response = await fetch("/api/balance", {});
      const data = await response.json();
      setData(data);
      setAccounts(data.Balance.accounts);
      setLoading(false);
    }, [setData, setLoading]);
  
    let isOauth = false;
  
    const config = {
      token,
      onSuccess,
    };
  
    // For OAuth, configure the received redirect URI
    if (window.location.href.includes("?oauth_state_id=")) {
      config.receivedRedirectUri = window.location.href;
      isOauth = true;
    }
    const { open, ready } = usePlaidLink(config);
  
    useEffect(() => {
      if (token == null) {
        createLinkToken();
      }
      if (isOauth && ready) {
        open();
      }
    }, [token, isOauth, ready, open]);

  
    return (
        <div className="accountInfoList">
            <div className="accountInfoList__title">
             Account List
            </div>
            <div className="accountInfoList__container">
                { accounts.length > 0 && accounts.map((account=>{
                    return <AccountInfoCard account={account} />
                }))}

                {accounts.length === 0 && 
                    <button onClick={() => open()
                    } disabled={!ready}>
                        <strong>Load Accounts</strong>
                    </button> 
                }
            </div>
        </div>
    );
  };
  
  export default AccountInfoList;
  
