import React, { useState, useEffect } from 'react';
import HomePage from './Pages/Home/HomePage.jsx';
import Dashbord from './Pages/DashBord/Dashbord.jsx';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [user, setuser] = useState(false);

  // Set amount on component mount
  useEffect(() => {
    setAmount(897);
  }, []); // Empty dependency array ensures this only runs once

  function Login() {
    setuser(true);
  }

  if (!user) {
    return <HomePage user={user} />;
  } else {
    return <Dashbord user={user} amount={amount} />;
  }
}

export default App;

