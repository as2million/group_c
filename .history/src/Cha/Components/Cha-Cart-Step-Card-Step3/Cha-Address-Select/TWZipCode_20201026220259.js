import React, { useState } from 'react'
import { countries, townships, postcodes } from './data.js'
import '../ChaCartStepCardStep3.scss'
function TWZipCode(props) {
  // 記錄陣列的索引值
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)
  // 下面這行是備用的，如果需要設定郵遞區號時
  //const [postcode, setPostcode] = useState(-1)

  return (
    <>
      <select
        value={country}
        onChange={(e) => {
          // 將字串轉成數字
          setCountry(+e.target.value)
          // 重置township的值
          setTownship(-1)
        }}
      >
        <option value={-1}>選擇縣市</option>

        {countries.map((v, i) => (
          <option key={i} value={i}>
            {v}
          </option>
        ))}
      </select>

      <select
        value={township}
        onChange={(e) => {
          // 將字串轉成數字
          setTownship(+e.target.value)
        }}
      >
        <option value={-1}>選擇區域</option>
        {country > -1 &&
          townships[country].map((v, i) => (
            <option key={i} value={i}>
              {v}
            </option>
          ))}
      </select>
    </>
  )
}

export default TWZipCode

{/* <input
                type="text"
                className="form-control cha-step3-5-2-3-vehicle"
                id="cha-step3-5-2-3-vehicle"
                name="cha-step3-5-2-3-vehicle"
                placeholder="縣市"
              />
              <input
                type="text"
                className="form-control cha-step3-5-2-4-vehicle"
                id="cha-step3-5-2-4-vehicle"
                name="cha-step3-5-2-4-vehicle"
                placeholder="鄉鎮市區"
              /> */}
