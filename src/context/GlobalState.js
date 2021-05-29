import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const AppState = {
  transactions: [],
};

export const GlobalContext = createContext(AppState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, AppState);

  function addTransaction(txn) {
    dispatch({
      type: "ADD_TXN",
      data: txn,
    });
  }

  function deleteTransaction(txnId) {
    dispatch({
      type: "DEL_TXN",
      data: txnId,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        addTransaction,
        deleteTransaction,
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
