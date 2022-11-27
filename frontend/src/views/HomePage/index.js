import './index.css'
import React from 'react';
import Footer from "../../components/Footer";

let HomePage = () => {
  return (
    <>
      <div className='root'>
        <div className='welcome'>
          <h1 className='greeting'>  
            <img src="https://a.slack-edge.com/6c404/marketing/img/homepage/bold-existing-users/waving-hand.gif" alt="Hello"></img>
            <span>
              welcome back
            </span>
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;