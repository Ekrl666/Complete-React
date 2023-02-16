import classes from './Counter.module.css';
import { counterActions } from '../store/counterSlice';
import { useDispatch, useSelector } from 'react-redux';


const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()

  // const toggleCounterHandler = () => {
  //   dispatch({type: 'toggle'})
  // };

  // const incrementHandler = () => {
  //   dispatch({type: 'increment'})
  // };
  // const increaseHandler = () => {
  //   dispatch({type: 'increase', amount: 5})
  // };
  // const decrementHandler = () => {
  //    dispatch({type: 'decrement'})
  //   };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  };
  const decrementHandler = () => {
     dispatch(counterActions.decrement())
    };
   
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>İncrement</button>
        <button onClick={increaseHandler}>İncrease by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
