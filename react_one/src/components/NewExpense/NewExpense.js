import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const setExpeseDataHandler=(expenseData)=>{
        const expectedExpenseData ={
            ...expenseData,
            id: Math.random().toString()
        };
        props.newExpenseData(expectedExpenseData);
    }
    return ( <div className='new-expense'>
        <ExpenseForm formData={setExpeseDataHandler}/>
    </div> );
}
 
export default NewExpense;