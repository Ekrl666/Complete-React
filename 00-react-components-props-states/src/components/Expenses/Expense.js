import {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesChart from "../Chart/ExpensesChart";

function Expense(props) {
  
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterExpense = (selectedYear) => {
    //console.log(expenses.filter(exp => exp.date === '2021'))
    console.log(selectedYear);
    setFilteredYear(selectedYear);
    
  }

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);
  let expensesContent = <p>No Such Expense Found!!!</p>

  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense =>
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />)
      }

  return (
    <div>
      <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesFilter selected={filteredYear} filter={filterExpense}/>
      {expensesContent}
        
      </Card>
    </div>
    
  );
  
}

// function Expense(props) {
//   const expenses = props.expenses;

//   const expenseItems = expenses.map(expense => {
//     return (
//       <ExpenseItem
//           title={expense.title}
//           amount={expense.amount}
//           date={expense.date}
//           key={expense.id}
//         />
//     )
//   })

//   return (
//     <div className="expenses">
//       {expenseItems}
//     </div>
//   );
// }
export default Expense;
