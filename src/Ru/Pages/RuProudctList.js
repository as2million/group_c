import React from 'react'
import RuCompBento from 'Ru/Components/RuComps/RuCompBento/RuCompBento'
import VNavBar from 'Share/Components/VNavbar/VNavbar'

function RuProudctList(props) {
  
  const { handleCartNumber, currentUser } = props
  return (
    <>
      <VNavBar {...props} />
      <RuCompBento
        handleCartNumber={handleCartNumber} // localStorage函式
        currentUser={currentUser}
      />
    </>
  )
}

export default RuProudctList
