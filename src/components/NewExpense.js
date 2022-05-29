import React from "react";
import './ExpenseForm';
import ExpenseForm from "./ExpenseForm.js";
import './ExpenseNew.css';

const NewExpense=()=>{
const  saveExpenseDataHandler=(setExpenseData)=>{
    const expenseData={
        ...setExpenseData,
        id:Math.random().toString()
    }
    console.log(expenseData)

}
return(<div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
</div>)
}
export default NewExpense;