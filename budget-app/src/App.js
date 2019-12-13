import React, { useState, useEffect } from "react";
import Ask from "./components/Ask";
import Form from "./components/Form";
import ListExpenses from "./components/ListExpenses";
import RemainingBudgetCtrl from "./components/RemainingBudgetCtrl";

function App() {
  const [AppBudget, setAppBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [enableAsk, setEnableAsk] = useState(true);
  const [expense, setExpense] = useState({});
  const [saveExpense, setSaveExpense] = useState(false);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if (saveExpense) {
      const expensesList = [...expenses, expense];
      setExpenses(expensesList);
      const expenseRemaining = remaining- expense.expenseAmount;
      setRemaining(expenseRemaining);
      setSaveExpense(false);
    }
  }, [saveExpense]);

  return (
    <div className="App container">
      <header>
        <h1>Weekly budget</h1>
        <div className="contenido contenido-principal">
          {enableAsk ? (
            <Ask
              setAppBudget={setAppBudget}
              setEnableAsk={setEnableAsk}
              setRemaining={setRemaining}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form setExpense={setExpense} setSaveExpense={setSaveExpense} />
              </div>
              <div className="one-half column">
                <ListExpenses expenses={expenses} />
                <RemainingBudgetCtrl budget={AppBudget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
