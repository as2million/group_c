import React, { useState, useEffect } from 'react';
import './JessCommentList.scss';
import Button from '../../../Share/Components/Button/Button';
import { InputGroup } from 'react-bootstrap';
import JessCommentItem from './JessCommentItem';
import JessCommentEdit from './JessCommentEdit';

function JessCommentList(props) {
  const { id, comments } = props;
  return (
    <>
      <InputGroup className="inputForm">
        {comments.map((item, index) => {
          return item.edited ? (
            <JessCommentEdit key={item.id} comment={item} {...props} />
          ) : (
            <JessCommentItem key={item.id} comment={item} {...props} />
          );
        })}
      </InputGroup>
    </>
  );
}

export default JessCommentList;
