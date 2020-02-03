import React from 'react';
import Expense from './Expense';

const ListExpenses = ({expenses}) => {
    return (
        <div className="gastos-realizados">
            <h2>List</h2>
            {  
                expenses.map(expense=>(
                 <Expense expense={expense} key={expense.id} />  
                ))
            }
        </div>
    );
};

export default ListExpenses;