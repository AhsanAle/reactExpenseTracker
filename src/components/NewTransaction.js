import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const NewTransaction = () => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTxn = {
      id: Math.floor(Math.random() * 100000000),
      desc,
      amount: +amount,
    };

    addTransaction(newTxn);
    setDesc("");
    setAmount("");
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Enter Description </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description"
            required
          ></input>
        </div>
        <div className="form-control">
          <label>Enter Amount </label>
          <span> Income - Positive | Expense - Negative</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Value"
            required
          ></input>
        </div>
        <button className="btn">Add</button>
      </form>
    </div>
  );
};
