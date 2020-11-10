import React, { useState } from 'react'
import './App.css'
// 引入 共用元件
import Navbar from 'Share/Components/NavBar/NavBar'
import Footer from 'Share/Components/Footer/Footer'

// 引入 所有人的總元件

import JanIndex from 'Janice/Pages/JanIndex'

// 安裝react router => npm install react-router-dom
// 引入react router => 用於制定路由
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddressTabs from 'Share/Components/AddressTabs/AddressTabs'

// 路由表
function App() {
  const [county, setCounty] = useState(-1)
  const [township, setTownship] = useState(-1)
  const [address, setAddress] = useState('')
  return (
    // <Router>元件一定要放在最外層
    <Router>
      <>
        {/* 放切頁時不重新渲染的部份 s*/}
        <Navbar />
        {/* 放切頁時不重新渲染的部份 e*/}

        {/* 路由設定開始 */}
        <Switch>
          {/* janice */}
          {/* 放"page資料夾"內的元件 */}
          <Route exact path="/">
            <JanIndex
              county={county}
              setCounty={setCounty}
              township={township}
              setTownship={setTownship}
              address={address}
              setAddress={setAddress}
            />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
