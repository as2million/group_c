import React, { useState, useEffect } from 'react';
import './JanIndex.scss';
import { Container, Button, Row } from 'react-bootstrap';

function JanIndex(props) {
  return (
    <>
      <Container>
        {/* 輪播牆 */}
        <Row>
          <div className="box"></div>
          <div className="jan-index-carousel"></div>
        </Row>
        {/* 品牌特色 */}
        <Row>
          <div className="d-flex jan-index-feature justify-content-around align-items-center">
            <div className="jan-index-feature-circle"></div>
            <div className="jan-index-feature-smcircle"></div>
            <div className="jan-index-feature-circle"></div>
            <div className="jan-index-feature-smcircle"></div>
            <div className="jan-index-feature-circle"></div>
            <div className="jan-index-feature-smcircle"></div>
            <div className="jan-index-feature-circle"></div>
            <div className="jan-index-feature-smcircle"></div>
            <div className="jan-index-feature-circle"></div>
          </div>
        </Row>
        <Row>
          <div className="jan-index-feature-triangle"></div>
          <div className="jan-index-feature-cards"></div>
        </Row>
      </Container>
    </>
  );
}

export default JanIndex;
