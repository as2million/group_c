import React, { useState, useEffect } from 'react'
import './JessCommentInput.scss'

function JessCommentList(props) {
  const { comment, handleEditedSave } = props
  const [editText, setEditText] = useState(comment.text)
  return (
    <>
      <li className="jess-commentList">
        <input
          className="jess-commentEditList"
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <input
          className="jess-commentbtn "
          type="button"
          value="儲存"
          onClick={() => handleEditedSave(comment.id, editText)}
        ></input>
      </li>
    </>
  )
}

export default JessCommentList
