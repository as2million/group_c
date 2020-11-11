import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './JessCommentInput.scss'
import Cross from './Images/cross.svg'
// import JessCommentList from '../../../Share/Components/Button/Button'
// import ReactStars from 'react-rating-stars-component'
import 'antd/dist/antd.css'
import { Rate } from 'antd'

function JessCommentInput(props) {
  const {
    textInput,
    setTextInput,
    comments,
    setComments,
    rating,
    setRating,
    member_sid,
    closeModal,
    status,
    setStatus,
  } = props

  // const [textInput, setTextInput] = useState('')
  // const [starKey, setStarKey] = useState(Math.random())
  // const [comments, setComments] = useState([

  async function handleSubmit(v) {
    // e.preventDefault();
    if (textInput === '') {
      return false
    }

    const newItems = {
      product_sid: 1,
      member_sid: 1,
      starRating: rating,
      content: textInput,
      created_at: new Date().toLocaleString(),
      // created_at: null,
    }
    const newComments = [newItems, ...comments]
    setComments(newComments)
    const url = 'http://localhost:5000/product/member1msg'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newItems),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)

    setTextInput('')
    setRating(0)
    // clearStar()
  }
  const ratingChanged = (newRating) => {
    setRating(newRating)
  }

  useEffect(() => {
    handleSubmit()
  }, [])

  const handleCancel = (e) => {
    setStatus(false)
  }
  return (
    <>
      <div className="col-3 jess-comment-productPic"></div>
      <div className="col-9">
        <p className="jess-modalText">滿意此商品嗎：</p>
        <div className="jess-rateStar mt-0">
          <Rate count={5} value={rating} onChange={ratingChanged} />
        </div>
        <textarea
          className="form-control  form-control-lg mt-3 jess-textarea"
          type="text"
          rows="5"
          placeholder="您的寶貴意見是我們成長的動力"
          onChange={(e) => setTextInput(e.target.value)}
          // onChange={handleChange}
          value={textInput}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && e.target.value) {
              // const newComments = [e.target.value, ...comments];
              const newItems = {
                product_sid: 1,
                member_sid: 1,
                starRating: rating,
                content: textInput,
                created_at: new Date(),
              }
              const newComments = [newItems, ...comments]
              setComments(newComments)
              setTextInput('')
            }
          }}
        ></textarea>
        <button
          className="jess-input-button"
          // onClick={handleSubmit}
          onClick={handleSubmit}
          onCancel={handleCancel}
        >
          確認送出
        </button>
      </div>
    </>
  )
}

export default JessCommentInput
