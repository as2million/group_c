import React from 'react';
import './App.css';
// 引入 共用元件
import NavBar from 'Share/Components/NavBar/NavBar';
import Footer from 'Share/Components/Footer/Footer';
// import NotFoundPage from "Share/Components/NotFoundPage/NotFoundPage";

// 引入 所有人的總元件
// import NameApp from "Name/NameApp";
// import JanIndex from 'Janice/Pages/JanIndex'
// import JessMenu from 'Jess/Pages/JessMenu'
// import JessBento from 'Jess/Pages/JessBento'
// import JessVegBox from 'Jess/Pages/JessVegBox'
// import IrisUserprofile from 'Iris/Pages/IrisUserprofile'
// import IrisOrderComment from 'Iris/Pages/IrisOrderComment '
// import IrisMyFav from 'Iris/Pages/IrisMyFav'
// import IrisBeastiePoint from 'Iris/Pages/IrisBeastiePoint'
import ChaCart from 'Cha/Pages/Cha-Cart/ChaCart';
import ChaGroupOrder from 'Cha/Pages/Cha-Group-Order/ChaGroupOrder';
import ChaOrderManagement from 'Cha/Pages/Iris-Profile-Page-Demo/IrisProfilePageDemo';
// import RuProudctList from 'Ru/Pages/ProudctList'
// import ClaudiaFarmIndex from 'Claudia/Pages/ClaudiaFarmIndex'
// import ClaudiaFarmDetailedPage from 'Claudia/Pages/ClaudiaFarmDetailedPage'

// 安裝react router => npm install react-router-dom
// 引入react router => 用於制定路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 路由表
function App() {
  return (
    // <Router>元件一定要放在最外層
    <Router>
      <>
        {/* 放切頁時不重新渲染的部份 s*/}
        <NavBar />
        {/* 放切頁時不重新渲染的部份 e*/}

        {/* 路由設定開始 */}
        <Switch>
          {/* janice */}
          {/* 放"page資料夾"內的元件 */}
          {/* <Route exact path="/">
            <JanIndex />
          </Route> */}

          {/* jess */}
          {/* 放"page資料夾"內的元件 */}
          {/* <Route exact path="/menu">
            <JessMenu />
          </Route>
          <Route exact path="/bento/:id">
            <JessBento />
          </Route>
          <Route exact path="/vegBox">
            <JessVegBox />
          </Route> */}

          {/* iris */}
          {/* 放"page資料夾"內的元件 */}
          {/* <Route exact path="/memberUserprofile">
            <IrisUserprofile />
          </Route>
          <Route exact path="/orderComment">
            <IrisOrderComment />
          </Route>
          <Route exact path="/myFav">
            <IrisMyFav />
          </Route>
          <Route exact path="/beastiePoint">
            <IrisBeastiePoint />
          </Route> */}

          {/* ru */}
          {/* 放"page資料夾"內的元件 */}
          {/* <Route exact path="/productList">
            <RuProudctList />
          </Route> */}

          {/* cha */}
          {/* 放"page資料夾"內的元件 */}
          {/* 購物車 */}
          <Route exact path="/cart">
            <ChaCart />
          </Route>
          {/* 我的訂單 */}
          <Route exact path="/orderManagement">
            <ChaOrderManagement />
          </Route>
          {/* 揪團 */}
          <Route exact path="/groupOrder/groupOrderCreate">
            <ChaGroupOrder />
          </Route>

          {/* claudia */}
          {/* 放"page資料夾"內的元件 */}
          {/* <Route exact path="/farmMap">
            <ClaudiaFarmIndex />
          </Route>
          <Route exact path="/farmIntro">
            <ClaudiaFarmDetailedPage />
          </Route> */}

          {/* 404 */}

          {/* <Route exact path="*">
            <NotFoundPage />
          </Route> */}
        </Switch>
        {/* 路由設定結束 */}

        {/* 放切頁時不重新渲染的部份 s*/}
        <Footer />
        {/* 放切頁時不重新渲染的部份 e*/}
      </>
    </Router>
  );
}

export default App;
