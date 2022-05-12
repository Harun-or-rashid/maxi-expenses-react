import { ReactDOM, useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import Expense from "./Expense";
import './ExpenseItem.css'
import './Card.css'
const ExpenseItem=(props)=>{
   const onchangeHandler=()=>{
       console.log("hello")
   }
   const [title,SetTitle]=useState(props.title)
   const titleHandler=()=>{
    SetTitle("ji");  
   }
return(
    <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
            <h2 onClick={titleHandler}>{title}</h2>
            <div className="expense-item__price">{props.amount}</div>
            <button className="expense-item__button" onClick={onchangeHandler}>Change</button>
        </div>
    </Card>
)
}
export default ExpenseItem