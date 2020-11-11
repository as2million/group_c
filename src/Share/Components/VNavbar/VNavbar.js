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
    county,
    setCounty,
    township,
    setTownship,
    address,
    setAddress,
  } = props
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 11)
  )
  const [status, setStatus] = useState(false)
  // setCounty()
  // setTownship()

  const addressData = (e) => {
    //未登入=>顯示input框
    //已登入=>顯示member.id的地址
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
        console.log(obj)
        setCounty(obj[0].county)
        setTownship(obj[0].district)
        setAddress(obj[0].address)
      })
  }
  //如果登入的話，fetch會員的地址
  useEffect(() => {
    addressData()
  }, [])

  return (
    <>
      {status && (
        <AddressTabs
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
              onChange={(date) => setStartDate(date)}
              minDate={Date.now()}
              maxDate={addDays(new Date(), 13)}
              locale="zh-TW"
            />
          </div>

          <div className="d-flex align-items-center time-jan">
            <img alt="" src={clock} className="icons-jan " />
            <p className="titles-jan">取餐時間：</p>
            <select className="form-control select-time-jan">
              <option selected>請選擇</option>
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
              {county}
              {township}
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
