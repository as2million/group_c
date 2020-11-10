import React from 'react'
import RuCompBento from 'Ru/Components/RuComps/RuCompBento/RuCompBento'

function RuProudctList(props) {
  const { handleAddCartNumber, currentUser } = props
  return (
    <>
      <RuCompBento
        handleAddCartNumber={handleAddCartNumber} // localStorage函式
        currentUser={currentUser}
      />
    </>
  )
}

export default RuProudctList
