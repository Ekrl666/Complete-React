import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/Todo';

function App() {
  const[todoList, setTodoList] = useState<Todo[]>([])

  const onAddHandler = (inputText: string) => {
    const newTodo = new Todo(inputText)
    setTodoList([...todoList, newTodo])
  }
  return (
    <div>
      <NewTodo onAddTodo={onAddHandler}/>
     <Todos items = {todoList} />
    </div>
  );
}

export default App;
