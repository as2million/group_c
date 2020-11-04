import React, { useState, useEffect } from 'react';

function ChaCartTest() {
  const [mycart1, setMycart1] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [mycartDisplay, setMycartDisplay] = useState([]);

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true);

    const newCart = localStorage.getItem('cart') || '[]';

    console.log(JSON.parse(newCart));

    setMycart1(JSON.parse(newCart));
  }

  useEffect(() => {
    getCartFromLocalStorage();
  }, []);

  // 每次mycart資料有改變，1秒後關閉載入指示
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 1000);
  }, [mycart1]);

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );

  const display = (
    <>
      <ul className="list-group">
        <li className="list-group-item">產品/數量/單價</li>
      </ul>
      <h3>總價：</h3>
    </>
  );

  // 以資料載入的指示狀態來切換要出現的畫面
  return (
    <>
      <main className="flex-shrink-0">
        {dataLoading ? loading : display}
        <div className="container">{props.children}</div>
      </main>
    </>
  );
}

export default ChaCartTest;
