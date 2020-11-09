import React from 'react'
import RuCompCustom from 'Ru/Components/RuComps/RuCompCustom/RuCompCustom'
function RuProudctListCustom(props) {
  const {handleAddCartNumber, setAmount, amount} =props
  return (
    <>
      <RuCompCustom handleAddCartNumber={handleAddCartNumber} amount={amount} setAmount={setAmount} />
    </>
  )
}

export default RuProudctListCustom
