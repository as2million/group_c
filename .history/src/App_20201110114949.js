import React, { useState, useEffect } from 'react';
import './App.css';
// 引入 共用元件
import NavBar from 'Share/Components/NavBar/NavBar';
import VNavbar from 'Share/Components/VNavbar/VNavbar';
import Footer from 'Share/Components/Footer/Footer';

// 引入 所有人的總元件
import JanIndex from 'Janice/Components/JanIndex/JanIndex';
import IrisOrderManagement from 'Iris/Pages/IrisOrderManagement';
import ChaCart from 'Cha/Pages/Cha-Cart/ChaCart';
import ChaGroupOrderCreate from 'Cha/Components/Cha-Group-Order-Create/ChaGroupOrderCreate';
import ChaGroupOrderSearch from 'Cha/Components/Cha-Group-Order-Search/ChaGroupOrderSearch';
import ChaGroupOrderSignIn from 'Cha/Components/Cha-Group-Order-SignIn/ChaGroupOrderSignIn';
import ChaGroupOrderConfirm from 'Cha/Components/Cha-Group-Order-Confirm/ChaGroupOrderConfirm';
import ChaGroupOrderMenu from 'Cha/Components/Cha-Group-Order-Menu/ChaGroupOrderMenu';
import ChaCheckpoint from 'Cha/Pages/ChaCheckpoint';
import ChaProductList from 'Cha/Components-demo/ChaProductList';
import ChaCartTest from 'Cha/Components-demo/ChaCartTest';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 路由表
function App() {
  const [showBar, setShowBar] = useState(true);
  const [cartNumber, setCartNumber] = useState(0);

  // 購物車商品數量處理器
  const handleCartNumber = (type = 'add', amount = 1) => {
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

  // 計算商品總量
  // const calCuSubtotalAmount = (items) => {
  //   let total = 0;
  //   for (let i = 0; i < items.length; i++) {
  //     total += items[i].productAmount;
  //   }
  //   return total;
  // };
  // useEffect(() => {
  //   const currentCart = JSON.parse(localStorage.getItem('cart')) || 0;
  //   setCartNumber(calCuSubtotalAmount(currentCart));
  // }, []);
  return (
    // <Router>元件一定要放在最外層
    <Router>
      <>
        {/* 放切頁時不重新渲染的部份 s*/}
        <div style={{ display: !showBar && 'none' }}>
          <NavBar cartNumber={cartNumber} />
          <VNavbar />
        </div>
        {/* 放切頁時不重新渲染的部份 e*/}

        {/* 路由設定開始 */}
        <Switch>
          {/* janice */}
          {/* 放"page資料夾"內的元件 */}
          <Route exact path="/">
            <JanIndex setShowBar={setShowBar} />
          </Route>

          <Route path="/orderManagement">
            <IrisOrderManagement />
          </Route>

          {/* cha */}
          {/* 放"page資料夾"內的元件 */}
          {/* 購物車 */}
          <Route exact path="/cart">
            <ChaCart
              setShowBar={setShowBar}
              handleCartNumber={handleCartNumber}
            />
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
          {/* 測試用：中繼站、商品清單 */}
          <Route exact path="/checkpoint">
            <ChaCheckpoint />
          </Route>
          <Route exact path="/chaProductList">
            <ChaProductList handleCartNumber={handleCartNumber} />
          </Route>
          <Route exact path="/chaCartTest">
            <ChaCartTest />
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
