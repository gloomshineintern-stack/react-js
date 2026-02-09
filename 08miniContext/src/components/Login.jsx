import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../Context/UserContext'
import {useNavigate} from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { setUser } = useContext(UserContext)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password }
    setUser(userData)

    localStorage.setItem("user", JSON.stringify(userData))

    setUsername("")
    setPassword("")

    navigate("/profile")
  }


  return (
    <div className="bg-white flex h-screen items-center justify-center">
      <div className="w-1/2 h-screen p-20">
        <div className="border-transparent shadow-lg rounded-lg p-10">
          <h1 className="text-4xl text-[#3B3B3B] text-center pt-10">Create Your Account</h1>
          <p className="text-[#5E5E5E] text-center p-2">Let's get started</p>
          <form >
            <label 
            htmlFor="username" 
            className="text-xl text-[#3B3B3B] pb-2 block">
              Username:
            </label>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="p-2 border border-[#5E5E5E] rounded-xl w-full block mb-5"
            />

            <label 
            htmlFor="password"
            className="text-xl text-[#3B3B3B] pb-2 block">
             Password:
            </label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="p-2 border border-[#5E5E5E] rounded-xl w-full block mb-5"
            />
            <button 
            className="bg-[#3B3B3B] text-white w-full p-3 mt-10 rounded-xl"
            onClick={handleSubmit}>Create Account</button>
          </form>
        </div>
      </div>

      <div className="w-1/2 h-screen p-10">
        <img src="https://i.pinimg.com/736x/30/fd/8f/30fd8f8b3f807bee886db5db701e0d03.jpg" alt="Login Image" className="w-full h-full overflow-hidden rounded-lg" />
      </div>
    </div>
  )
}

export default Login




