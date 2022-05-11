import React from "react";
import Card from "./Card";
import './ExpenseItem.css'
function Expense(props) {

    return(
        <Card className="expenses">
        <ExpenseItem 
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
        ></ExpenseItem>
        <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
        ></ExpenseItem>
        <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
        ></ExpenseItem>
  
      </Card>

    )
}
export default Expense;