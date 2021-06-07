import React from "react";
import { Budgets } from "../features/budgets/Budgets";
import { Transactions } from "../features/transactions/Transactions";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Expense Tracker</h1>
                <Budgets />
                <Transactions />
            </header>
        </div>
    );
}
export default App;