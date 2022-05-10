import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expense=[
    { 
    id:'ex1',
    title:'Bike insurance',
    amount:'129.2',
    date: new Date(2022,2,2)
   },
    { id:'ex2',title:'House Rent',amount:'129.2',date: new Date(2022,2,2) },
    { id:'ex3',title:'Snacks Bill',amount:'877.2',date: new Date(2022,2,2) }

  ];
  return (
    <div className="App">
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
      {/* <ExpenseItem></ExpenseItem> */}

    </div>
  );
}

export default App;
