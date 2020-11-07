import React, { useState, useEffect } from 'react'
import { Tabs, Sonnet, Tab, Container } from 'react-bootstrap'
import './AddressTabs.scss'
import Button from 'Share/Components/Button/Button'

function AddressTabs(props) {
  const { placeholder, closeModal } = props
  const { address, setAddress } = props

  // Acomponent
  const ComponentA = (props) => {
    const [tabInput, setTabInput] = useState(address)
    setAddress(tabInput)
    return (
      <div className="component d-flex justify-content-between align-items-center ">
        <div className="jan-tab-address-form-wrap">
          <div className="p-5">
            <form name="jan-address-form" id="jan-address-form">
              <p className="jan-form-announce">請填寫地址，查看免運金額</p>
              <div className="jan-address-radio">
                <input type="radio" name="location" value="tc" /> 台北市
                <input
                  className="ml-5"
                  type="radio"
                  name="location"
                  value="ntc"
                />{' '}
                新北市
              </div>
              <br />
              <div className="jan-address-select">
                <div className="iris-mainpage-select-wrapper d-flex">
                  <div className="iris-selectbar-wrapper">
                    <select
                      style={{ fontSize: '1.5rem' }}
                      className="form-control iris-mainpage-select"
                      id="exampleFormControlSelect1"
                    >
                      <option value="1" disabled selected>
                        點我選擇區域
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <div className="iris-mainpage-whitebox"></div>
                    <div className="iris-mainpage-trianglearrow" />
                  </div>
                </div>
              </div>

              <br />
              <div className="jan-address-input">
                <input
                  style={{ fontSize: '1.5rem' }}
                  className="form-control iris-inputH50"
                  type="text"
                  placeholder="請輸入地址"
                  value={tabInput}
                  onChange={(e) => setTabInput(e.target.value)}
                />
              </div>

              <br />
              <div className="jan-address-button float-right">
                <Button className="button-btn-y " text="查詢結果" />
              </div>
            </form>
          </div>
          <div className="jan-map-results p-5 mt-4">
            <p>
              所在地點，符合滿<span>500元</span>免運費
            </p>
          </div>
        </div>
        <div className="jan-tab-address-map"></div>
      </div>
    )
  }

  // B
  const ComponentB = (props) => {
    return (
      <div className="component d-flex justify-content-between ">
        <div className="jan-tab-shops-list-wrap">
          <div className="p-5">
            <p className="jan-form-announce">選擇到店自取</p>
            <div className="jan-shops-radio">
              <input type="radio" name="location" value="tc" />{' '}
              東科店:新北市汐止區新台五路一段96號1樓
              <br />
              <input type="radio" name="location" value="ntc" />
              安永鮮物_安和店:台北市大安區安和路一段111號
              <br />
              <input type="radio" name="location" value="ntc" />
              歐克法咖啡_八德店:台北市松山區八德路二段371號
              <br />
              <input type="radio" name="location" value="ntc" />
              南港店:台北市南港區重陽路263巷1號B1
              <br />
              <input type="radio" name="location" value="ntc" />
              大安店:台北市大安區和平東路二段223
              <br />
              <div className="jan-shops-button float-right">
                <Button className="button-btn-y " text="確認自取地點" />
              </div>
            </div>
          </div>
        </div>
        <div className="jan-tab-shops-map"></div>
      </div>
    )
  }

  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName)
    removeTargets.forEach((target) => {
      target.classList.remove('active')
    })

    addElem.classList.add('active')
  }

  const TabMenu = () => {
    const [component, setComponent] = React.useState(<ComponentA />)

    const tabContentA = (e) => {
      setTabActive(e.target, '.jan-address-tab-menu__item')
      setComponent(<ComponentA />)
    }

    const tabContentB = (e) => {
      setTabActive(e.target, '.jan-address-tab-menu__item')
      setComponent(<ComponentB name="B" />)
    }

    return (
      <div className="position-absolute position-fixed jan-tabs-bcc">
        <div className="jan-tabs">
          <div onClick={closeModal} className="jan-tabs-close"></div>
          <div className="jan-address-tab">
            <ul className="jan-address-tab-menu">
              <li
                className="jan-address-tab-menu__item active"
                onClick={tabContentA}
              >
                我要外送
              </li>
              <li className="jan-address-tab-menu__item" onClick={tabContentB}>
                我要自取
              </li>
            </ul>
            <div className=" d-flex">{component}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <TabMenu />
    </>
  )
}

export default AddressTabs
