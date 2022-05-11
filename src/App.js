import logo from './logo.svg';
import './App.css';
import './components/ExpenseItem.css'
import ExpenseItem from './components/ExpenseItem';
import Card from './components/Card';

function App() {
  const expense=[
    { 
    id:'ex1',
    title:'Bike insurance',
    amount:'129.2',
    date: new Date(2022,2,23)
   },
    { 
    id:'ex2',
    title:'House Rent',
    amount:'129.2',
    date: new Date(2022,2,20) 
  },
  { 
    id:'ex3',
    title:'Snacks Bill',
    amount:'877.2',
    date: new Date(2022,2,21) 
  }

  ];
  return (
   
  );
}

export default App;
