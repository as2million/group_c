import React, { useState, useEffect } from 'react'
// import BreadCrumb from '../Components/JessBreadCrumb/BreadCrumb'
import VNavbar from 'Share/Components/VNavbar/VNavbar'
import JessVegHeader from '../Components/JessVegAHeader/JessVegHeader'
import JessVegB from '../Components/JessVegB/JessVegB'
import JessVegC from '../Components/JessVegC/JessVegC'
import JessVegD from '../Components/JessVegD/JessVegD'
import JessVegE from '../Components/JessVegE/JessVegE'
import ToTop from 'Share/Components/ToTopButton/ScrollButtonGreen'

function JessVegBox() {
  return (
    <>
      <VNavbar />
      <JessVegHeader />
      <JessVegB />
      <JessVegC />
      <JessVegD />
      <JessVegE />
      <ToTop />
    </>
  )
}

export default JessVegBox
