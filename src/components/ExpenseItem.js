import { ReactDOM } from "react";
import './ExpenseItem.css'
const ExpenseItem=()=>{
return(
    <div className="expense-item">
        <div>May 10th 2022</div>
        <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div className="expense-item__price">120.44$</div>
        </div>
    </div>
)
}
export default ExpenseItem