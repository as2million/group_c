import React, { useState, useEffect } from 'react';
import './JessCommentInput.scss';
import Button from '../../../Share/Components/Button/Button';

function JessCommentInput(props) {
  // const { textInput, setTextInput, comments, setComments } = props;
  const [textInput, setTextInput] = useState('');
  const [comments, setComments] = useState([
    { id: 1, text: '買iphone 12' },
    { id: 2, text: '學好react' },
  ]);

  function handleSubmit(v) {
    // e.preventDefault();
    if (textInput === '') {
      return false;
    }
    const newItems = {
      id: +new Date(),
      text: textInput,
      time: new Date().toLocaleString(),
    };
    const newComments = [newItems, ...comments];
    setComments(newComments);
    setTextInput('');
  }
  // function handleSubmit(v) {
  //   // e.preventDefault();
  //   const newComments = [v, ...comments];
  //   setComments(newComments);
  //   console.log(comments);
  //   setTextInput('');
  // }

  return (
    <>
      <div className="container jess-comment-bg">
        <div className="jess-commentBox">
          <ul className="jess-commentList">
            {comments.map((value, index) => {
              return <li key={value.text}>{value.text}</li>;
            })}
          </ul>
        </div>
        <hr />
        <div className="form-group jess-input">
          <div className="jess-inputBorder"></div>
          <textarea
            className="form-control form-control-lg mt-3"
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
                };
                const newComments = [newItems, ...comments];
                setComments(newComments);
                setTextInput('');
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
        </div>
      </div>
    </>
  );
}

export default JessCommentInput;
