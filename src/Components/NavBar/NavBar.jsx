import React, { useState } from "react";
import Logo from "/text-paypal.svg";
import User from "/user.png";
import LogoutIco from '/Logout.svg'
import "./NavBar.css";

const NavBar = ({ user, Login, amount, Logout }) => {
  if (!user) {
    return (
      <header>
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="login">
          <button onClick={Login}>Login</button>
        </div>
      </header>
    );
  } else {
    const [hidem, sethidem] = useState(true);
    function togglehidem() {
      sethidem(!hidem);
    }
    if (hidem) {
      return (
        <header>
          <div className="logo">
            <img src={Logo} />
          </div>
          <div className="account">
            <div
              onClick={togglehidem}
              style={{ padding: "12px 24px" }}
              className="amount"
            >
              <h3>$$$</h3>
            </div>
            <div className="user">
              <div className="logo">
                <img src={User} alt="" />
              </div>
              <div className="logout">
                <button onClick={Logout}>
                  <img src={LogoutIco} alt="" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      );
    } else {
      return (
        <header>
          <div className="logo">
            <img src={Logo} />
          </div>
          <div className="account">
            <div
              onClick={togglehidem}
              style={{ padding: "12px 18px" }}
              className="amount"
            >
              <h3>${amount}</h3>
            </div>
            <div className="user">
              <div className="logo">
                <img src={User} alt="" />
              </div>
              <div className="logout" onClick={Logout}>
                  <img src={LogoutIco}/>
                  <span>Logout</span>
              </div>
            </div>
          </div>
        </header>
      );
    }
  }
};

export default NavBar;
