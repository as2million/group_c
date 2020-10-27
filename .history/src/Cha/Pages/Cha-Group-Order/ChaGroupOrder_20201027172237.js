import React, { useState, useEffect } from 'react'

import ChaGroupProgressBar from 'Cha/Components/Cha-Group-ProgressBar/ChaGroupProgressBar'

import 'Cha/Pages/Cha-Group-Order/ChaGroupOrder.scss'

function ChaGroupOrder(props) {
  return (
    <>
      <ChaGroupProgressBar />
      <div className="cha-group-breadcrumbs-container">
        <div className="cha-group-breadcrumbs-row">
          <div className="cha-group-breadcrumbs-text">
            <div className="cha-group-breadcrumbs-icon">
              <div className="cha-group-create-icon"></div>
            </div>
            <span className="cha-group-create-text">建立揪團</span>
          </div>
          <div className="cha-group-arrow-icon"></div>
          <div className="cha-group-breadcrumbs-text">
            <div className="cha-group-breadcrumbs-icon">
              <div className="cha-group-search-icon"></div>
            </div>
            <span className="cha-group-search-text">呼朋引伴</span>
          </div>
          <div className="cha-group-arrow-icon"></div>
          <div className="cha-group-breadcrumbs-text">
            <div className="cha-group-breadcrumbs-icon">
              <div className="cha-group-menu-icon"></div>
            </div>
            <span className="cha-group-menu-text">作伙點餐</span>
          </div>
        </div>
      </div>
      <div className="cha-group-create-card">
        <div className="cha-group-create-header-div">
          <div className="cha-group-create-header">建立揪團</div>
        </div>
        {/* 聯絡人姓名 */}
        <div className="form-group">
          <label htmlFor="cha-step2-1-name">群組名稱</label>
          <input
            type="text"
            className="form-control cha-step2-1-name"
            id="cha-step2-1-name"
            name="cha-step2-1-name"
            placeholder="請填寫姓名"
          />
        </div>
        {/* 聯絡人姓名 */}
        <div className="form-group">
          <label htmlFor="cha-step2-1-name">揪團人姓名</label>
          <input
            type="text"
            className="form-control cha-step2-1-name"
            id="cha-step2-1-name"
            name="cha-step2-1-name"
            placeholder="請填寫姓名"
          />
        </div>
        {/* 聯絡人姓名 */}
        <div className="form-group">
          <label htmlFor="cha-step2-1-name">取餐方式</label>
          <input
            type="text"
            className="form-control cha-step2-1-name"
            id="cha-step2-1-name"
            name="cha-step2-1-name"
            placeholder="請填寫姓名"
          />
        </div>
        {/* 取餐日期、時間 */}
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="cha-step2-3-take-date">取餐日期</label>
            <input
              type="text"
              className="form-control cha-step2-3-take-date"
              id="cha-step2-3-take-date"
              name="cha-step2-3-take-date"
            />
          </div>
          <div className="form-group col">
            <label htmlFor="cha-step2-4-take-time">取餐時間</label>
            <select
              id="cha-step2-4-take-time"
              className="form-control cha-step2-4-take-time"
            >
              <option selected>請選擇</option>
              <option>11:00 ~ 11:30</option>
              <option>11:30 ~ 12:00</option>
              <option>12:30 ~ 13:00</option>
              <option>13:30 ~ 13:00</option>
            </select>
          </div>
        </div>

        {/* 提交按鈕 */}
        <div className="cha-shopping-cart-btn-div">
          <input type="button" value="送出" className="cha-shopping-cart-btn" />
        </div>
      </div>
      <div c>
    </>
  )
}
export default ChaGroupOrder
