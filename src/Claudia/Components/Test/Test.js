import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calender from './Images/calender.svg'

function Test() {

    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = ({ value, onClick }) => (
        <button className="claudia-modal-calender-button" onClick={onClick}>
            <img alt="" src={Calender} />
            <h3>{value}</h3>
        </button>
    );

    const isWeekday = (date) => {
        const day = date.getDay();
        return day == 0 || day == 6;
    };

    return (
        <>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                customInput={<ExampleCustomInput />}
                filterDate={isWeekday}
                dateFormat="yyyy-MM-dd"
                minDate={Date.now()}
            />
        </>
    )
}

export default Test;