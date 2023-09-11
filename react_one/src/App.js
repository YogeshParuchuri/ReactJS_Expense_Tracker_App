import './App.css';
import Card from './components/Card/Card';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expense/Expenses';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2',
     title: 'New TV', 
     amount: 799.49, 
     date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 5, 12),
    },
    { id: 'e2',
     title: 'New TV', 
     amount: 799.49, 
     date: new Date(2019, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
  ];
  const Expensehandler=(fromExpenseData)=>{
    const ExpenseData ={
      ...fromExpenseData,
      id: Math.random().toString()

    };
    console.log("inside APP!");
    console.log(ExpenseData);
  }
  return (
    <div>
    <NewExpense newExpenseData={Expensehandler}/>
    <Card>
        <Expenses items={expenses}/>
    </Card>
    </div>
  );
}

export default App;
