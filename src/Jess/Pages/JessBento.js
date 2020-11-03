import React, { useState, useEffect } from 'react'

import VNavbar from 'Share/Components/VNavbar/VNavbar'
import JessHeader from '../Components/JessHeader/JessHeader'
import JessListA from '../Components/JessListA/JessListA'
import JessListB from '../Components/JessListB/JessListB'
import JessListC from '../Components/JessListC/JessListC'
import JessListD from '../Components/JessListD/JessListD'
import JessListE from '../Components/JessListE/JessListE'

function JessBento() {
  return (
    <>
      <VNavbar />
      <JessHeader />
      <JessListA />
      <JessListB />
      <JessListC />
      <JessListD />
      <JessListE />
    </>
  )
}

export default JessBento
