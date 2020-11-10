import React from "react";
import RuCompSalad from "Ru/Components/RuComps/RuCompSalad/RuCompSalad";

function RuProudctListSalad(props) {
  const {handleCartNumber} =props
  return (
    <>
      <RuCompSalad handleCartNumber={handleCartNumber}/>
    </>
  );
}

export default RuProudctListSalad;
