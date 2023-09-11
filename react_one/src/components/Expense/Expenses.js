import {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../Card/Card';
import './Expenses.css';
import FilterYear from '../FilterTab/FilterYear';
const Expenses = (props) => {

    const [expensesItem, setExpensesItem] = useState(props.items);
  
    const filterChangeHandler = (year) => {
      if(year === "Year") {
        setExpensesItem(props.items);
      } else{
        const yearExpenses = props.items.filter((item) => item?.date.getFullYear() == year);
        setExpensesItem(yearExpenses);
      }
    };
  
    return (
      <div>
        <Card className='expenses'>
          <FilterYear onChangeFilter={filterChangeHandler} />
          {
            expensesItem.map((item, i) => {
              return (
              <ExpenseItem
                key={i}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
              )
            })
          }
        </Card>
      </div>
    );
  };
  
 
export default Expenses;