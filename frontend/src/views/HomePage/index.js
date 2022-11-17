//import React, { useEffect, useState } from 'react';
import React from 'react';
import BaseLayout from '../../components/BaseLayout';

let HomePage = () => {
  return (
    <>
    <BaseLayout>
      <div>
        <h1>Home Page</h1>
      </div>
    </BaseLayout>
    </>
  );
};

export default React.memo(HomePage);