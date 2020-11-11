import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './JessModal.scss'
import Cross from './Images/cross.svg'
import JessCommentInput from '../JessCommentMsg/JessCommentInput'
function JessModal(props) {
  const { closeModal } = props

  return (
    <>
      <div className="jess-overlay">
        <div className="jess-modal-bg">
          <img
            onClick={closeModal}
            className="jess-modal-cross-img"
            alt=""
            src={Cross}
          />
          {/* <JessCommentInput closeModal={closeModal} /> */}
          {props.children}
        </div>
      </div>
    </>
  )
}

export default JessModal
