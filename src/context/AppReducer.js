export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TXN":
      return {
        ...state,
        transactions: [action.data, ...state.transactions],
      };
    case "DEL_TXN":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.data
        ),
      };

    default:
      return state;
  }
};
