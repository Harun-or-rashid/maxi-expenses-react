import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm=()=>{
const [title,setTitle]=useState('');
const [amount,setAmount]=useState('');
const [date,setDate]=useState('');

const titleChangedHandler=(event)=>{
    setTitle(event.target.value)
    console.log(event)
}
const amountChangedHandler=(event)=>{
setAmount(event.target.value)
}
const dateChangedHandler=(event)=>{
    setDate(event.target.value)
}
    return <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={titleChangedHandler} type="text" ></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={amountChangedHandler} type="number" min="0.01" step="0.01" ></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={dateChangedHandler} type="date" min="2019-01-01" max="2022-12-31" ></input>
                </div>
            </div>
            <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
            </div>
    </form>
    
}
export default ExpenseForm;