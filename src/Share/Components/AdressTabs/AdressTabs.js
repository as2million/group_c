import React, { useState, useEffect } from 'react'
import { Tabs, Sonnet, Tab, Container } from 'react-bootstrap'
import './AdressTabs.scss'
import MainPageSelectBox from 'Share/Components/Input/MainPageSelectBox'
import Button from 'Share/Components/Button/Button'

function AdressTabs(props) {
  const { placeholder, type, id } = props
  const { closeModal } = props
  // 使用的時候，
  // 幫我在你原本頁面中最外面容器，
  // 加上position-relative，
  // 切換選單就會正常出現～～

  // Acomponent
  const ComponentA = (props) => {
    return (
      <div className="component d-flex justify-content-between align-items-center ">
        <div className="jan-tab-adress-form-wrap">
          <div className="p-5">
            <form name="jan-adress-form" id="jan-adress-form">
              <p className="jan-form-announce">請填寫地址，查看免運金額</p>
              <div className="jan-adress-radio">
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
              <div className="jan-adress-select">
                <div className="iris-mainpage-select-wrapper d-flex">
                  <div className="iris-selectbar-wrapper">
                    <select
                      className="form-control iris-mainpage-select"
                      id="exampleFormControlSelect1"
                    >
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
              <div className="jan-adress-input">
                <input
                  className="form-control iris-inputH50"
                  type={type}
                  placeholder={placeholder}
                  id={id}
                />
              </div>

              <br />
              <div className="jan-adress-button float-right">
                <Button className="button-btn-y " text="確認送出" />
              </div>
            </form>
          </div>
          <div className="jan-map-results p-5 mt-4">
            <p>
              所在地點，符合滿<span>500元</span>免運費
            </p>
          </div>
        </div>
        <div className="jan-tab-adress-map"></div>
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

  //
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
      setTabActive(e.target, '.jan-adress-tab-menu__item')
      setComponent(<ComponentA />)
    }

    const tabContentB = (e) => {
      setTabActive(e.target, '.jan-adress-tab-menu__item')
      setComponent(<ComponentB name="B" />)
    }

    return (
      <div className="position-absolute position-fixed jan-tabs-bcc">
        <div className="jan-tabs">
          <div onClick={closeModal} className="jan-tabs-close"></div>
          <div className="jan-adress-tab">
            <ul className="jan-adress-tab-menu">
              <li
                className="jan-adress-tab-menu__item active"
                onClick={tabContentA}
              >
                我要外送
              </li>
              <li className="jan-adress-tab-menu__item" onClick={tabContentB}>
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

export default AdressTabs
