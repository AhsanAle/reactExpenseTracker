import "./App.css";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { NewTransaction } from "./components/NewTransaction";
import { Title } from "./components/Title";
import { TransactionHistory } from "./components/TransactionHistory";

function App() {
  return (
    <div className="App">
      <Title />
      <Balance />
      <IncomeExpense />
      <TransactionHistory />
      <NewTransaction />
    </div>
  );
}

export default App;
