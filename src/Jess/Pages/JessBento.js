import React, { useState, useEffect } from 'react';
import { Link, withRouter, useParams } from 'react-router-dom';
import VNavbar from 'Share/Components/VNavbar/VNavbar';
import JessHeader from '../Components/JessHeader/JessHeader';
import JessListA from '../Components/JessListA/JessListA';
import JessListB from '../Components/JessListB/JessListB';
import JessListC from '../Components/JessListC/JessListC';
import JessListD from '../Components/JessListD/JessListD';
import JessListE from '../Components/JessListE/JessListE';
import ToTop from 'Share/Components/ToTopButton/ScrollButton';

function JessBento(props) {
  const { handleCartNumber, handleCarList, currentUser } = props;
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(170);
  const [menu, setMenu] = useState([]);
  //useParams 設定id
  let { id } = useParams();
  async function bentoData() {
    const url = 'http://localhost:5000/product/bento';

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    const response = await fetch(request);
    const data = await response.json();

    // setMenu(data[0])
    //這邊id值可以設定分頁
    setMenu(data[id]);
    // console.log(data);
  }

  // -------- 取得目前user的資料 ---------- //
  async function getUserInfoFromServer() {
    const url = 'http://localhost:5000/member/allUserProfile';

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });

    const response = await fetch(request);
    const userdata = await response.json();
    console.log('userdata', userdata);

    // if (currentUser === userdata.member_sid) {
    //   setNowUser(userdata[currentUser - 1]);
    // }
    // console.log('nowUser', userdata[currentUser - 1]);

    // for (let i = 0; i < userdata.length; i++) {
    //   if (currentUser === userdata[i].member_sid) {
    //     // userArr.push(userdata[i]);
    //     setNowUser(userdata[currentUser]);
    //   }
    // }
    // console.log('nowUser', nowUser);
    // console.log('currentUser', currentUser);
  }

  useEffect(() => {
    getUserInfoFromServer();
    bentoData();
  }, [id]);

  return (
    <>
      <VNavbar {...props} />
      <JessHeader
        handleCartNumber={handleCartNumber}
        handleCarList={handleCarList}
        count={count}
        setCount={setCount}
        total={total}
        setTotal={setTotal}
        menu={menu}
        setMenu={setMenu}
        getUserInfoFromServer={getUserInfoFromServer}
        {...props}
      />
      <JessListA />
      <JessListB />
      <JessListC />
      <JessListD {...props} />
      <JessListE menu={menu} setMenu={setMenu} />
      <ToTop />
    </>
  );
}

export default withRouter(JessBento);
