import React, { useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'
import VNavbar from 'Share/Components/VNavbar/VNavbar'
import JessMenuA from '../Components/JessMenuA/JessMenuA'
import JessMenuB from '../Components/JessMenuB/JessMenuB'
import JessMenuC from '../Components/JessMenuC/JessMenuC'
import JessMenuD from '../Components/JessMenuD/JessMenuD'
import ChaOrderItem from '../Components/Cha-Order-Item/ChaOrderItem'

function JessMenu(props) {
  let { id } = useParams()
  useEffect(() => {}, [id])
  return (
    <>
      <VNavbar {...props} />
      <JessMenuA />
      <JessMenuB id={id} />
      <JessMenuC id={id} />
      <JessMenuD />
      <ChaOrderItem />
    </>
  )
}

export default withRouter(JessMenu)
