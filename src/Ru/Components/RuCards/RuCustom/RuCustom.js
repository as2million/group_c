import React, { useState, useEffect } from 'react'
import 'Ru/Components/RuCards/RuCustom/Style.scss'
import RuArrowLeft from 'Ru/Components/RuArrowLeft/RuArrowLeft'
import RuArrowRight from 'Ru/Components/RuArrowRight/RuArrowRight'
import RuButtonB from 'Ru/Components/RuButtonB/RuButtonB'
import RuButtonC from 'Ru/Components/RuButtonC/RuButtonC'
import RuCounter from 'Ru/Components/RuCounter/RuCounter'
import RuAddCart from 'Ru/Components/RuAddCart/RuAddCart'
import RuSelection from 'Ru/Components/RuSelection/RuSelection'
import RuPriceA from 'Ru/Components/RuPriceA/RuPriceA' // 資訊區價格 網頁版
import RuCalA from 'Ru/Components/RuCalA/RuCalA' // 資訊區熱量 網頁版
import RuRiceA from 'Ru/Components/RuFoodItems/RuRiceA/RuRiceA'
import RuMeetA from 'Ru/Components/RuFoodItems/RuMeetA/RuMeetA'
import RuVegetableA from 'Ru/Components/RuFoodItems/RuVegetableA/RuVegetableA'
import RuEggA from 'Ru/Components/RuFoodItems/RuEggA/RuEggA'

// 引用共用元件
import Card from 'Share/Components/Card/Card'
import cauliflower from './Images/cauliflower.svg'
import cauliflowerAfter from './Images/cauliflowerAfter.svg'
import cabage from './Images/cabage.svg'
import cabageAfter from './Images/cabageAfter.svg'
import corn from './Images/corn.svg'
import cornAfter from './Images/cornAfter.svg'
import egg from './Images/egg.svg'
import eggAfter from './Images/eggAfter.svg'
import poachedEgg from './Images/poachedEgg.svg'
import poachedEggAfter from './Images/poachedEggAfter.svg'
import rice from './Images/rice.svg'
import riceAfter from './Images/riceAfter.svg'
import shrimp from './Images/shrimp.svg'
import shrimpAfter from './Images/shrimpAfter.svg'

// 引用圖片
import background from './Images/background.png'
import { ReactComponent as LunchBox } from './Images/lunchBox.svg' // 將svg以元件方式引入
import Product from 'Cha/pages-demo/Product'

