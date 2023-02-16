import {useState} from 'react';
import "./NewExpenseForm.css";


function NewExpenseForm(props) {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

    // const titleChangeHandler = (event) => {
    //   setUserInput((previousState) => {
    //     return {...previousState, title: event.target.value }
    //   })
    // }
    // const amountChangeHandler = (event) => {
    //   setUserInput((previousState) => {
    //     return {...previousState, amount: event.target.value }
    //   })
    // }
    // const dateChangeHandler = (event) => {
    //   setUserInput((previousState) => {
    //     return {...previousState, date: event.target.value }
    //   })
    // }
    const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
      }
      props.saveNewExpense(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('')
      props.addExpense()
    }

    const cancelHandler = () => {
      props.addExpense()
    }

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
