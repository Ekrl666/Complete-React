
import useInput from '../hooks/useInput';

const validateName = (name) => {
  return name.trim() !== '';
}
const validateEmail = (email) => {
  const mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return (mailformat.test(email))
}
const SimpleInput = (props) => {


  const {value: enteredName, isValid: nameIsValid, hasError: nameInputHasError, onChangeHandler, onBlurHandler, reset: resetName} = useInput(validateName)
  const {value: enteredEmail, isValid: emailIsValid,  hasError: emailInputHasError, onChangeHandler: emailOnChangeHandler, onBlurHandler: emailOnBlurHandler, reset: resetEmail} = useInput(validateEmail)

 
  let formIsValid = false

    if(nameIsValid && emailIsValid) {
      formIsValid = true
    }

    const onSubmitHandler = event => {
      event.preventDefault()
      if(!nameIsValid || !emailIsValid){
        return
      }
      console.log('Submitted!',enteredName, enteredEmail )
      resetName()
      resetEmail()
  }

    
    
  
  
  const invalidNameClass = !nameInputHasError ? 'form-control' : 'form-control invalid'
  const invalidAgeClass = !emailInputHasError ? 'form-control' : 'form-control invalid'



  return (
    <form onSubmit={onSubmitHandler}>
      <div className={invalidNameClass}>
        <label htmlFor='name'>Your Name</label>
        <input value = {enteredName} onChange={onChangeHandler} onBlur={onBlurHandler} type='text' id='name' />
        {nameInputHasError && <p>Name must not be empty</p>}
      </div>
      <div className={invalidAgeClass}>
        <label htmlFor='email'>E-Mail</label>
        <input value = {enteredEmail} onChange={emailOnChangeHandler} onBlur={emailOnBlurHandler} type='text' id='email' />
        {emailInputHasError && <p>email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled = {!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
