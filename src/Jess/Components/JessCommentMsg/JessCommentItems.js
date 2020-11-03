import React, { useState } from 'react'
import './JessCommentInput.scss'

function JessCommentList(props) {
  const { comment, time, handleEditedToggle, handleDelete } = props

  return (
    <>
      <div>
        <li key={comment.id} className="jess-commentItem">
          <div className="jess-itemTextBox">{comment.text}</div>
          <div className="text-right jess-btnBox">
            <div className="mr-3">{comment.time}</div>
            {/* {new Date().toLocaleString()} */}
            <div>
              <input
                className="jess-commentbtn "
                type="button"
                value="編輯"
                onClick={() => handleEditedToggle(comment.id)}
              ></input>
              <span className="mx-2">|</span>
              <input
                className="jess-commentbtn "
                type="button"
                value="刪除"
                onClick={() => handleDelete(comment.id)}
              ></input>
            </div>
          </div>
        </li>
      </div>
    </>
  )
}

export default JessCommentList
