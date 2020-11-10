import React from 'react'
import RuCompCustom from 'Ru/Components/RuComps/RuCompCustom/RuCompCustom'
function RuProudctListCustom(props) {
  const {handleCartNumber, setAmount, amount} =props
  return (
    <>
      <RuCompCustom handleCartNumber={handleCartNumber} amount={amount} setAmount={setAmount} />
    </>
  )
}

export default RuProudctListCustom
