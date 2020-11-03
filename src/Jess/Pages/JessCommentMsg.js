import React, { useState } from 'react'
import '../Components/JessCommentMsg/JessCommentInput.scss'
import IrisMemberMenu from '../../Iris/Components/IrisMemberMenuSect/IrisMemberMenuSect'
import JessCommentInput from '../Components/JessCommentMsg/JessCommentInput'
import JessCommentList from '../Components/JessCommentMsg/JessCommentList'

function JessMenu(props) {
  const [textInput, setTextInput] = useState('')
  const [comments, setComments] = useState([
    { id: 1, text: '買iphone 12', time: '2020/11/02' },
    { id: 2, text: '學好react', time: '2020/11/02' },
  ])
  const handleEditedToggle = (id) => {
    // 先複製一個新的todos陣列
    const newComments = [...comments]
    const commentItemIndex = newComments.findIndex((item) => item.id === id)

    if (commentItemIndex !== -1) {
      newComments[commentItemIndex].edited = !newComments[commentItemIndex]
        .edited

      setComments(newComments)
    }
  }

  const handleEditedSave = (id, newText) => {
    const newComments = [...comments]
    const commentItemIndex = newComments.findIndex((item) => item.id === id)
    if (commentItemIndex !== -1) {
      newComments[commentItemIndex].text = newText
      setComments(newComments)
      handleEditedToggle(id)
    }
  }

  const handleDelete = (id) => {
    //建立一個新的陣列，其中"不包含要被移除的項目(用filter)
    const newComments = comments.filter((item, index) => item.id !== id)

    // 設定回原本的todos
    setComments(newComments)
  }

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
              <JessCommentList
                comments={comments}
                handleEditedToggle={handleEditedToggle}
                handleDelete={handleDelete}
                handleEditedSave={handleEditedSave}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JessMenu
