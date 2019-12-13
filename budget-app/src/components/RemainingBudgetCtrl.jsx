import React from 'react';
import {checkBudget} from '../Helpers/checkBudget';
const RemainingBudgetCtrl = ({budget,remaining}) => {
    return (
       <>
        <div className="alert alert-primary">
            Budget: $ {budget}
        </div>
        <div className={checkBudget(budget,remaining)}>
            Remaining: $ {remaining}
        </div>
       </> 
    );
};

export default RemainingBudgetCtrl;