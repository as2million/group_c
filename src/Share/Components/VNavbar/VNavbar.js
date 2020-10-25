import React, { useState, useEffect } from 'react';
import './VNavbar.scss';
import {
  Navbar,
  Brand,
  NavDropdown,
  Row,
  Container,
  Col,
  Button,
} from 'react-bootstrap';
import calendar from './calendar.svg';
import mapLocator from './mapLocator.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, setHours, setMinutes } from 'date-fns';
import { registerLocale } from 'react-datepicker';
import { zhTW } from 'date-fns/esm/locale';
registerLocale('zh-TW', zhTW);

function VNavbar(props) {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 11)
  );

  return (
    <>
      <Navbar className="JanVNBcc d-flex justify-content-between">
        {/* <Container> */}
        {/* <Row className="d-flex justify-content-md-center"> */}
        <div className="d-flex align-items-center">
          <img alt="" src={calendar} className="JanVNIcons " />
          <p className="JanVNIconsTitle">選擇日期/時間：</p>
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
          <img alt="" src={mapLocator} className="JanVNIcons" />
          <p className="JanVNIconsTitle">外送地址：</p>
          <input className="JanVNAddress" placeholder="點我填寫地址" />
          {/* <Button className="JanChangeAddress" onClick={() => {}}>
            外送取餐
          </Button> */}
        </div>
        <div className="d-flex justify-content-end">
          <Button className="JanSelectShop" onClick={() => {}}>
            門市取餐
          </Button>
        </div>
        {/* </Row> */}
        {/* </Container> */}
      </Navbar>
    </>
  );
}

export default VNavbar;
