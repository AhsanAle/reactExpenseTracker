import React from "react";

export const NewTransaction = () => {
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label>Enter Description </label>
          <input type="text" placeholder="Description" required></input>
        </div>
        <div className="form-control">
          <label>Enter Amount </label>
          <span> Income - Positive | Expense - Negative</span>
          <input type="number" placeholder="Value" required></input>
        </div>
        <button className="btn">Add</button>
      </form>
    </div>
  );
};
