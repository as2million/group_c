import React, { useState, useEffect } from 'react'
import { Tabs, Sonnet, Tab, Container } from 'react-bootstrap'
import { Rate } from 'antd'
import 'antd/dist/antd.css'
import './JessListA.scss'

function JessListA() {
  // Aコンポーネント
  const ComponentA = (props) => {
    return (
      <div class="component">
        <h1>コンポーネント{props.name}</h1>
        <p>タブ{props.name}をクリックするとこのコンポーネントが見れます。</p>
      </div>
    )
  }

  // Bコンポーネント
  const ComponentB = (props) => {
    return (
      <div class="component">
        <h1>This component is {props.name}</h1>
        <p>Show this component which on click tab-{props.name}.</p>
      </div>
    )
  }

  // タブメニューをアクティブ・ディアクティブにする関数
  const setTabActive = (addElem, removeName) => {
    let removeTargets = document.querySelectorAll(removeName)
    removeTargets.forEach((target) => {
      target.classList.remove('active')
    })

    addElem.classList.add('active')
  }

  const TabMenu = () => {
    const [component, setComponent] = React.useState(<ComponentA name="A" />)

    const tabContentA = (e) => {
      setTabActive(e.target, '.jess-productTabMenu__item')
      setComponent(<ComponentA name="A" />)
    }

    const tabContentB = (e) => {
      setTabActive(e.target, '.jess-productTabMenu__item')
      setComponent(<ComponentB name="B" />)
    }
    return (
      <div className="container">
        <div class="jess-productTab">
          <ul class="jess-productTabMenu d-flex justify-content-center">
            <li class="jess-productTabMenu__item active" onClick={tabContentA}>
              今日菜色
            </li>
            <li class="jess-productTabMenu__item" onClick={tabContentB}>
              營養標示
            </li>
          </ul>
          {component}
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

export default JessListA
