import React from "react";
import RuCompSalad from "Ru/Components/RuComps/RuCompSalad/RuCompSalad";

function RuProudctListSalad(props) {
  const {handleAddCartNumber} =props
  return (
    <>
      <RuCompSalad handleAddCartNumber={handleAddCartNumber}/>
    </>
  );
}

export default RuProudctListSalad;
