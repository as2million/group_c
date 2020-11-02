import React, { useState, useEffect } from 'react'
import './ChaOrderManagement.scss'
import ChaOrderManagementNotArrived from './../Cha-Order-Management-NotArrived/ChaOrderManagementNotArrived'
import ChaOrderManagementArrived from './../Cha-Order-Management-Arrived/ChaOrderManagementArrived'
import ChaOrderManagementRefund from './../Cha-Order-Management-Refund/ChaOrderManagementRefund'
import ChaOrderManagementGrouping from './../Cha-Order-Management-Grouping/ChaOrderManagementGrouping'

function ChaOrderManagement(props) {
  const chaOrderManagements = Array.from({ length: 10 })
  // 未達成
  const ComponentA = (props) => {
    return (
      <>
              {chaOrderManagements.map((_, index) => (
          <ChaOrderManagements key={index} />
        
      </>
    )
  }
  // 已達成
  const ComponentB = (props) => {
    return (
      <>
        <ChaOrderManagementArrived />
        <ChaOrderManagementArrived />
        <ChaOrderManagementArrived />
        <ChaOrderManagementArrived />
      </>
    )
  }
  // 已退費
  const ComponentC = (props) => {
    return (
      <>
        <ChaOrderManagementRefund />
        <ChaOrderManagementRefund />
        <ChaOrderManagementRefund />
        <ChaOrderManagementRefund />
      </>
    )
  }
  // 已退費
  const ComponentD = (props) => {
    return (
      <>
        <ChaOrderManagementGrouping />
        <ChaOrderManagementGrouping />
        <ChaOrderManagementGrouping />
        <ChaOrderManagementGrouping />
      </>
    )
  }
  // 切換用函式
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName)
    removeTargets.forEach((target) => {
      target.classList.remove('cha-active')
    })

    addElem.classList.add('cha-active')
  }
  const TabMenu = () => {
    const [orderComponent, setOrderComponent] = useState(<ComponentA />)

    const tabContentA = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch')
      setOrderComponent(<ComponentA />)
    }

    const tabContentB = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch')
      setOrderComponent(<ComponentB />)
    }
    const tabContentC = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch')
      setOrderComponent(<ComponentC />)
    }
    const tabContentD = (e) => {
      setTabActive(e.target, '.cha-order-mana-title-switch')
      setOrderComponent(<ComponentD />)
    }
    return (
      <>
        <div className="cha-order-mana-content-container col-9">
          <div className="cha-order-mana-content-row1">
            <div
              className="cha-order-mana-title-switch cha-active"
              onClick={tabContentA}
            >
              未送達
            </div>
            <div className="cha-order-mana-title-switch" onClick={tabContentB}>
              已送達
            </div>
            <div className="cha-order-mana-title-switch" onClick={tabContentC}>
              已退費
            </div>
            <div className="cha-order-mana-title-switch" onClick={tabContentD}>
              揪團中
            </div>
          </div>
          {/* <div className="cha-order-mana-content-row2"> */}
          <div className="cha-order-mana-border"></div>
          {/* </div> */}
          <div>{orderComponent}</div>
        </div>
      </>
    )
  }
  return (
    <>
      <TabMenu />
    </>
  )
}

export default ChaOrderManagement
