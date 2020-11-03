import React, { useState, useEffect } from 'react'
import './JessCommentInput.scss'
import JessCommentList from '../../../Share/Components/Button/Button'

function JessCommentInput(props) {
  const { textInput, setTextInput, comments, setComments } = props
  // const [textInput, setTextInput] = useState('')
  // const [comments, setComments] = useState([

  function handleSubmit(v) {
    // e.preventDefault();
    if (textInput === '') {
      return false
    }
    const newItems = {
      id: +new Date(),
      text: textInput,
      time: new Date().toLocaleString(),
    }
    const newComments = [newItems, ...comments]
    setComments(newComments)
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
              id: +new Date(),
              text: e.target.value,
              time: +new Date().toLocaleString(),
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
      {/* </div> */}
      {/* <div className="jess-inputBorder"></div>
        <div className="jess-commentBox">
          <ul className="jess-commentList">
            {comments.map((value, index) => {
              return (
                <li key={value.text}>
                  留言：{value.text}時間：{new Date().toLocaleString()}
                </li>
              )
            })}
          </ul>
        </div> */}
      {/* </div> */}
    </>
  )
}

export default JessCommentInput
