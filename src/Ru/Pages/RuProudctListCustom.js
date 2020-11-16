import React, { useState } from 'react';
import RuCompCustom from 'Ru/Components/RuComps/RuCompCustom/RuCompCustom';
import VNavBar from 'Share/Components/VNavbar/VNavbar';

function RuProudctListCustom(props) {
  const { handleCartNumber, setAmount, amount } = props;
  const [count, setCount] = useState(1);
  return (
    <>
      <VNavBar {...props} />
      <RuCompCustom
        handleCartNumber={handleCartNumber}
        amount={amount}
        setAmount={setAmount}
        count={count}
        setCount={setCount}
      />
    </>
  );
}

export default RuProudctListCustom;
