import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Link, Switch } from 'react-router-dom';
import './ChaOrderItem.scss';
import UpdateCartToLocalStorage from 'Share/Components/Tools/UpdateCartToLocalStorage';

// import { Button, Collapse } from 'react-bootstrap';
function ChaOrderItem(props) {
  const { orderItem, handleCartNumber } = props;

  // 訂單明細的內容JSX
  const ComponentOrderDetail = (props) => {
    const { orderItem } = props;
    return (
      <>
        <div className="cha-order-detail-container container">
          <div class="cha-order-detail-header row">
            <span class="col-5">商品名稱</span>
            <span class="col-2">商品單價</span>
            <span class="col-3">商品數量</span>
          </div>
          <div className="cha-horizontal-line-in-order row"></div>
          {orderItem.order_detail.map((item, value) => (
            <div className="cha-detail-hover row">
              <span className="col-5">{item.product_name}</span>
              <span className="col-2">${item.product_price}</span>
              <span className="col-3">X {item.product_amount}</span>
            </div>
          ))}
          <div className="cha-horizontal-line-in-order row"></div>
          <div className="cha-detail-hover row">
            <span className="col-7">小計</span>
            <span className="col-3">X {orderItem.total_amount}</span>
            <span className="col-2 cha-text-left">
              ${orderItem.subtotal_price}
            </span>
          </div>
          <div className="cha-detail-hover row justify-content-between">
            <span>運費</span>
            <span>${orderItem.shipping}</span>
          </div>
          <div className="cha-detail-hover row justify-content-between">
            <span>怪獸幣</span>
            <span>-${orderItem.beastie_coin}</span>
          </div>
          <div className="cha-detail-hover row  justify-content-between">
            <span>餐具</span>
            <span>{false ? '是' : orderItem.tableware}</span>
          </div>
          <div className="cha-horizontal-line-in-order row"></div>
          <div className="cha-detail-hover row justify-content-between">
            <span>訂單總額</span>
            <span> ${orderItem.total_price}</span>
          </div>
        </div>
      </>
    );
  };
  // 餐點評價的內容JSX
  const ComponentMealComment = (props) => {
    // const { orderItem } = props;
    return (
      <>
        <div className="cha-order-detail-container container">
          <div class="row cha-order-detail-header">
            <span class="col-5">商品名稱</span>
            <span class="col-2">商品單價</span>
            <span class="col-3">商品數量</span>
          </div>
          <div className="cha-horizontal-line-in-order row"></div>
          {orderItem.order_detail.map((item, value) => (
            <div className="row">
              <span className="col-5">{item.product_name}</span>
              <span className="col-2">${item.product_price}</span>
              <span className="col-3">X {item.product_amount}</span>
              <span className="col-2">
                <input
                  type="button"
                  value="我要評價"
                  className="cha-detail-btn"
                />
              </span>
            </div>
          ))}
        </div>
      </>
    );
  };
  // 餐點評價的內容JSX
  const ComponentReceipt = (props) => {
    // const { orderItem } = props;
    return (
      <>
        <div className="cha-order-detail-container container d-flex justify-content-center">
          <div className="cha-receipt-demo"></div>
        </div>
      </>
    );
  };
  // 切換用函式
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName);
    removeTargets.forEach((target) => {
      target.classList.remove('cha-active-detail');
    });

    addElem.classList.add('cha-active-detail');
  };
  const TabMenu = (props) => {
    const { orderItem } = props;
    const [orderDetailComponent, setOrderDetailComponent] = useState();
    // const [open, setOpen] = useState(false);
    const tabContentA = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderDetailComponent(<ComponentOrderDetail orderItem={orderItem} />);
    };

    const tabContentB = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderDetailComponent(<ComponentMealComment orderItem={orderItem} />);
    };
    const tabContentC = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch');
      setOrderDetailComponent(<ComponentReceipt orderItem={orderItem} />);
    };

    return (
      <>
        <div className="cha-order-item-container">
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
                    ${orderItem.total_price}
                  </span>
                </span>
                <span className="cha-order-divider"> | </span>
                <span>
                  <span> 訂單狀態: </span>
                  <span> </span>
                  <span className="cha-order-orange">
                    {orderItem.order_state}
                  </span>
                </span>
              </div>
              <div className="cha-order-column2-row2">
                <span> 取餐聯絡人: </span>
                <span>{orderItem.take_person}</span>
              </div>
              <div className="cha-order-column2-row3">
                <span> 取餐時間: </span>
                <span>{orderItem.take_date.slice(0, 10)}</span>
                <span> </span>
                <span>{orderItem.take_time} </span>
                <span className="cha-order-divider"> | </span>
                <span> 取餐方式: </span>
                <span>{!orderItem.take_way ? '自取' : orderItem.take_way}</span>
              </div>

              <div className="cha-order-column2-row4">
                <span>
                  <span> 取餐地址: </span>
                  <span>{orderItem.take_address}</span>
                </span>
              </div>
              <div className="cha-order-column2-row5">
                <span onClick={tabContentA}>
                  {/* <span className="cha-reset-display">
                  <Button
                  onClick={() => setOpen(true)}
                  // onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text" aria-expanded={open}> */}
                  訂單明細
                  {/* </Button>
                  </span> */}
                </span>
                <span
                  className="cha-order-mana-title-switch"
                  onClick={tabContentB}
                >
                  用餐評價
                </span>
                <span
                  className="cha-order-mana-title-switch"
                  onClick={tabContentC}
                >
                  查閱發票
                </span>
                {/* <!-- <span> 怪獸對決 </span> --> */}
              </div>
            </div>

            <div className="cha-order-column3-btn">
              <div className="cha-order-in-column3-control-height">
                {(orderItem.order_state === '已送達' ||
                  orderItem.order_state === '已取消/已退費') && (
                  <Link to="/cart">
                    <input
                      type="button"
                      value="再次訂購"
                      onClick={() => {
                        orderItem.order_detail.forEach((item) =>
                          UpdateCartToLocalStorage({
                            id: item.sid,
                            productName: item.product_name,
                            productPrice: item.product_price,
                            productAmount: item.product_amount,
                          })
                        );
                        // props.history.push('/cart');
                        orderItem.order_detail.forEach((item) =>
                          handleCartNumber('minus', item.product_amount)
                        );
                      }}
                    />
                  </Link>
                )}
                {orderItem.order_state === '未送達' && (
                  <input
                    type="button"
                    value="取消/退費"
                    className="cha-order-btn-858585"
                  />
                )}
                {orderItem.order_state === '揪團中' && (
                  <input type="button" value="加入點餐" />
                )}
                {orderItem.order_state === '揪團中' && (
                  <input type="button" value="分享連結" />
                )}
                {orderItem.order_state === '揪團中' && (
                  <input type="button" value="收單" />
                )}
              </div>
            </div>
          </div>
          {/* <Collapse in={open}> */}
          <div>{orderDetailComponent}</div>
          {/* </Collapse> */}
        </div>
      </>
    );
  };
  return (
    <>
      <TabMenu orderItem={orderItem} />
    </>
  );
}
export default withRouter(ChaOrderItem);
