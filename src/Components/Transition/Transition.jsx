import React from "react";
import Bill from "/Bill.svg";
import "./Transition.css";

const Transition = () => {
  return (
    <div className="transition-wapper">
      <div className="transition">
        <div className="text">
          <h1>Making transitions easy</h1>
        </div>
        <div className="shortcut-wapper">
          <div className="row-1">
            <div className="shortcut">
              <img src={Bill} />
              <span>Scan QR code</span>
            </div>
            <div className="shortcut">
              <img src={Bill}/>
              <span>Pay Contact</span>
            </div>  
            <div className="shortcut">
              <img src={Bill}/>
              <span>Pay Phone number</span>
            </div>
            <div className="shortcut">
              <img src={Bill}/>
              <span>Bank transfer</span>
            </div>
          </div>
          <div className="row-2">
            <div className="shortcut">
              <img src={Bill}/>
              <span>Payments</span>
            </div>
            <div className="shortcut">
              <img src={Bill}/>
              <span>Pay UPI id</span>
            </div>
            <div className="shortcut">
              <img src={Bill}/>
              <span>Self transfer</span>
            </div>
            <div className="shortcut">
              <img src={Bill}/>
              <span>Pay bills</span>
            </div>
            
            <div className="shortcut">
              <img src={Bill}/>
              <span>Mobile recharge</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transition;
