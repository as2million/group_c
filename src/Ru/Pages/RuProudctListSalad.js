import React, { useState } from 'react';
import RuCompSalad from 'Ru/Components/RuComps/RuCompSalad/RuCompSalad';
import VNavBar from 'Share/Components/VNavbar/VNavbar';

function RuProudctListSalad(props) {
  const { handleCartNumber, currentUser } = props;
  const [count, setCount] = useState(1);
  return (
    <>
      <VNavBar {...props} />
      <RuCompSalad
        handleCartNumber={handleCartNumber}
        currentUser={currentUser}
        count={count}
        setCount={setCount}
      />
    </>
  );
}

export default RuProudctListSalad;
