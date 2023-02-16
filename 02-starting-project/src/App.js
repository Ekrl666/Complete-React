import React from 'react';
import NewUser from './components/NewUser';
import UserList from './components/UserList';
import { useState } from 'react';
import ErrorModal from './components/UI/ErrorModal';
import Wrapper from './components/Helpers/Wrapper';



function App() {
  
  const [users, setUsers] = useState([
   
  ]);

  const [error, setError] = useState();


  function addUser(user) {
    if(user.name.trim().length === 0 || !(/[^\d]/.test(user.name))) {
      setError({
        title:'Invalid Name',
        message:'Please enter a valid name'
      });
      return;
    }

    if(user.age.trim().length === 0 || (/[^\d]/.test(user.age))) {
      setError({
        title:'Invalid Age',
        message:'Please enter a valid age'
      });
      return;
    }

    setUsers((prevState) => {
      return [...prevState, {...user, id:Math.random()}];
    });
    
  }

  const errorAbortHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} errorAbort={errorAbortHandler}/>}
        <NewUser addUser={addUser} />
        <UserList users={users} />
    </Wrapper>
  );
}

export default App;
