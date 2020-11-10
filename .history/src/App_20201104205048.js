import React,{} from 'react';
import './App.css';
// 引入 共用元件
import NavBar from 'Share/Components/NavBar/NavBar';
import VNavbar from 'Share/Components/VNavbar/VNavbar';
import Footer from 'Share/Components/Footer/Footer';
// import NotFoundPage from "Share/Components/NotFoundPage/NotFoundPage";

// 引入 所有人的總元件
// import NameApp from "Name/NameApp";
import JanIndex from 'Janice/Components/JanIndex/JanIndex';
// import JessMenu from 'Jess/Pages/JessMenu'
// import JessBento from 'Jess/Pages/JessBento'
// import JessVegBox from 'Jess/Pages/JessVegBox'
// import IrisUserprofile from 'Iris/Pages/IrisUserprofile'
// import IrisOrderComment from 'Iris/Pages/IrisOrderComment '
// import IrisMyFav from 'Iris/Pages/IrisMyFav'
// import IrisBeastiePoint from 'Iris/Pages/IrisBeastiePoint'
import IrisOrderManagement from 'Iris/Pages/IrisOrderManagement';
import ChaCart from 'Cha/Pages/Cha-Cart/ChaCart';
import ChaGroupOrderCreate from 'Cha/Components/Cha-Group-Order-Create/ChaGroupOrderCreate';
import ChaGroupOrderSearch from 'Cha/Components/Cha-Group-Order-Search/ChaGroupOrderSearch';
import ChaGroupOrderSignIn from 'Cha/Components/Cha-Group-Order-SignIn/ChaGroupOrderSignIn';
import ChaGroupOrderConfirm from 'Cha/Components/Cha-Group-Order-Confirm/ChaGroupOrderConfirm';
import ChaGroupOrderMenu from 'Cha/Components/Cha-Group-Order-Menu/ChaGroupOrderMenu';

import ChaCheckpoint from 'Cha/Pages/ChaCheckpoint';
// import RuProudctList from 'Ru/Pages/ProudctList'
// import ClaudiaFarmIndex from 'Claudia/Pages/ClaudiaFarmIndex'
// import ClaudiaFarmDetailedPage from 'Claudia/Pages/ClaudiaFarmDetailedPage'

// 安裝react router => npm install react-router-dom
// 引入react router => 用於制定路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 路由表
function App() {
  const [showBar, setShowBar] = useState(true);
  return (
    // <Router>元件一定要放在最外層
    <Router>
      <>
        {/* 放切頁時不重新渲染的部份 s*/}
        <NavBar />
        <VNavbar />
        {/* 放切頁時不重新渲染的部份 e*/}

        {/* 路由設定開始 */}
        <Switch>
          {/* janice */}
          {/* 放"page資料夾"內的元件 */}
          <Route exact path="/">
            <JanIndex />
          </Route>

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
          <Route path="/orderManagement">
            <IrisOrderManagement />
          </Route>

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
          {/* 揪團 */}
          <Route exact path="/groupOrder/groupOrderCreate">
            <ChaGroupOrderCreate />
          </Route>
          <Route path="/groupOrder/groupOrderSearch">
            <ChaGroupOrderSearch />
          </Route>
          <Route path="/groupOrder/groupOrderSignIn">
            <ChaGroupOrderSignIn />
          </Route>
          <Route path="/groupOrder/groupOrderConfirm">
            <ChaGroupOrderConfirm />
          </Route>
          <Route path="/groupOrder/groupOrderMenu">
            <ChaGroupOrderMenu />
          </Route>
          {/* 訂單管理已置入<IrisOrderManagement /> */}
          {/* 偷設中繼站 */}
          <Route exact path="/checkpoint">
            <ChaCheckpoint />
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
