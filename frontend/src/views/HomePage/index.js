import './index.css'
import React from 'react';

let HomePage = () => {
  return (
    <>
      <div className='root'>
        <div className='welcome'>
          <h1 className='greeting'>  
            <img src="https://a.slack-edge.com/6c404/marketing/img/homepage/bold-existing-users/waving-hand.gif"></img>
            <span>
              welcome back
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;