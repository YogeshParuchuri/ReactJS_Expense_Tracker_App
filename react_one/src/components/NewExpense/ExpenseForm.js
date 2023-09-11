import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    const[enteredTitle, setEnteredTitle]= useState('');
    const[enteredDate, setEnteredDate]=useState('');
    const[enteredAmount, setEnteredAmount]= useState('');
    const changeTitle = (event) =>{
        setEnteredTitle(event.target.value);
    }
    const  changeAmount= (event) => {
       setEnteredAmount(event.target.value);
    }
     const changeDate =(event)=>{
        setEnteredDate(event.target.value);
     }
     const formSubmitHandler= (event)=>{
        event.preventDefault();
        const ExpenseData={
                title: enteredTitle,
                date: new Date(enteredDate),
                amount: enteredAmount
        };
        props.formData(ExpenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
     }
   
        return (
        <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="Text" value={enteredTitle} placeholder='Enter Title' onChange={changeTitle}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={changeDate}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min='0.01' step='0.01' placeholder='$' onChange={changeAmount}></input>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>
                    Add Expense
                </button>
            </div>
        </div>
    </form>);
}

export default ExpenseForm;