import React, { state } from "react";
import { useState } from "react";
import Error from "./Error";
import shortid from 'shortid';
const Form = props => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [error, setError] = useState(false);

  const handleChange = e => {
    e.target.name === "name"
      ? setExpenseName(e.target.value)
      : setExpenseAmount(parseInt(e.target.value, 10));

  
       
  };



  const handleSubmit = e => {
    e.preventDefault();
    if(expenseAmount < 0 || isNaN(expenseAmount) || expenseName===''){
        setError(true);
        return;
    }
    props.setExpense({
        id: shortid.generate(),
        expenseName,
        expenseAmount
    })
    props.setSaveExpense(true);
    setError(false);
    setExpenseAmount('');
    setExpenseName('');
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add your expense</h2>
      {error&& <Error message="Expense wrong"/>}
      <div className="campo">
        <label htmlFor="name">Expense name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="u-full-width"
          placeholder="example. taxi"
          onChange={handleChange}
          value={expenseName}
        />
      </div>
      <div className="campo">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          className="u-full-width"
          placeholder="example. 300"
          onChange={handleChange}
          value={expenseAmount}
        />
      </div>
      <input
        type="submit"
        value="Add expense"
        className="button-primary u-full-width"
      />
    </form>
  );
};

export default Form;
