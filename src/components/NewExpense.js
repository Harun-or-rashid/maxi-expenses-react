import React from "react";
import './ExpenseForm';
import ExpenseForm from "./ExpenseForm";
import './ExpenseNew.css';

const NewExpense=()=>{
return(<div className="new-expense">
    <ExpenseForm></ExpenseForm>
</div>)
}
export default NewExpense;