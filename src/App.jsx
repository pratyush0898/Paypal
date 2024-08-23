import React, { useState, useEffect } from "react";
import HomePage from "./Pages/Home/HomePage.jsx";
import Dashbord from "./Pages/DashBord/Dashbord.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setAmount(897);
  }, []);
  
  function Addamount(newamount) {
    setAmount(amount + newamount)
  } 

  function Login() {
    setUser(true);
    localStorage.setItem("user", true);
    console.log("Tryin' to login!");
  }

  function Logout() {
    setUser(false);
    localStorage.removeItem("user");
  }

  return (
    <>
      <NavBar amount={amount} Login={Login} Logout={Logout} user={user} />
      {user ? (
        <Dashbord amount={amount} Addamount={Addamount} user={user} />
      ) : (
        <HomePage amount={amount} Login={Login} Logout={Logout} user={user} />
      )}
    </>
  );
}

export default App;
