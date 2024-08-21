import React from "react";
import "./Bills.css";

const Bills = ({ Addamount }) => {
  return (
    <div className="Bills">
      <div className="amount">
        <h1>
          Add $$$
        </h1>
      </div>
      <div className="adds">
        <button className="add" onClick={() => {Addamount(10)}}>$10</button>
        <button className="add" onClick={() => {Addamount(50)}}>$50</button>
        <button className="add" onClick={() => {Addamount(100)}}>$100</button>
        <button className="add" onClick={() => {Addamount(500)}}>$500</button>
        <button className="add" onClick={() => {Addamount(1000)}}>$1000</button>
      </div>
    </div>
  );
};

export default Bills;
