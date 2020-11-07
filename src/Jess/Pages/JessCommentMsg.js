import React, { useState, useEffect } from 'react'
import '../Components/JessCommentMsg/JessCommentInput.scss'
import IrisMemberMenu from '../../Iris/Components/IrisMemberMenuSect/IrisMemberMenuSect'
import JessCommentInput from '../Components/JessCommentMsg/JessCommentInput'
import JessCommentList from '../Components/JessCommentMsg/JessCommentList'

function JessMenu(props) {
  const [textInput, setTextInput] = useState('')
  const [comments, setComments] = useState([])

  async function messageData() {
    const url = 'http://localhost:5000/product/member1msg'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // data會是一個array
    console.log(data[0].created_at)
    // console.log(data[0].productname)

    // setTotal(total.push(data))
    // setTotal(data)
    setComments(data)
    // console.log(data)
  }
  useEffect(() => {
    messageData()
  }, [])

  return (
    <>
      <div className="container-fluid jess-comment-bg">
        <div className="row container">
          <div className="col">
            <IrisMemberMenu />
          </div>
          {/* <div className="row form-group jess-input"> */}
          <div className="col mx-auto jess-input">
            <JessCommentInput
              textInput={textInput}
              setTextInput={setTextInput}
              comments={comments}
              setComments={setComments}
            />
            <div className="jess-inputBorder"></div>
            <div className="jess-commentBox">
              <JessCommentList comments={comments} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JessMenu
