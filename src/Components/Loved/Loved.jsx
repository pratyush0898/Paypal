import React from "react";
import World from '/world.png'
import "./Loved.css";

const Loved = () => {
  return (
    <div className="loved">
      <div className="text">
        <h1>World's Most Loved Payments App</h1>
        <p>
          Recharge & pay bills, book flights & movie tickets, invest in stocks &
          mutual funds, and do a lot more.
        </p>
        <button>Singup now</button>
      </div>
      <div className="image">
        <img src={World} alt="" />
      </div>
    </div>
  );
};

export default Loved;
