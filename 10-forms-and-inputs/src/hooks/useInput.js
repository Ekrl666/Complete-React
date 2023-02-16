import { useState } from "react";

const useInput = (validateFunction) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [inputIsTouched, setInputIsTouched] = useState(false);

    const enteredValueIsValid = validateFunction(enteredValue);
    const hasError = !enteredValueIsValid && inputIsTouched
    

    const onChangeHandler = (event) => {
        setEnteredValue(event.target.value)
      }
    
    const onBlurHandler = () => {
        setInputIsTouched(true)
      }
    
    const reset = () => {
      setEnteredValue('')
      setInputIsTouched('')
    }
   

    return {
      value: enteredValue,
      isValid: enteredValueIsValid,
      hasError,
      onBlurHandler,
      onChangeHandler,
      reset
    }

}

export default useInput;