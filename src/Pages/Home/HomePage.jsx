import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./HomePage.css";
import Welcome from "../../Components/Welcome/Welcome";

const HomePage = ({ Login }) => {
  return (
    <>
      <div className="navgap"></div>
      <Welcome Login={Login} />
      <Footer />
    </>
  );
};

export default HomePage;
