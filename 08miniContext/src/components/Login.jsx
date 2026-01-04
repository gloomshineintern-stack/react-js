import UserContext from '../Context/UserContext';
import React, {useContext, useState} from 'react';

export default function Login() {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const {setUser} = useContext(UserContext);

  const handleSubmit =(e) => {
    e.preventDefault();
    setUser({username, password})
  }

  return(
    <div>
      <input type="text"
      onChange = {(e) => setUsername(e.target.value)}
      value={username}
      placeholder = 'Username'/>

      <input type= "password"
      onChange = {(e) => setPassword(e.target.value)}
      value={password}
      placeholder="password"/>

      <button onClick={handleSubmit}>Login
      </button>
    </div>
  )
}


