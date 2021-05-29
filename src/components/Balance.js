import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions
    .map((transaction) => transaction.amount)
    .reduce((total, num) => (total += num), 0)
    .toFixed(2);

  return (
    <div>
      <h3>Account Balance</h3>
      <h1 className={balance > 0 ? "credit" : "debit"}>${balance}</h1>
    </div>
  );
};
