import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm=(props)=>{
const [enteredTitle,setTitle]=useState('');
const [enteredAmount,setAmount]=useState('');
const [enteredDate,setDate]=useState('');

const titleChangedHandler=(event)=>{
    setTitle(event.target.value)
    // console.log(event)
}
const amountChangedHandler=(event)=>{
setAmount(event.target.value)
}
const dateChangedHandler=(event)=>{
    setDate(event.target.value)
} 
const submitHandler=(event)=>{
    event.preventDefault()
    const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
    };
    console.log(expenseData)
    // props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
}


    return <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={titleChangedHandler}  type="text"  />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={amountChangedHandler}  type="number" min="0.01" step="0.01"  />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={dateChangedHandler}  type="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
            </div>
    </form>
    
}
export default ExpenseForm;