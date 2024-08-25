import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./HomePage.css";
import Welcome from "../../Components/Welcome/Welcome";
import Loved from "../../Components/Loved/Loved";

const HomePage = ({ Login }) => {
  return (
    <>
      <div className="navgap"></div>
      <Welcome Login={Login} />
      <Loved />
      <Footer />
    </>
  );
};

export default HomePage;
