import React from "react";

export const IncomeExpense = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h3>INCOME</h3>
        <p className="amount positive"> 200 </p>
      </div>
      <div>
        <h3>EXPENSE </h3>
        <p className="amount negative"> -100</p>
      </div>
    </div>
  );
};
