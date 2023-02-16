
import "./AddNewExpenseBar.css";


function AddNewExpenseBar(props) {

    const addNewExpenseHandler = () => {
      props.addExpense()
    }

  return (
    
      <div className="new-expense__actions">
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      </div>
    
  );
}

export default AddNewExpenseBar;
