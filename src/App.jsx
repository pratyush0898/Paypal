import React, { useState } from 'react'
import HomePage from './Pages/Home/HomePage.jsx'
import Dashbord from './Pages/DashBord/Dashbord.jsx'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  setAmount(897)
  const [user, setuser] = useState(false)
  function Login() {
    setuser(true)
  }

  if (!user) {
    return <HomePage user={user} />
  } else {
    return <Dashbord amount={amount} />
  }
}

export default App
