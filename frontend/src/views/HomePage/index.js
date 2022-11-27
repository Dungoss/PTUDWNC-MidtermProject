import './index.css'
import React from 'react';
import Footer from "../../components/Footer";
import HomeTheme from "../../components/HomeTheme";
import Groups from "../../components/Groups";

let HomePage = () => {
  return (
    <>
      <HomeTheme />
      <Groups />
      <Footer />
    </>
  );
};

export default HomePage;