import React, { useState, useEffect } from "react";
import InputH50 from "./../../Share/Components/Input/InputH50";
import InputH44 from "./../../Share/Components/Input/InputH44";
import InputH40 from "./../../Share/Components/Input/InputH40";
import TextArea from "./../../Share/Components/Input/TextArea";
import SearchBar from "./../../Share/Components/Input/SearchBar";


function UserProfile(props) {

  const { name } = props;
  return (
    <>
      <div className="container">
        <h1>會員資料</h1>
        <h1>{name}</h1>

        <SearchBar />
        <br />
        <InputH50 />
        <br />
        <InputH44 />
        <br />
        <InputH40 />
        <br />
        <TextArea />
      </div>
    </>
  );
}

export default UserProfile;
