import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';
import {Route, Routes} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element = {<Profile />} />
    </Routes>
    </>
  )
}

export default App
