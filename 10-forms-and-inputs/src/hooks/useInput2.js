import { useReducer } from "react";

const initialInputState = {
  value:'',
  isTouched: false
}

const inputStateReducer = (state, action) => {
  if(action.type === 'INPUT') {
    return ({value: action.value, isTouched:state.isTouched})
  }
  if(action.type === 'BLUR') {
    return ({value: state.value, isTouched:true})
  }
  if(action.type === 'RESET') {
    return ({value: '', isTouched:false})
  }
  return initialInputState
}

const useInput = (validateFunction) => {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

    const enteredValueIsValid = validateFunction(inputState.value);
    const hasError = !enteredValueIsValid && inputState.isTouched
    

    const onChangeHandler = (event) => {
        dispatch({type: 'INPUT', value: event.target.value})
      }
    
    const onBlurHandler = () => {
      dispatch({type: 'BLUR'})
      }
    
    const reset = () => {
      dispatch({type: 'RESET'})
    }
   

    return {
      value: inputState.value,
      isValid: enteredValueIsValid,
      hasError,
      onBlurHandler,
      onChangeHandler,
      reset
    }

}

export default useInput;