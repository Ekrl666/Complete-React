import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/AuthContext';
import {useHistory} from 'react-router-dom';

const ProfileForm = () => {

  const AuthCtx = useContext(AuthContext);
  const enteredPasswordRef = useRef()
  const history = useHistory();
 

  const onSubmitHandler = (event) => {
      event.preventDefault();
      const enteredPassword = enteredPasswordRef.current.value
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCzwTuQzl2vKYhx39HiBcJq4bmRjfxvl5A', {
        method: 'POST',
        body: JSON.stringify({
            idToken: AuthCtx.token,
            password: enteredPassword,
            returnSecureToken: false
        }),
        headers: {'content-type': 'application/json'}
      }).then(res => {
          history.replace('/')
      })
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={enteredPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
