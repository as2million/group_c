import React, { useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import VNavbar from 'Share/Components/VNavbar/VNavbar';
import JessMenuA from '../Components/JessMenuA/JessMenuA';
import JessMenuB from '../Components/JessMenuB/JessMenuB';
import JessMenuC from '../Components/JessMenuC/JessMenuC';
import JessMenuD from '../Components/JessMenuD/JessMenuD';
import ChaOrderItem from '../Components/Cha-Order-Item/ChaOrderItem';

function JessMenu(props) {
  const { currentUser } = props;
  // const [nowUser, setNowUser] = useState([]);
  console.log('currentUser', currentUser);
  let { id } = useParams();

  useEffect(() => {
    // getUserInfoFromServer();
  }, [currentUser]);
  return (
    <>
      <VNavbar {...props} />
      <JessMenuA />
      <JessMenuB id={id} />
      <JessMenuC id={id} />
      <JessMenuD />
      {/* <ChaOrderItem {...props} nowUser={nowUser} /> */}
      {/* <ChaOrderItem {...props} currentUser={currentUser} /> */}
    </>
  );
}

export default withRouter(JessMenu);
