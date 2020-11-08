import React, { useState } from 'react'
import './JessCommentInput.scss'
import ReactStars from 'react-rating-stars-component'

function JessCommentList(props) {
  const { comment } = props

  return (
    <>
      <div>
        <li key={comment.sid} className="jess-commentItem">
          <div className="jess-rateStarColor">
            <ReactStars size={20} value={comment.starRating} edit={false} />
          </div>
          <div className="jess-itemTextBox">{comment.content}</div>
          <div className=" jess-btnBox">
            <div className="mr-3">{comment.created_at}</div>
          </div>
        </li>
      </div>
    </>
  )
}

export default JessCommentList
