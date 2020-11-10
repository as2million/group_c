import React, { useState, useEffect } from 'react'
import './JessCommentInput.scss'
import JessCommentItems from './JessCommentItems'
import JessCommentEdit from './JessCommentEdit'

function JessCommentList(props) {
  const { comments } = props
  return (
    <>
      <div className="jess-commentBox">
        <ul>
          {comments.map((item, index) =>
            item.edited ? (
              <JessCommentEdit key={item.sid} comment={item} {...props} />
            ) : (
              <JessCommentItems key={item.sid} comment={item} {...props} />
            )
          )}
        </ul>
      </div>
    </>
  )
}

export default JessCommentList
