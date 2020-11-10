import React, { useState, useEffect } from 'react'
import './App.css'
// 引入 共用元件
import Navbar from 'Share/Components/NavBar/NavBar'
import Footer from 'Share/Components/Footer/Footer'
// import NotFoundPage from "Share/Components/NotFoundPage/NotFoundPage";

// 引入 所有人的總元件
import JessMenu from 'Jess/Pages/JessMenu'
import JessBento from 'Jess/Pages/JessBento'
import JessVegBox from 'Jess/Pages/JessVegBox'

// 安裝react router => npm install react-router-dom
// 引入react router => 用於制定路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from '../src/Jess/Components/ScrollToTop'

// 路由表
function App() {
  const [showBar, setShowBar] = useState(true)
  const [mycartList, setMycartList] = useState([])
  const [cartNumber, setCartNumber] = useState(0)

  // 購物車商品數量處理器
  const handleCartNumber = (type, amount) => {
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
  return (
    // <Router>元件一定要放在最外層
    <Router>
      <>
        {/* 放切頁時不重新渲染的部份 s*/}
        <Navbar cartNumber={cartNumber} mycartList={mycartList} />
        {/* 放切頁時不重新渲染的部份 e*/}

        {/* 路由設定開始 */}
        <ScrollToTop>
          <Switch>
            {/* janice */}
            {/* 放"page資料夾"內的元件 */}
            <Route exact path="/">
              {/* <JanIndex /> */}
            </Route>

            {/* jess */}
            {/* 放"page資料夾"內的元件 */}
            <Route path="/menu">
              <JessMenu />
            </Route>
            {/* component={JessBento} */}
            <Route path="/bento/:id?">
              {/* <JessBento /> */}
              <JessBento handleCartNumber={handleCartNumber} />
            </Route>
            <Route path="/vegBox">
              <JessVegBox handleCartNumber={handleCartNumber} />
            </Route>

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
            {/* <Route exact path="/cart">
            <ChaCart />
          </Route>
          <Route exact path="/groupOrder/groupOrderCreate">
            <ChaGroupOrder />
          </Route>
          <Route exact path="/orderManagement">
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
        </ScrollToTop>
        {/* 路由設定結束 */}

        {/* 放切頁時不重新渲染的部份 s*/}
        <Footer />
        {/* 放切頁時不重新渲染的部份 e*/}
      </>
    </Router>
  )
}

export default App
