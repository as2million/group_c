import React from 'react'
import RuCompSalad from 'Ru/Components/RuComps/RuCompSalad/RuCompSalad'
import VNavBar from 'Share/Components/VNavbar/VNavbar'

function RuProudctListSalad(props) {
  const { handleCartNumber, currentUser } = props
  return (
    <>
      <VNavBar />
      <RuCompSalad
        handleCartNumber={handleCartNumber}
        currentUser={currentUser}
      />
    </>
  )
}

export default RuProudctListSalad
