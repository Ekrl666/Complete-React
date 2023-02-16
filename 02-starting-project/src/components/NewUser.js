import styles from './NewUser.module.css';
import { useState } from 'react';
import Card from '../components/UI/Card';


const NewUser = (props) => {

    const [enteredUser , setEnteredUser] = useState({
        name: '',
        age:''
    })
    

    function addUserHandler(event) {

        event.preventDefault();
        props.addUser(enteredUser);
        setEnteredUser({name: '', age: ''})
    }

    function nameChangeHandler(event) {
       
            setEnteredUser((prevState) => {
                return {...prevState, name:event.target.value}
            })
            
        }
        
    

    function ageChangeHandler(event) {
        
            setEnteredUser((prevState) => {
                return {...prevState, age:event.target.value}
           
        })
        
        
    } 

    


    return (
        
        <Card className={styles.newUser}>
        <form action='' onSubmit={addUserHandler} >
            <label>User Name</label>
            <input onChange={nameChangeHandler} value={enteredUser.name} type='text'></input>
            <label>Age (Years)</label>
            <input onChange={ageChangeHandler} value={enteredUser.age} type='number'></input>
            <button type='submit' className={styles.newUser}>New User</button>
        </form>
        </Card>
        
    )
};

export default NewUser;