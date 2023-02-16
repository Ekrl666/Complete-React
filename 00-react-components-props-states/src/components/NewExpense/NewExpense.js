import {useState} from "react";
import NewExpenseForm from './NewExpenseForm';
import AddNewExpenseBar from "./AddNewExpenseBar";
import './NewExpense.css';

function NewExpense(props) {
    const[addExpenseChecker,  setAddExpenseChecker] = useState(false);

   const saveNewExpenseHandler = (enteredExpense) => {
        const newExpenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        }
        props.addNewExpense(newExpenseData);
    }
    
    const AddExpenseHandler = ( ) => {
        setAddExpenseChecker(!addExpenseChecker);
    }
    
    if(addExpenseChecker) {
        return ( 
            <div className='new-expense'>
                <NewExpenseForm addExpense={AddExpenseHandler} saveNewExpense={saveNewExpenseHandler}/>
            </div>
         );
    } else {

        return ( 
            <div className='new-expense'>
                <AddNewExpenseBar addExpense={AddExpenseHandler} />
            </div>
         );
    }

    
}

export default NewExpense;