import useInput from "../hooks/useInput2";

const validateName = (name) => {
  return name.trim() !== '';
}

const validateEmail = (email) => {
  const mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return (mailformat.test(email))
}

const BasicForm = (props) => {


  const {value: enteredName, isValid: nameIsValid, hasError: nameHasError, onChangeHandler: onNameChangeHandler, onBlurHandler: onNameBlurHandler, reset: resetName} = useInput(validateName)
  const {value: enteredLastName, isValid: lastNameIsValid, hasError: lastNameHasError, onChangeHandler: onLastNameChangeHandler, onBlurHandler: onLastNameBlurHandler, reset: resetLastName} = useInput(validateName)
  const {value: enteredEmail, isValid: emailIsValid, hasError:emailHasError, onChangeHandler: onEmailChangeHandler, onBlurHandler: onEmailBlurHandler, reset: resetEmail} = useInput(validateEmail)

  let formIsValid = false

    if(nameIsValid && lastNameIsValid && emailIsValid) {
      formIsValid = true
    }

  const onSubmitHandler = event => {
    event.preventDefault()
    if(!nameIsValid || !lastNameIsValid || !emailIsValid ) {
      return
    }
    console.log('Submitted!',enteredName, enteredLastName, enteredEmail);
    resetName();
    resetLastName();
    resetEmail();
  }

  const invalidNameClass = !nameHasError ? 'form-control' : 'form-control invalid'
  const invalidLastNameClass = !lastNameHasError ? 'form-control' : 'form-control invalid'
  const invalidEmailClass = !emailHasError ? 'form-control' : 'form-control invalid'
  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={invalidNameClass}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredName} onChange={onNameChangeHandler} onBlur={onNameBlurHandler} />
        </div>
        <div className={invalidLastNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'  value={enteredLastName} onChange={onLastNameChangeHandler} onBlur={onLastNameBlurHandler} />
        </div>
      </div>
      <div className={invalidEmailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value= {enteredEmail} onChange={onEmailChangeHandler} onBlur={onEmailBlurHandler}/>
      </div>
      <div className='form-actions'>
        <button disabled= {!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
