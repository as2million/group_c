import React from "react";
import "./App.css";
// 引入 共用元件
import Navbar from "Share/Components/Navbar/Navbar";
import Footer from "Share/Components/Footer/Footer";
import NotFoundPage from "Share/Components/NotFoundPage/NotFoundPage";

// 引入 所有人的總元件
import NameApp from "Name/NameApp";

// 安裝react router => npm install react-router-dom
// 引入react router => 用於制定路由
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// 路由表
function App() {
  return (
    // <Router>元件一定要放在最外層
    <Router>
      <>
        {/* 放切頁時不重新渲染的部份 s*/}
        <Navbar />
        {/* 放切頁時不重新渲染的部份 e*/}

        {/* 路由設定開始 */}
        <Switch>
          {/* jess */}
          {/* 放"page資料夾"內的元件 */}
          <Route exact path="/">
            <NameApp />
          </Route>
          {/* iris */}
          {/* 放"page資料夾"內的元件 */}
          <Route exact path="/">
            <NameApp />
          </Route>
          {/* ru */}
          {/* 放"page資料夾"內的元件 */}
          <Route exact path="/">
            <NameApp />
          </Route>
          {/* janice */}
          {/* 放"page資料夾"內的元件 */}
          <Route exact path="/">
            <NameApp />
          </Route>
          {/* cha */}
          {/* 放"page資料夾"內的元件 */}
          <Route exact path="/">
            <NameApp />
          </Route>
          {/* claudia */}
          {/* 放"page資料夾"內的元件 */}
          <Route exact path="/">
            <NameApp />
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
  );
}

export default App;
