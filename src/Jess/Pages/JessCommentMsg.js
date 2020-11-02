import React, { useState, useEffect } from 'react';
import IrisMemberMenu from '../../Iris/Components/IrisMemberMenu/IrisMemberMenu';
// import JessMenuA from '../Components/JessMenuA/JessMenuA';
import JessCommentInput from '../Components/JessCommentMsg/JessCommentInput';

function JessMenu(props) {
  // const [textInput, setTextInput] = useState('');
  // const { comments, setComments } = props;
  return (
    <>
      <div className="container-fluid d-flex">
        <IrisMemberMenu />
        <JessCommentInput />
        {/* <testInput /> */}
      </div>
    </>
  );
}

export default JessMenu;
