import React, { useState } from 'react';
//import styled from 'styled-components'
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
import './CourseInput.css';

//*************************************************************************************************/
  //STYLE WITH STYLED COMPONENT
  //*************************************************************************************************/

  // const FormControl = styled.div`
  //   margin: 0.5rem 0;
  
  //  & label {
  //   font-weight: bold;
  //   display: block;
  //   margin-bottom: 0.5rem;
  //   color: ${props => props.invalid ? 'red' : 'black'}
  // }
  
  // & input {
  //   display: block;
  //   width: 100%;
  //   border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
  //   background: ${props => props.invalid ? '#fad0ec' : 'transparent'};
  //   font: inherit;
  //   line-height: 1.5rem;
  //   padding: 0 0.25rem;
  // }
  
  // & input:focus {
  //   outline: none;
  //   background: #fad0ec;
  //   border-color: #8b005d;
  // }
  //`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(enteredValue.trim().length > 0) {
      setIsValid(true);
      } 
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsValid(false); 
      return; }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
    
  };
  //*************************************************************************************************/
  //DYNAMIC INLINE STYLİNG
  //*************************************************************************************************/
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className="form-control">
  //       <label style={{color: isValid ? 'black' : 'red' }}>Course Goal</label>
  //       <input style={{backgroundColor: isValid ? 'transparent' : 'salmon' }} type="text" onChange={goalInputChangeHandler} value={enteredValue}/>
  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  //*************************************************************************************************/
  //SETTING CSS CLASSES DYNAMICALLY
  //*************************************************************************************************/
  
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className={`form-control ${!isValid ? 'invalid': ''}`}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} value={enteredValue}/>
  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  //*************************************************************************************************/
  //STYLE WITH STYLED COMPONENT
  //*************************************************************************************************/

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <FormControl  invalid={!isValid}> {/* STYLED COMPONENT */}
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} value={enteredValue}/>
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  //*************************************************************************************************/
  //STYLING WITH CSS MODULES
  //*************************************************************************************************/
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
