import React, { useState, useEffect } from 'react';
// import BreadCrumb from '../Components/JessBreadCrumb/BreadCrumb'
import JessVegHeader from '../Components/JessVegAHeader/JessVegHeader';
import JessVegB from '../Components/JessVegB/JessVegB';
import JessVegC from '../Components/JessVegC/JessVegC';
import JessVegD from '../Components/JessVegD/JessVegD';
import JessVegE from '../Components/JessVegE/JessVegE';

function JessVegBox() {
  return (
    <>
      <JessVegHeader />
      <JessVegB />
      <JessVegC />
      <JessVegD />
      <JessVegE />
    </>
  );
}

export default JessVegBox;
