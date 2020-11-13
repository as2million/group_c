import React from "react";
import RuCompSalad from "Ru/Components/RuComps/RuCompSalad/RuCompSalad";

function RuProudctListSalad(props) {
  const {handleCartNumber, currentUser} =props
  return (
    <>
      <RuCompSalad handleCartNumber={handleCartNumber} currentUser={currentUser}/>
    </>
  );
}

export default RuProudctListSalad;
