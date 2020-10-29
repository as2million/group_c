import React, { useState, useEffect } from 'react';
// import BreadCrumb from '../Components/JessBreadCrumb/BreadCrumb'
import JessHeader from '../Components/JessHeader/JessHeader';
import JessListA from '../Components/JessListA/JessListA';
import JessListB from '../Components/JessListB/JessListB';
import JessListC from '../Components/JessListC/JessListC';
import JessListD from '../Components/JessListD/JessListD';

function JessBento() {
  return (
    <>
      {/* <BreadCrumb /> */}
      <JessHeader />
      <JessListA />
      <JessListB />
      <JessListC />
      <JessListD />
    </>
  );
}

export default JessBento;
