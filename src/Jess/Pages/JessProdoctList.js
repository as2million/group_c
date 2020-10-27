import React, { useState, useEffect } from 'react'
// import BreadCrumb from '../Components/JessBreadCrumb/BreadCrumb'
import JessHeader from '../Components/JessHeader/JessHeader'
import JessListA from '../Components/JessListA/JessListA'
import JessListB from '../Components/JessListB/JessListB'

function JessProdoctList() {
  return (
    <>
      {/* <BreadCrumb /> */}
      <JessHeader />
      <JessListA />
      <JessListB />
    </>
  )
}

export default JessProdoctList
