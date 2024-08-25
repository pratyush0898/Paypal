import React, { useState } from "react";
import Logo from "/text-paypal.svg";
import User from "/user.png";
import LogoutIco from '/Logout.svg';
import "./NavBar.css";

const NavBar = ({ user, Login, Logout, amount }) => {
  const [hidem, sethidem] = useState(true);

  function togglehidem() {
    sethidem(!hidem);
  }

  if (!user) {
    return (
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="login">
          <button onClick={Login}>Login</button>
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="account">
          <div
            onClick={togglehidem}
            style={{ padding: "12px 24px" }}
            className="amount"
          >
            <h3>{hidem ? "$$$" : `$${amount}`}</h3>
          </div>
          <div className="user">
            <div className="logo">
              <img src={User} alt="User" />
            </div>
            <div
              onClick={Logout}
              className="logout"
            >
              <img src={LogoutIco} alt="Logout Icon" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default NavBar;
