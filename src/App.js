import React, { useEffect, useState } from 'react'
import './App.css'
// 引入 共用元件
import Navbar from 'Share/Components/NavBar/NavBar'
import Footer from 'Share/Components/Footer/Footer'
// import NotFoundPage from "Share/Components/NotFoundPage/NotFoundPage";

// 引入 所有人的總元件
// import NameApp from "Name/NameApp";

import RuProudctList from 'Ru/Pages/RuProudctList'
import RuProudctListSalad from 'Ru/Pages/RuProudctListSalad'
import RuProudctListCustom from 'Ru/Pages/RuProudctListCustom'

// 安裝react router => npm install react-router-dom
// 引入react router => 用於制定路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// 路由表
function App() {
  const [showBar, setShowBar] = useState(true)
  const [cartNumber, setCartNumber] = useState(0)
  const [amount, setAmount] = useState(1)
  const [currentUser, setCurrentUser] = useState() // 目前用戶
  
  const handleAddCartNumber = (type = 'add', amount = 1) => {
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
        <Navbar cartNumber={cartNumber} amount={amount} />
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
          <Route exact path="/productList">
            <RuProudctList handleAddCartNumber={handleAddCartNumber} currentUser={currentUser}/>
          </Route>
          <Route exact path="/productListSalad">
            <RuProudctListSalad handleAddCartNumber={handleAddCartNumber} currentUser={currentUser}/>
          </Route>
          <Route exact path="/productListCustom">
            <RuProudctListCustom
              handleAddCartNumber={handleAddCartNumber}
              amount={amount}
              setAmount={setAmount}
            />
          </Route>

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
        {/* 路由設定結束 */}

        {/* 放切頁時不重新渲染的部份 s*/}
        <Footer />
        {/* 放切頁時不重新渲染的部份 e*/}
      </>
    </Router>
  )
}

export default App
