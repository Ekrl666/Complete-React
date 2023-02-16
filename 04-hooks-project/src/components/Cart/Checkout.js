
import useInput from '../../hooks/useInput';
import classes from './Checkout.module.css';


const validateName = (name) => {
  return name.trim() !== '';
}
const validatePostalCode = (postalCode) => {
  return postalCode.trim().length === 6;
}
const Checkout = (props) => {

  const {value: enteredName, isValid:nameIsValid, hasError: nameHasError, onChangeHandler: onNameChangeHandler, onBlurHandler: onNameBlurHandler, reset: resetName} = useInput(validateName)
  const {value: enteredStreet, isValid:streetIsValid, hasError: streetHasError, onChangeHandler: onStreetChangeHandler, onBlurHandler: onStreetBlurHandler, reset: resetStreet} = useInput(validateName)
  const {value: enteredPostalCode, isValid:postalCodeIsValid, hasError: postalCodeHasError, onChangeHandler: onPostalCodeChangeHandler, onBlurHandler: onPostalCodeBlurHandler, reset: resetPostalCode} = useInput(validatePostalCode)
  const {value: enteredCity, isValid:cityIsValid, hasError: cityHasError, onChangeHandler: onCityChangeHandler, onBlurHandler: onCityBlurHandler, reset: resetCity} = useInput(validateName)

  

  const confirmHandler = (event) => {
    event.preventDefault();
    if(!nameIsValid || !streetIsValid || !postalCodeIsValid || !cityIsValid) {
      return
    }
    props.onConfirm({
      name: enteredName,
      sttreet: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity
    })
    console.log(enteredName, enteredStreet, enteredPostalCode, enteredCity)
    resetName()
    resetStreet()
    resetPostalCode()
    resetCity()
  };

  const nameClass = `${classes.control} ${nameHasError && classes.invalid}`
  const streetClass = `${classes.control} ${streetHasError && classes.invalid}`
  const postalCodeClass = `${classes.control} ${postalCodeHasError && classes.invalid}`
  const cityClass = `${classes.control} ${cityHasError && classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={onNameChangeHandler} onBlur={onNameBlurHandler}/>
        {nameHasError && <p>Please Enter a valid name</p>}
      </div>
      <div className={streetClass}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' value={enteredStreet} onChange={onStreetChangeHandler} onBlur={onStreetBlurHandler} />
        {streetHasError && <p>Please Enter a valid name</p>}
      </div>
      <div className={postalCodeClass}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal'  value={enteredPostalCode} onChange={onPostalCodeChangeHandler} onBlur={onPostalCodeBlurHandler} />
        {postalCodeHasError && <p>Please Enter a valid name</p>}
      </div>
      <div className={cityClass}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city'  value={enteredCity} onChange={onCityChangeHandler} onBlur={onCityBlurHandler}/>
        {cityHasError && <p>Please Enter a valid name</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;