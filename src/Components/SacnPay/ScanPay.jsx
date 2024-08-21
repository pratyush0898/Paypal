import React from "react";
import ScanPayIMG from "/ScanPay.png";
import "./ScanPay.css";

const ScanPay = () => {
  return (
    <div className="ScanPay">
      <div className="img">
        <img src={ScanPayIMG} alt="" />
      </div>
      <div className="content">
        <div className="head">
          <h1>Scan To Pay</h1>
        </div>
        <br />
        <div className="para">
          <p>
            Effortlessly complete transactions by scanning secure QR codes,
            ensuring fast and reliable payments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScanPay;
