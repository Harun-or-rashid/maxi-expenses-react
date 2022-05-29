import React from "react";
import './ExpenseForm';
import ExpenseForm from "./ExpenseForm";
import './ExpenseNew.css';

const NewExpense=()=>{
const  saveExpenseDataHandler=(setExpenseData)=>{
    const expenseData={
        ...expenseData,
        id:Math.random.toString(expenseData)
    }
}
return(<div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
</div>)
}
export default NewExpense;