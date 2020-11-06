import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './IrisMemberMenuSect.scss'
import { ReactComponent as UserProfileIcon } from './Images/user_profile.svg'
import { ReactComponent as BeastieIcon } from './Images/beastie_icon.svg'
import { ReactComponent as OrderIcon } from './Images/order_icon.svg'
import { ReactComponent as PlateIcon } from './Images/plate_icon.svg'
import { ReactComponent as GroupOrderIcon } from './Images/group_order.svg'
import { ReactComponent as MyFavIcon } from './Images/my_fav.svg'
import { ReactComponent as MyCommentIcon } from './Images/my_comment.svg'

function IrisMemberMenuSect(props) {
  const { currentUser } = props

  let userinfo = []
  getData()
  // 拿資料庫會員資料
  async function getData() {
    const url = 'http://localhost:5000/member/login'
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    userinfo = await response.json()
  }

  return (
    <>
      <div class="container iris-membermenu-container col-3 ">
        <div class="row">
          <div class="iris-menu-background d-flex">
            {/* ---------- info ----------- */}
            <div class="iris-profile-photo"></div>

            <div class="iris-user-name">{currentUser}</div>

            <div class="iris-brief-info-wraper d-flex flex-wrap">
              <div class="iris-brief-info">
                <div>我的組合</div>
                <div>8</div>
              </div>
              <div class="iris-vl"></div>
              <div class="iris-brief-info">
                <div>我的最愛</div>
                <div>8</div>
              </div>
              <div class="iris-vl"></div>
              <div class="iris-brief-info">
                <div>怪獸幣</div>
                <div>480</div>
              </div>
            </div>
            {/* ---------- menu ----------- */}
            <div class="iris-mune-item-wrapper d-flex flex-wrap">
              <div
                class="iris-menu-item d-flex"
                onClick={() => {
                  props.history.push('/memberUserprofile')
                }}
              >
                <UserProfileIcon class="iris-menu-icon" />
                <div class="iris-menu-text">個人資料</div>{' '}
              </div>

              <div class="iris-menu-hr"></div>
              <div
                class="iris-menu-item d-flex"
                onClick={() => {
                  props.history.push('/beastiePoint')
                }}
              >
                <BeastieIcon class="iris-menu-icon" />
                <div class="iris-menu-text">怪獸幣</div>
              </div>

              <div class="iris-menu-hr"></div>

              <div
                class="iris-menu-item d-flex"
                onClick={() => {
                  props.history.push('/getCoupon')
                }}
              >
                <OrderIcon class="iris-menu-icon" />
                <div class="iris-menu-text">專屬優惠</div>
              </div>

              <div class="iris-menu-hr"></div>

              <div
                class="iris-menu-item d-flex"
                onClick={() => {
                  props.history.push('/orderManagement')
                }}
              >
                <PlateIcon class="iris-menu-icon" />
                <div class="iris-menu-text">訂單管理</div>
              </div>

              <div class="iris-menu-hr"></div>

              <div
                class="iris-menu-item d-flex"
                onClick={() => {
                  props.history.push('/groupOrder')
                }}
              >
                <GroupOrderIcon class="iris-menu-icon" />
                <div class="iris-menu-text">揪團</div>
              </div>

              <div class="iris-menu-hr"></div>

              <div
                class="iris-menu-item d-flex"
                onClick={() => {
                  props.history.push('/myFav')
                }}
              >
                <MyFavIcon class="iris-menu-icon" />
                <div class="iris-menu-text">我的最愛</div>
              </div>

              <div class="iris-menu-hr"></div>

              <div
                class="iris-menu-item d-flex"
                onClick={() => {
                  props.history.push('/orderComment')
                }}
              >
                <MyCommentIcon class="iris-menu-icon" />
                <div class="iris-menu-text">我的投稿</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(IrisMemberMenuSect)
