import React, { useState } from 'react'
import './App.css'
// 引入 共用元件
import Navbar from 'Share/Components/NavBar/NavBar'
import VNavbar from 'Share/Components/VNavbar/VNavbar'
import Footer from 'Share/Components/Footer/Footer'
// import NotFoundPage from "Share/Components/NotFoundPage/NotFoundPage";

// 引入 所有人的總元件
// import NameApp from "Name/NameApp";
// import JanIndex from 'Janice/Pages/JanIndex'
// import JessMenu from 'Jess/Pages/JessMenu'
// import JessBento from 'Jess/Pages/JessBento'
// import JessVegBox from 'Jess/Pages/JessVegBox'
import IrisUserprofile from 'Iris/Pages/IrisUserprofile'
import IrisOrderComment from 'Iris/Pages/IrisOrderComment'
import IrisMyFav from 'Iris/Pages/IrisMyFav'
import IrisBeastiePoint from 'Iris/Pages/IrisBeastiePoint'
import IrisGetCoupon from 'Iris/Pages/IrisGetCoupon'
import IrisLoginModal from 'Iris/Components/IrisLoginModal/IrisLoginModal'
import IrisOrderManagement from 'Iris/Pages/IrisOrderManagement'
// import ChaCart from 'Cha/Pages/ChaCart'
// import ChaGroupOrder from 'Cha/Pages/ChaGroupOrder'
// import ChaOrderManagement from 'Cha/Pages/Iris-Profile-Page-Demo/IrisProfilePageDemo'
import RuProudctList from 'Ru/Pages/RuProudctList'
import RuProudctListSalad from 'Ru/Pages/RuProudctListSalad'
import RuProudctListCustom from 'Ru/Pages/RuProudctListCustom'
// import ClaudiaFarmIndex from 'Claudia/Pages/ClaudiaFarmIndex'
// import ClaudiaFarmDetailedPage from 'Claudia/Pages/ClaudiaFarmDetailedPage'

// 安裝react router => npm install react-router-dom
// 引入react router => 用於制定路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// 路由表
function App() {
  // login modal
  const [isLogin, setIsLogin] = useState(false) //是否登入，預設否
  const [showLoginModal, setShowLoginModal] = useState(false) //控制是否秀登入光箱
  const [currentUser, setCurrentUser] = useState() // 目前用戶

  return (
    // <Router>元件一定要放在最外層
    <Router>
      <>
        {/* 放切頁時不重新渲染的部份 s*/}
        <Navbar
          setShowLoginModal={setShowLoginModal}
          showLoginModal={showLoginModal}
          setIsLogin={setIsLogin}
          isLogin={isLogin}
        />
        {/* 放切頁時不重新渲染的部份 e*/}
        <VNavbar />
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
          </Route>

          {/* iris */}
          {/* 放"page資料夾"內的元件 */}
          <Route exact path="/memberUserprofile">
            <IrisUserprofile
              isLogin={isLogin}
              currentUser={currentUser}
              setShowLoginModal={setShowLoginModal}
            />
          </Route>
          <Route exact path="/orderComment">
            <IrisOrderComment
              isLogin={isLogin}
              currentUser={currentUser}
              setShowLoginModal={setShowLoginModal}
            />
          </Route>
          <Route exact path="/myFav">
            <IrisMyFav
              isLogin={isLogin}
              currentUser={currentUser}
              setShowLoginModal={setShowLoginModal}
            />
          </Route>
          <Route exact path="/beastiePoint">
            <IrisBeastiePoint
              isLogin={isLogin}
              currentUser={currentUser}
              setShowLoginModal={setShowLoginModal}
            />
          </Route>
          <Route path="/getCoupon">
            <IrisGetCoupon
              isLogin={isLogin}
              currentUser={currentUser}
              setShowLoginModal={setShowLoginModal}
            />
          </Route>
          <Route path="/orderManagement">
            <IrisOrderManagement
              isLogin={isLogin}
              currentUser={currentUser}
              setShowLoginModal={setShowLoginModal}
            />
          </Route>

          {/* ru */}
          {/* 放"page資料夾"內的元件 */}
          <Route exact path="/productList">
            <RuProudctList />
          </Route>
          <Route exact path="/productListSalad">
            <RuProudctListSalad />
          </Route>
          <Route exact path="/productListCustom">
            <RuProudctListCustom />
          </Route>

          {/* cha */}
          {/* 放"page資料夾"內的元件 */}
          {/* <Route exact path="/cart">
            <ChaCart />
          </Route>
          <Route exact path="/groupOrder/groupOrderCreate">
            <ChaGroupOrder />
          </Route> */}
          {/* <Route exact path="/orderManagement">
            <ChaOrderManagement />
          </Route> */}

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

        <IrisLoginModal
          showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal}
          setIsLogin={setIsLogin}
          setCurrentUser={setCurrentUser}
          isLogin={isLogin}
        />
      </>
    </Router>
  )
}

export default App
