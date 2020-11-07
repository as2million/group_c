import React, { useState, useEffect } from 'react'
import { Link, withRouter, useParams } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import 'antd/dist/antd.css'

function BreadCrumb(props) {
  console.log(props)
  const { menu } = props
  let { id } = useParams()
  console.log(menu)
  let path = ''
  const pathname = props.location.pathname

  switch (pathname) {
    case '/menu':
      path = '商品總表'
      break
    case '/productList':
      path = '商品列表'
      break
    case '/bento/' + id:
      path = id.productname
      break
    default:
      path = ''
  }
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/menu">商品總表</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/productList">產品列表</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{path}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  )
}

export default withRouter(BreadCrumb)
