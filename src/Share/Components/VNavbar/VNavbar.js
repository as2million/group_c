import React, { useState, useEffect } from 'react'
import './VNavbar.scss'
import { Navbar, Button } from 'react-bootstrap'
import calendar from './calendar.svg'
import clock from './clock.svg'
import mapLocator from './mapLocator.svg'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { addDays, setHours, setMinutes } from 'date-fns'
import { registerLocale } from 'react-datepicker'
import { zhTW } from 'date-fns/esm/locale'
import AddressTabs from '../AddressTabs/AddressTabs'
import {
  datacountries,
  datatownships,
  dataprice,
} from '../../../Janice/Components/JanIndexx/data.js'
registerLocale('zh-TW', zhTW)

function VNavbar(props) {
  const {
    isLogin,
    currentUser,
    // selectDate,
    setSelectDate,
    slecteTime,
    setSelectTime,
    county,
    setCounty,
    township,
    setTownship,
    address,
    setAddress,
  } = props
  const [startDate, setStartDate] = useState(new Date())

  setSelectDate(startDate)

  const [status, setStatus] = useState(false)

  // //---------------這裡要拿會員資料
  // const [userInfo, setUserInfo] = useState([])

  // // -------- 取得目前user的資料 ---------- //
  // async function getUserInfoFromServer() {
  //   const url = 'http://localhost:5000/member/allUserProfile'

  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })

  //   const response = await fetch(request)
  //   const data = await response.json()

  //   console.log(data)
  //   setUserInfo(data)
  // }

  // // --------- 過濾出現在使用者的資料 --------- //
  // const currentUserInfo = userInfo.filter(
  //   (userInfo) => userInfo.member_sid === currentUser
  // )
  // console.log(currentUserInfo)

  // useEffect(() => {
  //   getUserInfoFromServer()
  // }, [])

  // // 把user資料代進去
  // currentUserInfo.map((item, index) => {
  //   const fullAddress = item.county + item.district + item.address

  //   address.value = fullAddress
  //   setAddress(item.address)
  // })

  const addressData = (e) => {
    if (isLogin === true) {
      fetch('http://localhost:5000/index/member_list', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
        .then((r) => r.json())

        .then((obj) => {
          // const newAddress = [...obj, ...adress]
          // setAddress(newAddress)
          // console.log(address[0])
          // console.log(obj[0].address)
          // console.log(obj)
          // })
          // console.log(item.county)
          // console.log(item.district)
          // console.log(item.address)
          console.log(obj[0].county)
          console.log(obj[0].district)
          console.log(obj[0].address)
          // setCounty(obj[0].county)
          // setTownship(obj[0].district)
          setAddress(obj[0].address)
        })
    }
  }

  // 如果登入的話，fetch會員的地址
  useEffect(() => {
    addressData()
  }, [isLogin])

  return (
    <>
      {status && (
        <AddressTabs
          {...props}
          address={address}
          setAddress={setAddress}
          closeModal={() => setStatus(false)}
          county={county}
          setCounty={setCounty}
          township={township}
          setTownship={setTownship}
        ></AddressTabs>
      )}
      <Navbar className="vnavbar-jan d-flex flex-wrap justify-content-around fixed-top">
        <div className="jan-vnav-container d-flex flex-wrap justify-content-around align-content-center">
          <div className="d-flex align-items-center calendar-jan">
            <img alt="" src={calendar} className="icons-jan " />
            <p className="titles-jan">取餐日期：</p>
            <DatePicker
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date)
                // console.log(selectDate)
              }}
              minDate={Date.now()}
              maxDate={addDays(new Date(), 13)}
              locale="zh-TW"
            />
          </div>

          <div className="d-flex align-items-center time-jan">
            <img alt="" src={clock} className="icons-jan " />
            <p className="titles-jan">取餐時間：</p>
            <select
              value={slecteTime}
              onChange={(e) => {
                setSelectTime(e.target.value)
              }}
              className="form-control select-time-jan"
            >
              <option defaultValue>請選擇取餐時間</option>
              <option>11:00 ~ 11:30</option>
              <option>11:30 ~ 12:00</option>
              <option>12:30 ~ 13:00</option>
              <option>13:30 ~ 13:00</option>
            </select>
          </div>

          <div className="d-flex align-items-center">
            <img alt="" src={mapLocator} className="icons-jan" />
            <p className="titles-jan">取餐地址：</p>
            <p onClick={() => setStatus(true)} className="address-input-jan">
              {datacountries[county]}
              {county === -1 ? '' : datatownships[county][township]}
              {address}
            </p>
          </div>

          <div className="d-flex justify-content-end">
            <Button className="shop-btn-jan" onClick={() => setStatus(true)}>
              修改地址
            </Button>
          </div>
        </div>
      </Navbar>
    </>
  )
}

export default VNavbar
