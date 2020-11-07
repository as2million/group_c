import React, { useState, useEffect } from 'react'
import './JessListD.scss'
import Button from '../../../Share/Components/Button/Button'
import 'antd/dist/antd.css'
import { Pagination } from 'antd'

function JessListD() {
  const [comments, setComments] = useState([])
  async function messageData() {
    const url = 'http://localhost:5000/product/bentoMsg'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    setComments(data)
    console.log(data)
  }

  function pagination(data) {
    // 取得資料長度
    const dataTotal = data.length

    // 要顯示在畫面上的資料數量，預設每一頁只顯示五筆資料。
    const perpage = 5
    console.log(dataTotal)
    // page 按鈕總數量公式 總資料數量 / 每一頁要顯示的資料
    // 這邊要注意，因為有可能會出現餘數，所以要無條件進位。
    const pageTotal = Math.ceil(dataTotal / perpage)
    console.log('pageTotal:', pageTotal)
    // 當前頁數
    let currentPage = 2

    // 當"當前頁數"比"總頁數"大的時候，"當前頁數"就等於"總頁數"
    if (currentPage > pageTotal) {
      currentPage = pageTotal
    }
    const minData = currentPage * perpage - perpage + 1
    const maxData = currentPage * perpage
    // 先建立新陣列
    const newData = []

    // 使用 ES6 forEach 做資料處理
    // 這邊必須使用索引來判斷資料位子，所以要使用 index
    data.forEach((item, index) => {
      // 獲取陣列索引，但因為索引是從 0 開始所以要 +1。
      const num = index + 1

      // 這邊判斷式會稍微複雜一點
      // 當 num 比 minData 大且又小於 maxData 就push進去新陣列。
      if (num >= minData && num <= maxData) {
        newData.push(item)
      }
      console.log(newData)
    })
    // 用物件方式來傳遞資料
    const page = {
      pageTotal,
      currentPage,
      hasPage: currentPage > 1,
      hasNext: currentPage < pageTotal,
    }
    // displayData(data)
    pageBtn(page)
  }
  function pageBtn(page) {
    let str = ''
    const total = page.pageTotal

    if (page.hasPage) {
      str += `<li class="page-item"><a class="page-link" href="#" data-page="${
        Number(page.currentPage) - 1
      }">Previous</a></li>`
    } else {
      str += `<li class="page-item disabled"><span class="page-link">Previous</span></li>`
    }

    for (let i = 1; i <= total; i++) {
      if (Number(page.currentPage) === i) {
        str += `<li class="page-item active"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`
      } else {
        str += `<li class="page-item"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`
      }
    }

    if (page.hasNext) {
      str += `<li class="page-item"><a class="page-link" href="#" data-page="${
        Number(page.currentPage) + 1
      }">Next</a></li>`
    } else {
      str += `<li class="page-item disabled"><span class="page-link">Next</span></li>`
    }
  }
  function showTotal(total) {
    return `Total ${total} items`
  }

  useEffect(() => {
    messageData()
  }, [])
  return (
    <>
      <div className="container-fluid">
        <div className="container mt-5 jess-proD-bg">
          <h2 className="jess-text-30orange text-center mt-5">商品評論</h2>
          <div className="row d-flex jess-msg-tittle justify-content-between mt-5">
            <div className="col-9 d-flex align-items-center">
              <ul className="list-unstyled">
                <li class="jess-text-20orange">整體滿意度</li>
                <li class="jess-text-15Gray">來自 180 則評分，滿分5顆星</li>
              </ul>
            </div>
            <div className="col-6 col-sm-2 jess-msg-todo d-flex align-items-center">
              <Button className="button-btn" text="我要評論"></Button>
            </div>
          </div>
          {comments.map((item, index) => {
            return (
              <div
                key={item.sid}
                className="row d-flex jess-msg-content justify-content-between"
              >
                <div className="col-9 d-flex align-items-center">
                  <ul className="list-unstyled">
                    <li class="jess-text-15Gray">{item.name}</li>
                    <li class="jess-text-15brown">{item.content}</li>
                  </ul>
                </div>
                <div className="col-2 jess-msg-todo d-flex align-items-center">
                  <div className="jess-text-15Gray">{item.created_at}</div>
                </div>
                <div className="jess-contentBorder"></div>
              </div>
            )
          })}
          <Pagination size="small" total={10} />
          <div className="jess-pageTotal"></div>
        </div>
      </div>
    </>
  )
}

export default JessListD
