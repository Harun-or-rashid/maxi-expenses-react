import React from "react";
import Card from "./Card";
import './Expense.css'
import ExpenseItem from "./ExpenseItem";
import './ExpenseItem.css'

const Expense=(props) =>{

    return(
        <Card className="expenses">
      
  <div>{props.items.map(
    expenses=>(<ExpenseItem 
      title={expenses.title} 
      amount={expenses.amount} 
      date={expenses.date}                     
    />))}</div>
      </Card>

    )
}
export default Expense;