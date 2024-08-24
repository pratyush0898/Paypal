import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import "./HomePage.css";
import Welcome from "../../Components/Welcome/Welcome";

const HomePage = () => {
  return (
    <>
      <div className="navgap"></div>
      <Welcome />
      <Footer />
    </>
  );
};

export default HomePage;
