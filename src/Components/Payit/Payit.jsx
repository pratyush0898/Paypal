import React from "react";
import Pays from '/payit.png'
import "./Payit.css";

const Payit = () => {
  return (
    <div className="payit">
      <div className="image">
        <img src={Pays} alt="" />
      </div>
      <div className="text">
        <h1>Pay it the way you want</h1>
        <p>
          Link all your credit and debit cards and choose which one to use at
          checkout. Shopping online has never been this easy.
        </p>
        <button>Link your preferred card</button>
      </div>
    </div>
  );
};

export default Payit;
