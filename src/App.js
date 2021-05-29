import "./App.css";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { NewTransaction } from "./components/NewTransaction";
import { Title } from "./components/Title";
import { TransactionHistory } from "./components/TransactionHistory";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Title />
        <Balance />
        <IncomeExpense />
        <TransactionHistory />
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
