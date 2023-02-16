import { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputText = inputRef.current!.value;
    if (inputText.trim().length === 0) {
      return;
    }
    props.onAddTodo(inputText);
  };
  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <label htmlFor="inputText">Input Todo</label>
      <input type="text" id="inputText" ref={inputRef} />
      <button>Add Todo </button>
    </form>
  );
};

export default NewTodo;
