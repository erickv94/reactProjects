import React from 'react';

const Expense = ({expense}) => {
    return (
        <li className="gastos">
            <p>{expense.expenseName}
            <span className="gasto">$ {expense.expenseAmount}</span>
            </p>
        </li>
    );
};

export default Expense;