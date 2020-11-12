import React, { useState, useEffect } from 'react'
import { Link, withRouter, useParams } from 'react-router-dom'
import VNavbar from 'Share/Components/VNavbar/VNavbar'
import JessHeader from '../Components/JessHeader/JessHeader'
import JessListA from '../Components/JessListA/JessListA'
import JessListB from '../Components/JessListB/JessListB'
import JessListC from '../Components/JessListC/JessListC'
import JessListD from '../Components/JessListD/JessListD'
import JessListE from '../Components/JessListE/JessListE'
import ToTop from 'Share/Components/ToTopButton/ScrollButton'

function JessBento(props) {
  const { handleCartNumber, handleCarList, currentUser } = props
  const [count, setCount] = useState(1)
  const [total, setTotal] = useState(170)

  //useParams 設定id
  let { id } = useParams()
  const [menu, setMenu] = useState([])
  async function bentoData() {
    const url = 'http://localhost:5000/product/bento'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    // setMenu(data[0])
    //這邊id值可以設定分頁
    setMenu(data[id])
    console.log(data)
  }

  useEffect(() => {
    bentoData()
  }, [id])
  console.log('currentUser:', currentUser)
  return (
    <>
      <VNavbar />
      <JessHeader
        handleCartNumber={handleCartNumber}
        handleCarList={handleCarList}
        count={count}
        setCount={setCount}
        total={total}
        setTotal={setTotal}
        menu={menu}
        setMenu={setMenu}
      />
      <JessListA />
      <JessListB />
      <JessListC />
      <JessListD />
      <JessListE menu={menu} setMenu={setMenu} />
      <ToTop />
    </>
  )
}

export default withRouter(JessBento)
