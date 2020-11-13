import React, { useState, useEffect } from 'react'
import './Style.scss'

// 監控瀏覽器寬度
function RuDetailedInfo(props) {
  const { riceName, data } = props
  const [carbohydrates, setCarbohydrates] = useState('')
  const [protein, setProtein] = useState('')
  const [fat, setFat] = useState('')

  useEffect(() => {
    console.log(
      data,
      data[0],
      data[0].productName,
      data[0].cabohydrate,
      riceName,
      riceName === data[0].productName
    )
    if (data && riceName === data[0].productName) {
      setCarbohydrates(data[0].cabohydrate)
    }
    console.log(carbohydrates)
    return () => {}
  }, [data, riceName])

  if (!data) {
    return
  }
  return (
    <>
      <ul className="ru-detailedInfo">
        <li>碳水化合物: {carbohydrates}g</li>
        <li>蛋白質: {protein}g</li>
        <li>脂肪: {fat}g</li>
      </ul>
    </>
  )
}

export default RuDetailedInfo
