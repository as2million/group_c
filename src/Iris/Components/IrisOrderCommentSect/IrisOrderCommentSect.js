import React, { useState, useEffect } from 'react'
import './IrisOrderCommentSect.scss'
import { ReactComponent as WaveLine } from './Images/wave_line.svg'
import { ReactComponent as IrisMemberLine } from './Images/iris_member_line.svg'
import star from './Images/star.svg'
import IrisTextArea from './IrisTextArea/IrisTextArea'
import { id } from 'date-fns/locale'
// import InputH40 from './../../../Share/Components/Input/InputH40';

function IrisUserCommentSect(props) {
  const { currentUser } = props
  const [allComment, setAllComment] = useState([])

  // ---------- 改留言 ---------- //
  const changeComment = (e) => {
    // 得到top parent的id
    const thisId = e.target.parentNode.parentNode.parentNode.id

    // 留言,編輯,刪除的字消失，出現輸入框
    const originalComment = document.querySelector(
      '#' + thisId + ' ' + '.iris-comment-text'
    )
    document.querySelector(
      '#' + thisId + ' ' + '.iris-text-area .iris-textarea'
    ).value = originalComment.innerText

    const commentInput = document.querySelector(
      '#' + thisId + ' ' + '.iris-text-area'
    )
    const editAndDelete = document.querySelector(
      '#' + thisId + ' ' + '.iris-comment-edit-delete'
    )
    const commentUpdate = document.querySelector(
      '#' + thisId + ' ' + '.iris-comment-update'
    )
    originalComment.style.display = 'none'
    commentInput.style.display = 'block'
    editAndDelete.style.display = 'none'
    commentUpdate.style.display = 'block'
  }

  // ------- 點確認更新留言 -------- //
  const doCommentUpdate = (e) => {
    // 1. 讓輸入框消失並顯示新留言
    const thisId = e.target.parentNode.parentNode.id
    const originalComment = document.querySelector(
      '#' + thisId + ' ' + '.iris-comment-text'
    )
    const commentInput = document.querySelector(
      '#' + thisId + ' ' + '.iris-text-area'
    )
    const editAndDelete = document.querySelector(
      '#' + thisId + ' ' + '.iris-comment-edit-delete'
    )
    const commentUpdate = document.querySelector(
      '#' + thisId + ' ' + '.iris-comment-update '
    )
    originalComment.innerText = document.querySelector(
      '#' + thisId + ' ' + '.iris-text-area .iris-textarea'
    ).value
    originalComment.style.display = 'block'
    commentInput.style.display = 'none'
    editAndDelete.style.display = 'block'
    commentUpdate.style.display = 'none'

    // 2. 把新留言寫到資料庫
    // 準備要送的資料
    const newComment = document.querySelector(
      '#' + thisId + ' ' + '.iris-text-area .iris-textarea'
    ).value

    const commentSid = e.target.parentNode.parentNode.id.slice(9)
    const updatedComment = {
      newComment: newComment,
      currentUser: currentUser,
      commentSid: commentSid,
    }

    // 送出
    fetch('http://localhost:5000/member/updateComment', {
      method: 'POST',
      body: JSON.stringify(updatedComment),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then((r) => r.json())
      .then((o) => {
        console.log(o)
      })
  }

  // ------ 取得目前所有的投稿資料 ------- //
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

    console.log(data)
    setAllComment(data)
  }

  //
  useEffect(() => {
    getAllCommentFromServer()
  }, [])

  // ------ 刪除投稿資料 ------- //
  const doCommentDelete = (e) => {
    // 1. 讓這筆投稿消失
    // 抓這條comment box的id
    const thisId = e.target.parentNode.parentNode.parentNode.id
    const thisComment = document.querySelector('#' + thisId)
    // 抓這條comment box上面的線
    const LineAbovethisComment = document.querySelector('#' + thisId)
      .previousSibling
    thisComment.style.display = 'none'
    LineAbovethisComment.style.display = 'none'
    // 讓您共有x則投稿數量-1
    let commentNum = document.querySelector('.iris-comment-quantity')
    commentNum.innerText = commentNum.innerText - 1
    // console.log(commentNum)

    // 2. 準備要送的資料
    // 抓要刪除的投稿的資料庫sid
    const commentSid = e.target.parentNode.parentNode.parentNode.id.slice(9)
    const commentToBeDelete = {
      commentSid: commentSid,
    }

    // 3. 送出
    fetch('http://localhost:5000/member/deleteComment', {
      method: 'POST',
      body: JSON.stringify(commentToBeDelete),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then((r) => r.json())
      .then((o) => {
        console.log(o)
      })
  }

  // --------- 過濾出現在使用者的投稿 --------- //
  const currentUserComment = allComment.filter(
    (allComment) => allComment.member === currentUser
  )

  // --------- 留言框內容Template --------- //
  const commentDisplay = currentUserComment.map((item, index) => {
    // id用數字抓不到，前面加commentId
    const thisId = 'commentId' + item.sid
    // 處理從資料庫撈來的日期格式
    const commentDate = item.created_at.slice(0, 10)
    return (
      <>
        <div className="iris-member-line"></div>
        {/* 用'commentId'+資料庫的sid 當作comment box的id，不會重複 */}
        <div
          className="iris-comment-box"
          id={thisId}
          onClick={() => {
            console.log(thisId)
          }}
        >
          {/* <div className="iris-comment-box d-flex" id="comment1"> */}
          <div className="iris-comment-img-warpper">
            <img className="iris-comment-img" id={item.comment_img}></img>
          </div>
          <div className="iris-comment-section-wrapper">
            <div className="iris-comment-text-wrapper d-flex">
              <div>{item.productname}</div>&nbsp;&nbsp;
              <div className="card-star-warp">
                <img className="card-star" src={star} />
                <img className="card-star" src={star} />
                <img className="card-star" src={star} />
                <img className="card-star" src={star} />
                <img className="card-star" src={star} />
              </div>
            </div>
            <div className="iris-comment-text">{item.content}</div>
            <div className="iris-text-area">
              <IrisTextArea
              // value={document.querySelector('.iris-comment-text').innerText}
              />
              {/* <InputH40 /> */}
            </div>
            <div className="iris-comment-edit-delete">
              <span
                className="comment-edit"
                onClick={(e) => {
                  changeComment(e)
                }}
              >
                編輯
              </span>
              &nbsp;<span> | </span>&nbsp;
              <span
                className="comment-delete"
                onClick={(e) => {
                  doCommentDelete(e)
                }}
              >
                刪除
              </span>
            </div>
            <span
              className="iris-comment-update"
              onClick={(e) => {
                doCommentUpdate(e)
              }}
            >
              確認
            </span>
            <div className="iris-comment-date">{commentDate}</div>
          </div>
        </div>
      </>
    )
  })

  return (
    <>
      <div className="container col-9">
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-comment-title">我的投稿</h2>
          <WaveLine />
        </div>
        <div className="iris-comment-list-container">
          <h6 className="iris-comment-note">
            您共有{' '}
            <span className="iris-comment-quantity">
              {currentUserComment.length}
            </span>{' '}
            則投稿
          </h6>
          {/* <IrisMemberLine /> */}

          {commentDisplay}
        </div>
      </div>
    </>
  )
}
export default IrisUserCommentSect
