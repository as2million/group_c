import React from 'react'
import RuCompCustom from 'Ru/Components/RuComps/RuCompCustom/RuCompCustom'
import VNavBar from 'Share/Components/VNavbar/VNavbar'

function RuProudctListCustom(props) {
  const { handleCartNumber, setAmount, amount } = props
  return (
    <>
      <VNavBar {...props}/>
      <RuCompCustom
        handleCartNumber={handleCartNumber}
        amount={amount}
        setAmount={setAmount}
      />
    </>
  )
}

export default RuProudctListCustom
