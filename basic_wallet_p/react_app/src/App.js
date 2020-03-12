import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import styled from 'styled-components'

//components
import Nav from './components/Nav'

const TransactionsContainer = styled.div`
  display: flex;
  justify-content: space-around
`

const TransactionsCard = styled.div`
  background: black;
  color: white;
  width: 20%;

`

function App() {
  const [userInfo, setUserInfo] = useState()
  const getUserInfo = (userId) => {
    axios.post("http://localhost:5000/user/info", {user_id: userId})
      .then(res => {
        console.log(res.data);
        setUserInfo(res.data.user_info)
      })
      .catch(err => console.log(err));
  }
  const [user, setUser] = useState({userId: ''})
  return (
    <div className="App">
      <Nav
      getUserInfo={getUserInfo}
      />
      {!userInfo 
      ?
      <>
        <h1>Search for User</h1>
      </>
      :
      <>
        <h1>{`Total CS25 Coin: ${userInfo.user_total}`}</h1>
        <h1>Transactions</h1>
        <TransactionsContainer> 
          {userInfo.user_transactions.map(block => {
            return (
              <TransactionsCard>
                <h2>Transaction Id: {block.block_id}</h2>
                <h2>Amount: {block.amount}</h2>
                <h2>Sender: {block.sender}</h2>
                <h2>Recipient: {block.recipient}</h2>
              </TransactionsCard>
            )
            })}
        </TransactionsContainer>
      </>
    }
    </div>
  );
}

export default App;