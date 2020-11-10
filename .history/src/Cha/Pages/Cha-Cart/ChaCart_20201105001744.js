import React, { useState, useEffect } from 'react';

import ChaCartProgressBar from 'Cha/Components/Cha-Cart-ProgressBar/ChaCartProgressBar';
// import ChaOrder from 'Cha/Components/Cha-Order/ChaOrder'
import ChaCartSubmitCard from 'Cha/Components/Cha-Cart-Submit-Card/ChaCartSubmitCard';
import ChaCartStepCardStep1 from 'Cha/Components/Cha-Cart-Step-Card-Step1/ChaCartStepCardStep1';
import ChaCartStepCardStep2 from 'Cha/Components/Cha-Cart-Step-Card-Step2/ChaCartStepCardStep2';
import ChaCartStepCardStep3 from 'Cha/Components/Cha-Cart-Step-Card-Step3/ChaCartStepCardStep3';

import 'Cha/Pages/Cha-Cart/ChaCart.scss';

function ChaCart(props) {
  const [mealsData, setMealsData] = useState([]);
  const [mycartDisplay, setMycartDisplay] = useState([]);
  // 小計
  const [subtotal, setSubtotal] = useState(0);
  // 總量
  const [totalAmount, setTotalAmount] = useState(0);
  // 指示器
  const [dataLoading, setDataLoading] = useState(false);
  return (
    <>
      <ChaCartProgressBar {...props} />
      <div className="cha-wrap">
        {/* 訂單步驟欄*/}
        <main>
          {/* 步驟一*/}
          <ChaCartStepCardStep1
            subtotal={subtotal}
            setSubtotal={setSubtotal}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
          />
          {/* 步驟二 */}
          <ChaCartStepCardStep2 />
          {/* 步驟三 */}
          <ChaCartStepCardStep3 />
        </main>
        {/* 購物清單欄*/}
        <aside>
          <ChaCartSubmitCard subtotal={subtotal} totalAmount={totalAmount} />
        </aside>
      </div>
    </>
  );
}
export default ChaCart;
