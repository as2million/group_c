import React, { useState } from 'react'
import './JessCommentOrder.scss'
import 'antd/dist/antd.css'
import ReactStars from 'react-rating-stars-component'

import { Rate } from 'antd'

function JessCommentOrder(props) {
  const { comments } = props
  return (
    <>
      {comments.map((item, index) => {
        return (
          <>
            <div key={item.sid} className="jess-commentOder row">
              <div className="jess-commentOrderStar col-3">
                {/* <Rate count={5} value={item.starRating} disabled /> */}
                <ReactStars size={18} value={item.starRating} edit={false} />
              </div>
              <div className="jess-OrderTextBox col-6">{item.content}</div>
              <div className=" jess-btnBox col-3">
                <div className="mr-3">{item.created_at}</div>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default JessCommentOrder
