import React, { useState, useEffect } from 'react'
import './App.css'
// 引入 共用元件
import Navbar from 'Share/Components/NavBar/NavBar'
import Footer from 'Share/Components/Footer/Footer'

// 引入 所有人的總元件
import ClaudiaFarmIndex from 'Claudia/Pages/ClaudiaFarmIndex'
import ClaudiaFarmDetailedPage from 'Claudia/Pages/ClaudiaFarmDetailedPage'
import RuProudctList from 'Ru/Pages/RuProudctList'
import RuProudctListSalad from 'Ru/Pages/RuProudctListSalad'
import RuProudctListCustom from 'Ru/Pages/RuProudctListCustom'
import IrisUserprofile from 'Iris/Pages/IrisUserprofile'
import IrisOrderComment from 'Iris/Pages/IrisOrderComment'
import IrisMyFav from 'Iris/Pages/IrisMyFav'
import IrisBeastiePoint from 'Iris/Pages/IrisBeastiePoint'
import IrisGetCoupon from 'Iris/Pages/IrisGetCoupon'
import IrisLoginModal from 'Iris/Components/IrisLoginModal/IrisLoginModal'
import IrisOrderManagement from 'Iris/Pages/IrisOrderManagement'

// 安裝react router => npm install react-router-dom
// 引入react router => 用於制定路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// 路由表
function App() {
  const [showBar, setShowBar] = useState(true)
  const [cartNumber, setCartNumber] = useState(0)
  const [amount, setAmount] = useState(1)
  const [currentUser, setCurrentUser] = useState() // 目前用戶
  const [isLogin, setIsLogin] = useState(false) //是否登入，預設否
  const [showLoginModal, setShowLoginModal] = useState(false) //控制是否秀光箱

  const handleCartNumber = (type = 'add', amount = 1) => {
    if (type === 'add') {
      const newCartNumber = +cartNumber + amount
      localStorage.setItem('cartNumber', JSON.stringify(newCartNumber))
      setCartNumber(newCartNumber)
    }
    if (type === 'minus') {
      const newCartNumber = +cartNumber - amount
      localStorage.setItem('cartNumber', JSON.stringify(newCartNumber))
      setCartNumber(newCartNumber)
    }
  }
  useEffect(() => {
    const currentCartNumber =
      JSON.parse(localStorage.getItem('cartNumber')) || 0
    setCartNumber(currentCartNumber)
  }, [])

  useEffect(() => {
    console.log(amount)
    return () => {}
  }, [amount])

  return (
    // <Router>元件一定要放在最外層
    <Router>
      <>
        {/* 放切頁時不重新渲染的部份 s*/}
        <Navbar
          cartNumber={cartNumber}
          amount={amount}
          setShowLoginModal={setShowLoginModal}
          showLoginModal={showLoginModal}
          setIsLogin={setIsLogin}
          isLogin={isLogin}
        />
        {/* 放切頁時不重新渲染的部份 e*/}
        {/* 路由設定開始 */}
        <Switch>
          {/* claudia */}
          {/* 放"page資料夾"內的元件 */}
          <Route exact path="/farmMap">
            <ClaudiaFarmIndex />
          </Route>
          <Route exact path="/farmIntro">
            <ClaudiaFarmDetailedPage handleCartNumber={handleCartNumber} />
          </Route>

          {/* ru */}
          {/* 放"page資料夾"內的元件 */}
          <Route exact path="/productList">
            <RuProudctList
              handleCartNumber={handleCartNumber}
              currentUser={currentUser}
            />
          </Route>
          <Route exact path="/productListSalad">
            <RuProudctListSalad
              handleCartNumber={handleCartNumber}
              currentUser={currentUser}
            />
          </Route>
          <Route exact path="/productListCustom">
            <RuProudctListCustom
              handleCartNumber={handleCartNumber}
              amount={amount}
              setAmount={setAmount}
            />
          </Route>

          {/* 404 */}

          {/* <Route exact path="*">
            <NotFoundPage />
          </Route> */}
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
