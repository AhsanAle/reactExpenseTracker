import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((txn) => (
          <li className={txn.amount > 0 ? "positive" : "negative"} key={txn.id}>
            {txn.desc}
            <span> {txn.amount}</span>
            <button
              onClick={() => deleteTransaction(txn.id)}
              className="delete-btn"
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
