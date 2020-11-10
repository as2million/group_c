import React from 'react'
import RuCompBento from 'Ru/Components/RuComps/RuCompBento/RuCompBento'

function RuProudctList(props) {
  const { handleCartNumber, currentUser } = props
  return (
    <>
      <RuCompBento
        handleCartNumber={handleCartNumber} // localStorage函式
        currentUser={currentUser}
      />
    </>
  )
}

export default RuProudctList
