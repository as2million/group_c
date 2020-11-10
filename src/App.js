import React, { useState, useEffect } from 'react'
import './App.css'
// 引入 共用元件
import Navbar from 'Share/Components/NavBar/NavBar'
import Footer from 'Share/Components/Footer/Footer'
// import NotFoundPage from "Share/Components/NotFoundPage/NotFoundPage";

// 引入 所有人的總元件
import ClaudiaFarmIndex from 'Claudia/Pages/ClaudiaFarmIndex'
import ClaudiaFarmDetailedPage from 'Claudia/Pages/ClaudiaFarmDetailedPage'

// 安裝react router => npm install react-router-dom
// 引入react router => 用於制定路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// 路由表
function App() {
  const [cartNumber, setCartNumber] = useState(0);

  const handleCartNumber = (type, amount) => {
    if (type === 'add') {
      const newCartNumber = +cartNumber + amount;
      localStorage.setItem('cartNumber', JSON.stringify(newCartNumber));
      setCartNumber(newCartNumber);
    }
    if (type === 'minus') {
      const newCartNumber = +cartNumber - amount;
      localStorage.setItem('cartNumber', JSON.stringify(newCartNumber));
      setCartNumber(newCartNumber);
    }
  };
  useEffect(() => {
    const currentCartNumber =
      JSON.parse(localStorage.getItem('cartNumber')) || 0;
    setCartNumber(currentCartNumber);
  }, []);

  return (
    // <Router>元件一定要放在最外層
    <Router>
      <>
        {/* 放切頁時不重新渲染的部份 s*/}
        <Navbar cartNumber={cartNumber} />
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

export default App;
