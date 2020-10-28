import React, { useState, useEffect } from 'react'
// import BreadCrumb from '../Components/JessBreadCrumb/BreadCrumb'
import JessHeader from '../Components/JessHeader/JessHeader'
import JessListA from '../Components/JessListA/JessListA'
import JessListB from '../Components/JessListB/JessListB'
import JessListC from '../Components/JessListC/JessListC'

function JessBento() {
  return (
    <>
      {/* <BreadCrumb /> */}
      <JessHeader />
      <JessListA />
      <JessListB />
      <JessListC />
    </>
  )
}

export default JessBento
