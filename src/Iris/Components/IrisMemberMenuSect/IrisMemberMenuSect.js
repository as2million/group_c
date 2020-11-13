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
import { ReactComponent as ProfileIcon } from './Images/profile_beastie_icon.svg'
function IrisMemberMenuSect(props) {
  const { currentUser, userFavDelete, commentDelete, beastiePointAdd } = props

  const [userCommentCount, setUserCommentCount] = useState(0) //當前會員的投稿數
  const [userToTalCoin, setUserToTalCoin] = useState(0) //當前會員的怪獸幣總額
  const [allComments, setAllComments] = useState([])
  const [myFavs, setMyFavs] = useState([])
  const [couponLists, setCouponLists] = useState([])

  // -------------- 取得投稿資料 --------------- //
  // 得到所有投稿資料
  async function getAllCommentFromServer() {
    const url = 'http://localhost:5000/member/commetList'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    // console.log(data)
    setAllComments(data)
    // console.log(allComments)
  }

  // 1. 一開始就會開始載入資料
  // 2. 在orderComment有設狀態，若狀態有變(代表有刪評論),就重抓資料給menu更新數字
  useEffect(() => {
    getAllCommentFromServer()
  }, [commentDelete])

  // 過濾出現在使用者的投稿
  const currentUserComment = allComments.filter(
    (allComments) => allComments.member === currentUser
  )

  // setUserCommentCount(currentUserComment.length) //執行這個會報錯
  // ----------------------------------------------//

  //  ----------------取得最愛資料----------------- //
  // 得到所有的最愛資料
  async function getMyFavFromServer() {
    const url = 'http://localhost:5000/member/myFavList'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    // console.log(data)
    setMyFavs(data)
  }

  // 1. 一開始就會開始載入資料
  // 2. 在myFavSect有設userFavDelete狀態，若狀態有變(代表有刪除最愛),就重抓資料給menu更新數字
  useEffect(() => {
    getMyFavFromServer()
  }, [userFavDelete])

  // console.log(currentUser)

  // 過濾出現在使用者的最愛(array)
  const currentUserFav = myFavs.filter(
    (myFavs) => myFavs.member_sid === currentUser
  )

  // ----------------------------------------------//

  // -------------- 取得怪獸幣資料 --------------- //
  // 得到所有的優惠券資料
  async function getCouponFromServer() {
    const url = 'http://localhost:5000/member/couponList'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    // console.log(data)
    setCouponLists(data)
  }

  // 1. 一開始就會開始載入資料
  // 2. 在dataEdit有設狀態，若狀態有變(代表有新增折價券),就重抓資料給menu更新數字
  useEffect(() => {
    getCouponFromServer()
  }, [beastiePointAdd])

  // 過濾出現在使用者的優惠券
  const currentUserCoupon = couponLists.filter(
    (couponLists) => couponLists.member_sid === currentUser
  )
  // 計算總值
  let sum = 0
  function calctotalCoin(currentObject, index, array) {
    sum += currentObject.coupon_type
  }
  currentUserCoupon.forEach(calctotalCoin)
  let userBeastieCoin = sum * 10
  // ----------------------------------------------//

  return (
    <>
      <div class="container iris-membermenu-container col-3 ">
        <div class="row">
          <div class="iris-menu-background d-flex">
            {/* ---------- info ----------- */}
            <div class="iris-profile-photo d-flex">
              <ProfileIcon />
            </div>

            <div class="iris-user-name">{currentUser}</div>

            <div class="iris-brief-info-wraper d-flex flex-wrap">
              <div class="iris-brief-info">
                <div>我的投稿</div>
                {/* <div>{userCommentCount}</div> */}
                <div id="iris-comment-count">{currentUserComment.length}</div>
              </div>
              <div class="iris-vl"></div>
              <div class="iris-brief-info">
                <div>我的最愛</div>
                {/* <div class="iris-fav-count">{userFavCount}</div> */}
                <div id="iris-fav-count">{currentUserFav.length}</div>
              </div>
              <div class="iris-vl"></div>
              <div class="iris-brief-info">
                <div>怪獸幣</div>
                {/* <div>{userToTalCoin}</div> */}
                <div id="iris-total-coin">{userBeastieCoin}</div>
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
