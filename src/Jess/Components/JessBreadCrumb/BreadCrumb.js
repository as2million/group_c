import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

function BreadCrumb(props) {
  console.log(props);
  let path = '';
  const pathname = props.location.pathname;

  switch (pathname) {
    case '/menu':
      path = '商品總表';
      break;
    case '/productList':
      path = '商品列表';
      break;
    case '/bento':
      path = '健康低GI';
      break;
    default:
      path = '';
  }
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">首頁</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{path}</Breadcrumb.Item>
        <Breadcrumb.Item>{path}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}

export default withRouter(BreadCrumb);
