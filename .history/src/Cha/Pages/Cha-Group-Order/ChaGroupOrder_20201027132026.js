import React, { useState, useEffect } from 'react'

import ChaGroupProgressBar from 'Cha/Components/Cha-Group-ProgressBar/ChaGroupProgressBar'
// import ChaOrder from 'Cha/Components/Cha-Order/ChaOrder'
// import ChaCartSubmitCard from 'Cha/Components/Cha-Cart-Submit-Card/ChaCartSubmitCard'
// import ChaCartStepCardStep1 from 'Cha/Components/Cha-Cart-Step-Card-Step1/ChaCartStepCardStep1'
// import ChaCartStepCardStep2 from 'Cha/Components/Cha-Cart-Step-Card-Step2/ChaCartStepCardStep2'
// import ChaCartStepCardStep3 from 'Cha/Components/Cha-Cart-Step-Card-Step3/ChaCartStepCardStep3'

import 'Cha/Pages/Cha-Group-Order/ChaGroupOrder.scss'

function ChaGroupOrder(props) {
  return (
    <>
      <div className="row"></div>
      <h1>小農購物車</h1>
      <ChaGroupProgressBar />
    </>
  )
}
export default ChaGroupOrder
