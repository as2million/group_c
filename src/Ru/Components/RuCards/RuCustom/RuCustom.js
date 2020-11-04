import React, { useState, useEffect } from 'react'
import 'Ru/Components/RuCards/RuCustom/Style.scss'
import RuArrowLeft from 'Ru/Components/RuArrowLeft/RuArrowLeft'
import RuArrowRight from 'Ru/Components/RuArrowRight/RuArrowRight'
import RuButtonB from 'Ru/Components/RuButtonB/RuButtonB'
import RuButtonC from 'Ru/Components/RuButtonC/RuButtonC'
import RuCounter from 'Ru/Components/RuCounter/RuCounter'
import RuAddCart from 'Ru/Components/RuAddCart/RuAddCart'
import RuSelection from 'Ru/Components/RuSelection/RuSelection'

// 引用共用元件
import Card from 'Share/Components/Card/Card'

// 引用圖片
import background from './Images/background.png'
import lunchBox from './Images/lunchBox.svg'
import { ReactComponent as LunchBox } from './Images/lunchBox.svg' // 將svg以元件方式引入
import cauliflower from './Images/cauliflower.svg'

function RuCustom() {
  const [moveArea1, setMoveArea1] = useState('') // 傳遞DOM給<RuArrowRight/>
  const [moveX, setMaveX] = useState(0)

  useEffect(() => {
    setMoveArea1(document.getElementById('moveArea1'))
    // return () => {}
  }, [])

  return (
    <>
      {/* <h1 style={{ textAlign: 'center', fontSize: '80px' }}>
        ----- 這頁是客製化便當 -----
      </h1> */}

      {/* 商品區 - 網頁版 s */}
      <div className="ru-custom-containerA">
        <div className="ru-custom-warp">
          <div className="ru-drop-container">
            <div className="ru-drop-warp">
              <div className="ru-box-container">
                <div className="ru-box-warp">
                  <LunchBox />
                </div>
              </div>
              <div className="ru-detail-container">
                <div className="ru-switchBtn-container">
                  <button>今日菜色</button>
                  <button>營養標示</button>
                </div>
                <div className="ru-info-container">
                  <div className="ru-info-item-container">
                    {/* 詳細資料品項1 s */}
                    <ul className="ru-info-item-warp">
                      <li className="ru-info-item ru-info-item1">
                        <div className="ru-category-container">
                          <p className="ru-category">副食</p>
                        </div>
                        <p className="ru-selectionName">香甜白飯</p>
                        <p className="ru-number">$10</p>
                      </li>
                      {/* 詳細資料品項1 e */}

                      {/* 詳細資料品項2 s */}
                      <li className="ru-info-item ru-info-item2">
                        <div className="ru-category-container">
                          <p className="ru-category">主食</p>
                        </div>
                        <p className="ru-selectionName">慢煮嫩雞胸-蒜味香草</p>
                        <p className="ru-number">$55</p>
                      </li>
                      {/* 詳細資料品項2 e */}

                      {/* 詳細資料品項3 s */}
                      <li className="ru-info-item ru-info-item3">
                        <div className="ru-category-container">
                          <p className="ru-category">配菜</p>
                        </div>
                        <p className="ru-selectionName">清炒高麗菜</p>
                        <p className="ru-number">$10</p>
                      </li>
                      {/* 詳細資料品項3 e */}

                      {/* 詳細資料品項4 s */}
                      <li className="ru-info-item ru-info-item4">
                        <div className="ru-category-container">
                          <p className="ru-category">配菜</p>
                        </div>
                        <p className="ru-selectionName">綠色嫩花椰</p>
                        <p className="ru-number">$10</p>
                      </li>
                      {/* 詳細資料品項4 e */}

                      {/* 詳細資料品項5 s */}
                      <li className="ru-info-item ru-info-item5">
                        <div className="ru-category-container">
                          <p className="ru-category">配菜</p>
                        </div>
                        <p className="ru-selectionName">黃金玉米</p>
                        <p className="ru-number">$15</p>
                      </li>
                      {/* 詳細資料品項5 e */}

                      {/* 詳細資料品項6 s */}
                      <li className="ru-info-item ru-info-item6">
                        <div className="ru-category-container">
                          <p className="ru-category">蛋</p>
                        </div>
                        <p className="ru-selectionName">水煮蛋</p>
                        <p className="ru-number">$10</p>
                      </li>
                      {/* 詳細資料品項 e */}
                    </ul>
                  </div>
                  <div className="ru-info-total-container">
                    <div className="ru-info-total-warp">
                      <div className="ru-category-container ru-hold">
                        <p className="ru-category">佔寬</p>
                      </div>
                      <h3>總金額</h3>
                      <p>$110</p>
                    </div>
                  </div>
                </div>
                <div className="ru-checkout-container">
                  <div className="ru-checkout-warp">
                    <RuCounter />
                    <RuAddCart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ru-drag-container">
            <div className="ru-drag-warp">
              <div className="ru-selection-container">
                <div className="ru-selection-warp">
                  <RuButtonB
                    text={'副食'}
                    className={'ru-buttonB'}
                    // id={'ru-buttonB-3'}
                  />
                  <RuButtonB
                    text={'主食'}
                    className={'ru-buttonB'}
                    // id={'ru-buttonB-3'}
                  />
                  <RuButtonB
                    text={'配菜'}
                    className={'ru-buttonB'}
                    // id={'ru-buttonB-3'}
                  />
                  <RuButtonB
                    text={'蛋'}
                    className={'ru-buttonB'}
                    // id={'ru-buttonB-3'}
                  />
                </div>
              </div>

              <div className="ru-species-container">
                <RuArrowLeft />
                {/* 副食 / 主食 / 配菜 / 蛋 的元件 s*/}
                <div className="ru-species-warp">
                  {/* 移動區 s */}
                  <ul
                    id="moveArea1"
                    style={{ transform: `translateX(${moveX}px)` }}
                  >
                    {/* 品項1 s*/}
                    <li className="ru-species-item ru-species-item1">
                      <div className="ru-species-img">
                        <img src={cauliflower}></img>
                      </div>
                      <div className="ru-species-info">
                        <ul>
                          <li>
                            <h4>
                              綠色嫩花椰: <span>$10</span>
                            </h4>
                          </li>
                          <li className="ru-species-calories">熱量: 50大卡</li>
                          <li className="ru-species-carbohydrates">
                            碳水化合物: 10大卡
                          </li>
                          <li className="ru-species-protein">蛋白質: 10大卡</li>
                          <li className="ru-species-fat">脂肪: 10大卡</li>
                        </ul>
                      </div>
                    </li>
                    {/* 品項1 e*/}

                    {/* 品項2 s*/}
                    <li className="ru-species-item ru-species-item2">
                      <div className="ru-species-img">
                        <img src={cauliflower}></img>
                      </div>
                      <div className="ru-species-info">
                        <ul>
                          <li>
                            <h4>
                              綠色嫩花椰: <span>$10</span>
                            </h4>
                          </li>
                          <li className="ru-species-calories">熱量: 50大卡</li>
                          <li className="ru-species-carbohydrates">
                            碳水化合物: 10大卡
                          </li>
                          <li className="ru-species-protein">蛋白質: 10大卡</li>
                          <li className="ru-species-fat">脂肪: 10大卡</li>
                        </ul>
                      </div>
                    </li>
                    {/* 品項2 e*/}

                    {/* 品項3 s*/}
                    <li className="ru-species-item ru-species-item3">
                      <div className="ru-species-img">
                        <img src={cauliflower}></img>
                      </div>
                      <div className="ru-species-info">
                        <ul>
                          <li>
                            <h4>
                              綠色嫩花椰: <span>$10</span>
                            </h4>
                          </li>
                          <li className="ru-species-calories">熱量: 50大卡</li>
                          <li className="ru-species-carbohydrates">
                            碳水化合物: 10大卡
                          </li>
                          <li className="ru-species-protein">蛋白質: 10大卡</li>
                          <li className="ru-species-fat">脂肪: 10大卡</li>
                        </ul>
                      </div>
                    </li>
                    {/* 品項3 e*/}

                    {/* 品項4 s*/}
                    <li className="ru-species-item ru-species-item4">
                      <div className="ru-species-img">
                        <img src={cauliflower}></img>
                      </div>
                      <div className="ru-species-info">
                        <ul>
                          <li>
                            <h4>
                              綠色嫩花椰: <span>$10</span>
                            </h4>
                          </li>
                          <li className="ru-species-calories">熱量: 50大卡</li>
                          <li className="ru-species-carbohydrates">
                            碳水化合物: 10大卡
                          </li>
                          <li className="ru-species-protein">蛋白質: 10大卡</li>
                          <li className="ru-species-fat">脂肪: 10大卡</li>
                        </ul>
                      </div>
                    </li>
                    {/* 品項4 e*/}

                    {/* 品項5 s*/}
                    <li className="ru-species-item ru-species-item5">
                      <div className="ru-species-img">
                        <img src={cauliflower}></img>
                      </div>
                      <div className="ru-species-info">
                        <ul>
                          <li>
                            <h4>綠色嫩花椰:$10</h4>
                          </li>
                          <li className="ru-species-calories">熱量:25大卡</li>
                          <li className="ru-species-carbohydrates">
                            碳水化合物:10大卡
                          </li>
                          <li className="ru-species-protein">蛋白質:10大卡</li>
                          <li className="ru-species-fat">脂肪:10大卡</li>
                        </ul>
                      </div>
                    </li>
                    {/* 品項5 e*/}
                  </ul>
                  {/* 移動區 e */}
                </div>
                {/*  副食 / 主食 / 配菜 / 蛋 的元件 e*/}
                <RuArrowRight moveArea1={moveArea1} />
              </div>
            </div>
          </div>
        </div>
        {/* 背景米圖 s */}
        <img src={background}></img>
        {/* 背景米圖 e */}
      </div>
      {/* 商品區 - 網頁版 e */}

      {/* 商品區 - 手機版 s */}
      <div className="ru-custom-containerC">
        <div className="ru-custom-warp">
          <div className="ru-drop-container">
            <div className="ru-drop-warp">
              <div className="ru-box-container">
                <div className="ru-box-warp">
                  <LunchBox />
                </div>
              </div>
            </div>
          </div>
          <div className="ru-drag-container">
            <div className="ru-drag-warp">
              <div className="ru-selection-container">
                <div className="ru-selection-warp">
                  <div className="ru-selectionBtn-warp ru-selectionBtn-warp1">
                    <RuButtonB
                      text={'副食'}
                      className={'ru-buttonB'} // id={'ru-buttonB-3'}
                    />
                    <RuButtonB
                      text={'主食'}
                      className={'ru-buttonB'} // id={'ru-buttonB-3'}
                    />
                  </div>
                  <div className="ru-selectionBtn-warp ru-selectionBtn-warp2">
                    <RuButtonB
                      text={'配菜'}
                      className={'ru-buttonB'} // id={'ru-buttonB-3'}
                    />
                    <RuButtonB
                      text={'蛋'}
                      className={'ru-buttonB'} // id={'ru-buttonB-3'}
                    />
                  </div>
                </div>
              </div>

              <div className="ru-species-container">
                <RuArrowLeft />
                <div className="ru-species-warp">
                  <ul>
                    {/* 品項1 s*/}
                    <li className="ru-species-item ru-species-item1">
                      <div className="ru-species-img">
                        <img src={cauliflower}></img>
                      </div>
                      <div className="ru-species-info">
                        <ul>
                          <li>
                            <h4>
                              綠色嫩花椰<span>$10</span>
                            </h4>
                          </li>
                          <li className="ru-species-calories">
                            熱量: <span>50大卡</span>
                          </li>
                          <li className="ru-species-carbohydrates">
                            碳水化合物: <span>10大卡</span>
                          </li>
                          <li className="ru-species-protein">
                            蛋白質: <span>10大卡</span>
                          </li>
                          <li className="ru-species-fat">
                            脂肪: <span>10大卡</span>
                          </li>
                        </ul>
                      </div>
                      <div className="ru-species-btn">
                        <RuButtonC text={'選擇'} />
                      </div>
                    </li>
                    {/* 品項1 e*/}

                    {/* 品項2 s*/}
                    <li className="ru-species-item ru-species-item2">
                      <div className="ru-species-img">
                        <img src={cauliflower}></img>
                      </div>
                      <div className="ru-species-info">
                        <ul>
                          <li>
                            <h4>
                              綠色嫩花椰<span>$10</span>
                            </h4>
                          </li>
                          <li className="ru-species-calories">
                            熱量: <span>50大卡</span>
                          </li>
                          <li className="ru-species-carbohydrates">
                            碳水化合物: <span>$10</span>
                          </li>
                          <li className="ru-species-protein">
                            蛋白質: <span>$10</span>
                          </li>
                          <li className="ru-species-fat">
                            脂肪: <span>$10</span>
                          </li>
                        </ul>
                      </div>
                      <div className="ru-species-btn">
                        <RuButtonC text={'選擇'} />
                      </div>
                    </li>
                    {/* 品項2 e*/}

                    {/* 品項3 s*/}
                    <li className="ru-species-item ru-species-item3">
                      <div className="ru-species-img">
                        <img src={cauliflower}></img>
                      </div>
                      <div className="ru-species-info">
                        <ul>
                          <li>
                            <h4>
                              綠色嫩花椰: <span>$10</span>
                            </h4>
                          </li>
                          <li className="ru-species-calories">
                            熱量: <span>50大卡</span>
                          </li>
                          <li className="ru-species-carbohydrates">
                            碳水化合物: <span>$10</span>
                          </li>
                          <li className="ru-species-protein">
                            蛋白質: <span>$10</span>
                          </li>
                          <li className="ru-species-fat">
                            脂肪: <span>$10</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 品項3 e*/}

                    {/* 品項4 s*/}
                    <li className="ru-species-item ru-species-item4">
                      <div className="ru-species-img">
                        <img src={cauliflower}></img>
                      </div>
                      <div className="ru-species-info">
                        <ul>
                          <li>
                            <h4>
                              綠色嫩花椰: <span>$10</span>
                            </h4>
                          </li>
                          <li className="ru-species-calories">
                            熱量: <span>50大卡</span>
                          </li>
                          <li className="ru-species-carbohydrates">
                            碳水化合物: <span>$10</span>
                          </li>
                          <li className="ru-species-protein">
                            蛋白質: <span>$10</span>
                          </li>
                          <li className="ru-species-fat">
                            脂肪: <span>$10</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 品項4 e*/}

                    {/* 品項5 s*/}
                    <li className="ru-species-item ru-species-item5">
                      <div className="ru-species-img">
                        <img src={cauliflower}></img>
                      </div>
                      <div className="ru-species-info">
                        <ul>
                          <li>
                            <h4>
                              綠色嫩花椰:<span>$10</span>
                            </h4>
                          </li>
                          <li className="ru-species-calories">
                            熱量:<span>50大卡</span>
                          </li>
                          <li className="ru-species-carbohydrates">
                            碳水化合物:<span>$10</span>
                          </li>
                          <li className="ru-species-protein">
                            蛋白質:<span>$10</span>
                          </li>
                          <li className="ru-species-fat">
                            脂肪:<span>$10</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* 品項5 e*/}
                  </ul>
                </div>
                <RuArrowRight />
              </div>

              <div className="ru-detail-container">
                <div className="ru-switchBtn-container">
                  <button>今日菜色</button>
                  <button>營養標示</button>
                </div>

                <div className="ru-info-container">
                  <div className="ru-info-item-container">
                    <ul className="ru-info-item-warp">
                      {/* 詳細資料品項1 s */}
                      <li className="ru-info-item ru-info-item1">
                        <div className="ru-category-container">
                          <p className="ru-category">副食</p>
                        </div>
                        <p className="ru-selectionName">香甜白飯</p>
                        <p className="ru-number">$10</p>
                      </li>
                      {/* 詳細資料品項1 e */}

                      {/* 詳細資料品項2 s */}
                      <li className="ru-info-item ru-info-item2">
                        <div className="ru-category-container">
                          <p className="ru-category">主食</p>
                        </div>
                        <p className="ru-selectionName">慢煮嫩雞胸-蒜味香草</p>
                        <p className="ru-number">$55</p>
                      </li>
                      {/* 詳細資料品項2 e */}

                      {/* 詳細資料品項3 s */}
                      <li className="ru-info-item ru-info-item3">
                        <div className="ru-category-container">
                          <p className="ru-category">配菜</p>
                        </div>
                        <p className="ru-selectionName">清炒高麗菜</p>
                        <p className="ru-number">$10</p>
                      </li>
                      {/* 詳細資料品項3 e */}

                      {/* 詳細資料品項4 s */}
                      <li className="ru-info-item ru-info-item4">
                        <div className="ru-category-container">
                          <p className="ru-category">配菜</p>
                        </div>
                        <p className="ru-selectionName">綠色嫩花椰</p>
                        <p className="ru-number">$10</p>
                      </li>
                      {/* 詳細資料品項4 e */}

                      {/* 詳細資料品項5 s */}
                      <li className="ru-info-item ru-info-item5">
                        <div className="ru-category-container">
                          <p className="ru-category">配菜</p>
                        </div>
                        <p className="ru-selectionName">黃金玉米</p>
                        <p className="ru-number">$15</p>
                      </li>
                      {/* 詳細資料品項5 e */}

                      {/* 詳細資料品項6 s */}
                      <li className="ru-info-item ru-info-item6">
                        <div className="ru-category-container">
                          <p className="ru-category">蛋</p>
                        </div>
                        <p className="ru-selectionName">水煮蛋</p>
                        <p className="ru-number">$10</p>
                      </li>
                      {/* 詳細資料品項 e */}
                    </ul>
                  </div>
                  <div className="ru-info-total-container">
                    <div className="ru-info-total-warp">
                      <h3>總金額</h3>
                      <p>$110</p>
                    </div>
                  </div>
                </div>

                <div className="ru-checkout-container">
                  <div className="ru-checkout-warp">
                    <RuSelection />
                    <RuAddCart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={background}></img>
      </div>
      {/* 商品區 - 網頁版 e */}
      {/* <Selecton /> */}

      {/* 背景米圖 s */}
      {/* <img src={background}></img> */}
      {/* 背景米圖 e */}
    </>
  )
}

export default RuCustom
