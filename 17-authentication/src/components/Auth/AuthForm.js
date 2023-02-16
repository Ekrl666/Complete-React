import { useContext, useRef, useState } from 'react';
import AuthContext from '../../store/AuthContext';
import { useHistory } from 'react-router-dom';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const AuthCtx = useContext(AuthContext)
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    let url = ''
   if(isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCzwTuQzl2vKYhx39HiBcJq4bmRjfxvl5A'
   } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCzwTuQzl2vKYhx39HiBcJq4bmRjfxvl5A'
   }
    fetch(url,
    {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: { 'Content-Type': 'application/json' }
    }
    ).then(res => {
      setIsLoading(false)
      if(res.ok) {
        return res.json()
      } else {
        res.json().then(data => {
          let errorMessage = 'Authentication Failed!'
          throw new Error(errorMessage);
        })
      }
    }).then((data) => {
      const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));

      AuthCtx.login(data.idToken, expirationTime.toISOString())
      history.replace('/');
    }).catch((err) => {
      alert(err.message)
    }) 
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef}/>
        </div>
        <div className={classes.actions}>
          {!isloading ? <button>{isLogin ? 'Login' : 'Create Account'}</button> : <p>Sending...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
