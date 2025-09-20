import React, {useState, useContect} from 'react'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {}
  return (
    <div>
        <h2>Login</h2>
        <input type = 'text' value= {username} placeholder= 'username'/>
        <input type = 'password' placeholder= 'password'/>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login