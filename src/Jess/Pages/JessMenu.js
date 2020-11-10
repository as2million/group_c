import React, { useState, useEffect } from 'react'
import VNavbar from 'Share/Components/VNavbar/VNavbar'
import JessMenuA from '../Components/JessMenuA/JessMenuA'
import JessMenuB from '../Components/JessMenuB/JessMenuB'
import JessMenuC from '../Components/JessMenuC/JessMenuC'
import JessMenuD from '../Components/JessMenuD/JessMenuD'

function JessMenu() {
  return (
    <>
      <VNavbar />
      <JessMenuA />
      <JessMenuB />
      <JessMenuC />
      <JessMenuD />
    </>
  )
}

export default JessMenu
