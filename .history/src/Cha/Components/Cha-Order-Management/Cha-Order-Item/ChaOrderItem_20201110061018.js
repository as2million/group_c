import React, { useState } from 'react';
import './ChaOrderItem.scss';
function ChaOrderItem(props) {
  const { orderItem } = props;
  function Orderdetail2() {}
  const [open, setOpen] = useState(false);
  return (
    <>
      {' '}
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </>
    </>
  );
  function OrderDetail() {
    return (
      <>
        <p>
          <a
            className="btn btn-primary"
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Link with href
          </a>
          <button
            className="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Button with data-target
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <OrderDetail />
      <div className="cha-order-row">
        <div className="cha-order-column1-picture"></div>
        <div className="cha-order-column2">
          <div className="cha-order-column2-row1">
            <span>
              <span> 訂單編號: </span>
              <span> </span>
              <span className="cha-order-orange"> AAA{orderItem.sid} </span>
            </span>
            <span className="cha-order-divider"> | </span>
            <span>
              <span> 訂單金額: </span>
              <span> </span>
              <span className="cha-order-orange">
                {' '}
                {orderItem.total_price}{' '}
              </span>
            </span>
            <span className="cha-order-divider"> | </span>
            <span>
              <span> 訂單狀態: </span>
              <span> </span>
              <span className="cha-order-orange">{orderItem.order_state}</span>
            </span>
          </div>
          <div className="cha-order-column2-row2">
            <span> 取餐聯絡人: </span>
            <span> {orderItem.take_person} </span>
          </div>
          <div className="cha-order-column2-row3">
            <span> 取餐時間: </span>
            <span> {orderItem.take_date.slice(0, 10)} </span>
            <span> {orderItem.take_time} </span>
            <span className="cha-order-divider"> | </span>
            <span> 取餐方式: </span>
            <span> {orderItem.take_way} </span>
          </div>

          <div className="cha-order-column2-row4">
            <span>
              <span> 取餐地址: </span>
              <span> {orderItem.take_address} </span>
            </span>
          </div>
          <div className="cha-order-column2-row5">
            <span> 訂單明細 </span>
            <span> 用餐評價 </span>
            <span> 查閱發票 </span>
            {/* <span> 怪獸對決 </span> */}
          </div>
        </div>

        <div className="cha-order-column3-btn">
          <div className="cha-order-in-column3-control-height">
            <input type="button" value="再次訂購" />
            <input type="button" value="加入點餐" />
            <input type="button" value="分享連結" />
            <input type="button" value="收單" />
            {/* <input type="button" value="取消/退費" className="cha-order-btn-858585" /> */}
          </div>
        </div>
      </div>
      {/* // //////////// 我的訂單明細
      <h1>訂單編號：{orderSidMyOrder}</h1>
      <h1>商品編號：{orderItem.order_detail[0].product_sid}</h1>
      <h1>商品名稱：{orderItem.order_detail[0].product_name}</h1>
      <h1>商品價格：{orderItem.order_detail[0].product_price}</h1>
      <h1>商品數量：{orderItem.order_detail[0].product_amount}</h1>
      <h1>訂單小計：{orderItem.subtotal_price}</h1>
      <h1>怪獸幣：{orderItem.beastie_coin}</h1>
      <h1>運費：{orderItem.shipping}</h1> */}
    </>
  );
}
export default ChaOrderItem;
