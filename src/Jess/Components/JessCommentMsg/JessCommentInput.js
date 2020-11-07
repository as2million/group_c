import React, { useState, useEffect } from 'react'
import './JessCommentInput.scss'
import JessCommentList from '../../../Share/Components/Button/Button'
import { now } from 'jquery'

function JessCommentInput(props) {
  const { textInput, setTextInput, comments, setComments, member_sid } = props
  // const [textInput, setTextInput] = useState('')
  // const [comments, setComments] = useState([

  async function handleSubmit(v) {
    // e.preventDefault();
    if (textInput === '') {
      return false
    }
    const newItems = {
      product_sid: 1,
      member_sid: 1,
      content: textInput,
      // created_at: new Date().format('YYYY-MM-DD HH:mm:ss'),
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
    console.log(JSON.stringify(newItems))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)

    setTextInput('')
  }

  return (
    <>
      <textarea
        className="form-control  form-control-lg mt-3"
        type="text"
        rows="3"
        placeholder="在這留下你想說的話"
        onChange={(e) => setTextInput(e.target.value)}
        // onChange={handleChange}
        value={textInput}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value) {
            // const newComments = [e.target.value, ...comments];
            const newItems = {
              product_sid: 1,
              member_sid: 1,
              content: textInput,
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
      >
        確認送出
      </button>
    </>
  )
}

export default JessCommentInput
