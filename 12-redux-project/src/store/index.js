import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice'
import authenticationSlice from './authSlice'
 
// const initialCounterState = {
//     counter: 0,
//     showCounter: false
// }


// const counterReducer = (state = initialState , action) => {
//     if(action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }

// const store = createStore(counterReducer)

//**************************** USING STATE SLICES    ********************************************* */







const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authenticationSlice.reducer}
})



export default store;

// const counterSubscriber = () => {
//     const latestState = store.getState();
//     console.log(latestState);
// }

// store.subscribe(counterSubscriber);

// store.dispatch({type: 'increment'})