function RuCustom() {
  const [moveX, setMoveX] = useState(0) // 選項區滑動變亮(RuArrowRight / RuArrowLeft 調整)
  const [isPrice, setIsPrice] = useState(true) // 是否開啟價格標示
  const [isCal, setIsCal] = useState(false) // 是否開啟營養標示
  const [selection, setSelection] = useState('rice') // 選擇開啟哪個菜色選區
  const [limitX, setLimitX] = useState() // 右滑極限值(RuButtonB可以調不同選項區的極限值)
  const [imgA, setImgA] = useState()
  const [imgB, setImgB] = useState()
  const [imgC, setImgC] = useState()
  const [imgD, setImgD] = useState()
  const [imgE, setImgE] = useState()
  const [imgF, setImgF] = useState()
  // 設定飯類容器的優先權
  const [priority, setPriority] = useState('')

  // RuRice資訊
  const [update, setUpdata] = useState(false)
  const [data, setData] = useState('')
  // const [riceName1, setRiceName1] = useState('')
  // const [ricePrice1, setRicePrice1] = useState('')
  // const [riceCalories, setRiceCalories1] = useState('')
  // const [riceCarbohydrate1, setRiceCarbohydrate1] = useState('')
  // const [riceFat1, setRiceFat1] = useState('')

  // 設定 今日菜色(價格) 資訊
  const [riceName, setRiceName] = useState('')
  const [ricePrice, setRicePrice] = useState(0)
  const [riceCal, setRiceCal] = useState(0)
  const [meetName, setMeetName] = useState('')
  const [meetPrice, setMeetPrice] = useState(0)
  const [meetCal, setMeetCal] = useState(0)
  const [eggName, setEggName] = useState('')
  const [eggPrice, setEggPrice] = useState(0)
  const [eggCal, setEggtCal] = useState(0)
  const [vegNameA, setVegNameA] = useState('')
  const [vegPriceA, setVegPriceA] = useState(0)
  const [vegCalA, setVegCalA] = useState(0)
  const [vegNameB, setVegNameB] = useState('')
  const [vegPriceB, setVegPriceB] = useState(0)
  const [vegCalB, setVegCalB] = useState(0)
  const [vegNameC, setVegNameC] = useState('')
  const [vegPriceC, setVegPriceC] = useState(0)
  const [vegCalC, setVegCalC] = useState(0)
  function switchPrice() {
    setIsPrice(true)
    setIsCal(false)
  }

  function switchCal() {
    setIsPrice(false)
    setIsCal(true)
  }

  async function fetchApi() {
    const url = 'http://localhost:5000/product/custom_list'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const myJson = await response.json()
    // data會是一個array
    // console.log(data)
    // console.log(data[0].productname)

    // setTotal(total.push(data))
    // setTotal(data)
    setData(myJson)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  useEffect(() => {
    console.log(data)
    // console.log('執行useEffect')
    // 品項置入便當盒 邏輯
    const items = document.querySelectorAll('.ru-items')
    // console.log(items)
    const puts = document.querySelectorAll('.ru-put')
    const img = document.querySelector('#ru-areaF .ru-put')
    // console.log(puts)
    const $dropTarget = document.getElementById('ru-dropArea')
    const boxA = document.getElementById('ru-areaA')
    const boxB = document.getElementById('ru-areaB')
    const boxC = document.getElementById('ru-areaC')
    const boxD = document.getElementById('ru-areaD')
    const boxE = document.getElementById('ru-areaE')
    const boxF = document.getElementById('ru-areaF')
    // console.log($dragSource)
    // console.log($dropTarget)

    items.forEach((i) => {
      i.addEventListener('dragstart', dragStart) // drag
    })
    puts.forEach((i) => {
      i.addEventListener('dragstart', dragStart) // drag
    })
    // $dragSource.addEventListener('drag', drag) // drag
    // $dragSource.addEventListener('dragend', dragend) // drag
    $dropTarget.addEventListener('dragenter', dragenter) // drop
    $dropTarget.addEventListener('dragover', dragover) // drop
    $dropTarget.addEventListener('dragleave', dragleave) // drag
    $dropTarget.addEventListener('drop', dropped) // drop

    // 來源 - 開始拖曳時
    function dragStart(e) {
      // console.log('dragStart', e.target.id)
      if (e.target.classList.contains('ru-rice')) {
        // 如果是白飯選區內的選項
        setPriority('100') // 白飯容器就優先
      }
      e.dataTransfer.setData('text/plain', e.target.id) // 把 source 的id往drop事件傳遞
    }

    // 來源 - 拖曳中時
    function drag(e) {}

    // 來源 - 拖曳結束時
    function dragend(e) {}

    // 目的地 - 進到放置區時
    function dragenter(e) {
      e.preventDefault()
      e.stopPropagation()
    }

    // 目的地 - 進到放置區時拖動(反覆觸發)
    function dragover(e) {
      e.preventDefault()
      e.stopPropagation()
    }

    // 目的地 - 離開放置區時
    function dragleave(e) {}

    // 目的地 - 放下時
    function dropped(e) {
      console.log(e.target)
      // console.log('dropped')
      // console.log(e.target, e.dataTransfer.getData('text/plain', e.target.id))
      //增刪元素
      console.log(e.dataTransfer.getData('text/plain', e.target.id)) // 拿到dragStart事件的id
      setPriority('0') // 白飯容器優先結束
      if (
        // 放到這些區域可以丟棄該品項
        e.target !== boxA &&
        e.target !== boxB &&
        e.target !== boxC &&
        e.target !== boxD &&
        e.target !== boxE &&
        e.target !== boxF
      ) {
        switch (e.dataTransfer.getData('text/plain', e.target.id)) {
          case 'ru-put1':
            setImgA()
            break
          case 'ru-put2':
            setImgB()
            break
          case 'ru-put3':
            setImgC()
            break
          case 'ru-put4':
            setImgD()
            break
          case 'ru-put5':
            setImgE()
            break
          case 'ru-put6':
            setImgF()
            break
        }
      } else if (e.target === boxA) {
        // 配菜A區
        // 如果放開滑鼠的地方是在 boxA 身上
        switch (e.dataTransfer.getData('text/plain', e.target.id)) {
          case 'ru-veg-1': // 'ru-veg-1'
            setImgA(cauliflowerAfter)
            setVegNameA('鮮綠花椰菜')
            setVegPriceA(10)
            // setVegCalA()
            break
          case 'ru-veg-2':
            setImgA(cabageAfter)
            setVegNameA('清炒高麗菜')
            setVegPriceA(10)
            // setVegCalA()
            break
          case 'ru-veg-3':
            setImgA(cornAfter)
            setVegNameA('黃金玉米粒')
            setVegPriceA(10)
            // setVegCalA()
            break
        }
      } else if (e.target === boxB) {
        // 配菜B區
        // 如果放開滑鼠的地方是在 boxB 身上
        switch (e.dataTransfer.getData('text/plain', e.target.id)) {
          case 'ru-veg-1': // 'ru-veg-1'
            setImgB(cauliflowerAfter)
            setVegNameB('鮮綠花椰菜')
            setVegPriceB(10)
            // setVegCalB()
            break
          case 'ru-veg-2':
            setImgB(cabageAfter)
            setVegNameB('清炒高麗菜')
            setVegPriceB(10)
            // setVegCalB()
            break
          case 'ru-veg-3':
            setImgB(cornAfter)
            setVegNameB('黃金玉米粒')
            setVegPriceB(10)
            // setVegCalB()
            break
        }
      } else if (e.target === boxC) {
        // 配菜C區
        // 如果放開滑鼠的地方是在 boxC 身上
        switch (
          e.dataTransfer.getData('text/plain', e.target.id) // 當source的id是
        ) {
          case 'ru-veg-1': // 'ru-veg-1'
            setImgC(cauliflowerAfter) // 就改變state值
            setVegNameC('鮮綠花椰菜')
            setVegPriceC(10)
            // setVegCalC()
            break
          case 'ru-veg-2':
            setImgC(cabageAfter)
            setVegNameC('清炒高麗菜')
            setVegPriceC(10)
            // setVegCalC()
            break
          case 'ru-veg-3':
            setImgC(cornAfter)
            setVegNameC('黃金玉米粒')
            setVegPriceC(10)
            // setVegCalC()
            break
        }
      } else if (
        e.target === boxD ||
        e.target === boxE ||
        e.target === boxF ||
        e.target === img
      ) {
        // 白飯區
        switch (
          e.dataTransfer.getData('text/plain', e.target.id) // 當source的id是
        ) {
          case 'ru-rice-1': // 'ru-rice-1'
            setImgD(riceAfter) // 就放入放置後圖片
            setRiceName('香甜白飯')
            setRicePrice(10)
            setRiceCal(353)
            break
          // case 'ru-rice-2':
          //   setImgD(riceAfter)
          //   break
          case 'ru-egg-1': // 'ru-egg-1'
            setImgE(eggAfter) // 就放入放置後圖片
            setEggName('白煮蛋')
            setEggPrice(10)
            // setEggCal()
            break
          case 'ru-egg-2':
            setImgE(poachedEggAfter)
            setEggName('溏心蛋')
            setEggPrice(15)
            // setEggCal()
            break
          case 'ru-meet-1': // 'ru-meet-1'
            setImgF(shrimpAfter) // 就放入放置後圖片
            setMeetName('火烤萊姆蝦')
            setMeetPrice(60)
            // setMeetCal()
            break
        }
      }
    }

    function dragleave(e) {
      // console.log('dragleave')
    }

    return () => {}
  }, [imgA, imgB, imgC, imgD, imgE, imgF, selection]) // 要加入selection, 不然切換菜色選區後抓不到真實DOM

  return (
    <>
      {/* <h1 style={{ textAlign: 'center', fontSize: '80px' }}>
        ----- 這頁是客製化便當 -----
      </h1> */}
      {/* <div>123 {data[5].sid}</div> */}
      {/* 商品區 - 網頁版 s */}
      <div className="ru-custom-containerA" id="ru-dropArea">
        <div className="ru-custom-warp" id="ru-dropOutAreaA">
          <div className="ru-drop-container" id="ru-dropOutAreaB">
            <div className="ru-drop-warp" id="ru-dropOutAreaC">
              <div className="ru-box-container">
                <div className="ru-box-warp">
                  {/* 放置菜色A區 s*/}
                  <div id="ru-areaA">
                    <img
                      src={imgA}
                      draggable="true"
                      className="ru-put"
                      id="ru-put1"
                    ></img>
                  </div>
                  {/* 放置菜色A區 e*/}
                  {/* 放置菜色B區 s*/}
                  <div id="ru-areaB">
                    <img
                      src={imgB}
                      draggable="true"
                      className="ru-put"
                      id="ru-put2"
                    ></img>
                  </div>
                  {/* 放置菜色B區 e*/}
                  {/* 放置菜色C區 s*/}
                  <div id="ru-areaC">
                    <img
                      src={imgC}
                      draggable="true"
                      className="ru-put"
                      id="ru-put3"
                    ></img>
                  </div>
                  {/* 放置菜色C區 e*/}
                  {/* 放置菜色D區 s*/}
                  <div id="ru-areaD" style={{ zIndex: priority }}>
                    <img
                      src={imgD}
                      draggable="true"
                      className="ru-put"
                      id="ru-put4"
                    ></img>
                  </div>
                  {/* 放置菜色D區 e*/}
                  {/* 放置菜色E區 s*/}
                  <div id="ru-areaE">
                    <img
                      src={imgE}
                      draggable="true"
                      className="ru-put"
                      id="ru-put5"
                    ></img>
                  </div>
                  {/* 放置菜色E區 e*/}
                  {/* 放置菜色F區 s*/}
                  <div id="ru-areaF">
                    <img
                      src={imgF}
                      draggable="true"
                      className="ru-put"
                      id="ru-put6"
                    ></img>
                  </div>
                  {/* 放置菜色F區 e*/}
                  <LunchBox />
                </div>
              </div>
              <div className="ru-detail-container" id="ru-dropOutAreaD">
                <div className="ru-switchBtn-container">
                  {/* 是否開啟價格標示 */}
                  <button id={isPrice && 'ru-active'} onClick={switchPrice}>
                    今日菜色
                  </button>
                  {/* 是否開啟營養標示 */}
                  <button id={isCal && 'ru-active'} onClick={switchCal}>
                    營養標示
                  </button>
                </div>
                <div className="ru-info-container">
                  {isPrice && (
                    <RuPriceA
                      riceName={riceName}
                      ricePrice={ricePrice}
                      meetName={meetName}
                      meetPrice={meetPrice}
                      eggName={eggName}
                      eggPrice={eggPrice}
                      vegNameA={vegNameA}
                      vegPriceA={vegPriceA}
                      vegNameB={vegNameB}
                      vegPriceB={vegPriceB}
                      vegNameC={vegNameC}
                      vegPriceC={vegPriceC}
                    />
                  )}
                  {isCal && (
                    <RuCalA
                      riceName={riceName}
                      riceCal={riceCal}
                      meetName={meetName}
                      meetCal={meetCal}
                      eggName={eggName}
                      eggCal={eggCal}
                      vegNameA={vegNameA}
                      vegCalA={vegCalA}
                      vegNameB={vegNameB}
                      vegCalB={vegCalB}
                      vegNameC={vegNameC}
                      vegCalC={vegCalC}
                    />
                  )}
                </div>
                <div className="ru-checkout-container">
                  <div className="ru-checkout-warp">
                    <RuCounter />
                    <RuAddCart
                      id={'addCart-btn-custom'}
                      parentId={'addCart-btn-warp-custom'}
                    />
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
                    id={'ru-buttonB-rice'}
                    selection={selection}
                    setSelection={setSelection}
                    moveX={moveX}
                    setMoveX={setMoveX}
                    limitX={limitX} // 調配右滑極限值
                    setLimitX={setLimitX} // 調配右滑極限值
                  />
                  <RuButtonB
                    text={'主食'}
                    id={'ru-buttonB-meet'}
                    selection={selection}
                    setSelection={setSelection}
                    moveX={moveX}
                    setMoveX={setMoveX}
                    limitX={limitX} // 調配右滑極限值
                    setLimitX={setLimitX} // 調配右滑極限值
                  />
                  <RuButtonB
                    text={'配菜'}
                    id={'ru-buttonB-vegetable'}
                    selection={selection}
                    setSelection={setSelection}
                    moveX={moveX}
                    setMoveX={setMoveX}
                    limitX={limitX} // 調配右滑極限值
                    setLimitX={setLimitX} // 調配右滑極限值
                  />
                  <RuButtonB
                    text={'蛋'}
                    id={'ru-buttonB-egg'}
                    selection={selection}
                    setSelection={setSelection}
                    moveX={moveX}
                    setMoveX={setMoveX}
                    limitX={limitX} // 調配右滑極限值
                    setLimitX={setLimitX} // 調配右滑極限值
                  />
                </div>
              </div>

              <div className="ru-species-container">
                <RuArrowLeft moveX={moveX} setMoveX={setMoveX} />
                {/* 副食 / 主食 / 配菜 / 蛋 的元件 s*/}
                <div className="ru-species-warp">
                  {/* 移動區 s */}
                  <ul
                    id="moveArea1"
                    style={{ transform: `translateX(${moveX}px)` }}
                  >
                    {selection === 'rice' && <RuRiceA />}
                    {selection === 'meet' && <RuMeetA />}
                    {selection === 'vegetable' && <RuVegetableA />}
                    {selection === 'egg' && <RuEggA />}
                    {/*  副食 / 主食 / 配菜 / 蛋 的元件 e*/}
                  </ul>
                  {/* 移動區 e */}
                </div>
                <RuArrowRight
                  moveX={moveX}
                  setMoveX={setMoveX}
                  limitX={limitX}
                  setLimitX={setLimitX}
                />
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
                      // id={'ru-buttonB-rice'}
                    />
                    <RuButtonB
                      text={'主食'}
                      // id={'ru-buttonB-meet'}
                    />
                  </div>
                  <div className="ru-selectionBtn-warp ru-selectionBtn-warp2">
                    <RuButtonB
                      text={'配菜'}
                      // id={'ru-buttonB-vegetable'}
                    />
                    <RuButtonB
                      text={'蛋'}
                      // id={'ru-buttonB-egg'}
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
                    <RuAddCart
                      id={'addCart-btn-custom'}
                      parentId={'addCart-btn-warp-custom'}
                    />
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
