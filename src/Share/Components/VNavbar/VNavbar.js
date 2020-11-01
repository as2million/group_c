import React, { useState, useEffect } from 'react';
import './VNavbar.scss';
import { Navbar, Button } from 'react-bootstrap';
import calendar from './calendar.svg';
import mapLocator from './mapLocator.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, setHours, setMinutes } from 'date-fns';
import { registerLocale } from 'react-datepicker';
import { zhTW } from 'date-fns/esm/locale';
import AdressTabs from '../AdressTabs/AdressTabs';
registerLocale('zh-TW', zhTW);

function VNavbar(props) {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 11)
  );
  const [showVn, setShowVn] = useState(true);

  return (
    <>
      <Navbar className="vnavbar-jan d-flex flex-wrap justify-content-between fixed-top">
        <div className="container d-flex flex-wrap justify-content-between align-content-center">
          <div className="d-flex align-items-center calendar-jan">
            <img alt="" src={calendar} className="icons-jan " />
            <p className="titles-jan">選擇日期/時間：</p>
            <DatePicker
              dateFormat="yyyy-MM-dd / HH:mm"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={Date.now()}
              maxDate={addDays(new Date(), 13)}
              locale="zh-TW"
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              minTime={setHours(setMinutes(new Date(), 30), 11)}
              maxTime={setHours(setMinutes(new Date(), 30), 19)}
              timeCaption="time"
              showDisabledMonthNavigation
            />
          </div>

          <div className="d-flex align-items-center">
            <img alt="" src={mapLocator} className="icons-jan" />
            <p className="titles-jan">取餐地址：</p>
            <input className="address-input-jan" placeholder="點我填寫地址" />
          </div>
          <div className="d-flex justify-content-end">
            <Button className="shop-btn-jan" onClick={() => {}}>
              修改地址
            </Button>
          </div>
        </div>
      </Navbar>

      <AdressTabs />
    </>
  );
}

export default VNavbar;
