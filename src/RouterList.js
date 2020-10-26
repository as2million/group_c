import React from "react";

// 引入 共用元件 與 所有人的page元件
import Page from "./components/Page";

// 安裝react router => npm install react-router-dom
// 引入react router => 用於制定路由
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// 路由表
// 這邊負責制定路由
function RouterList() {
  return (
    // <Router>元件一定要放在最外層
    <Router>
      <>
        <NavBar />
        <MainContent>
          <Switch>
            {/* 路由設定開始 */}

            {/* all */}
            <Route exact path="/">
              <Page />
            </Route>
            {/* jess */}
            <Route exact path="/">
              <Page />
            </Route>
            {/* iris */}
            <Route exact path="/">
              <Page />
            </Route>
            {/* ru */}
            <Route exact path="/">
              <Page />
            </Route>
            {/* janice */}
            <Route exact path="/">
              <Page />
            </Route>
            {/* cha */}
            <Route exact path="/">
              <Page />
            </Route>
            {/* claudia */}
            <Route exact path="/">
              <Page />
            </Route>

            {/* 路由設定結束 */}
          </Switch>
        </MainContent>
        <Footer />
      </>
    </Router>
  );
}

export default RouterList;
