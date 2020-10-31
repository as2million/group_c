import React, { useState } from 'react';
import './ClaudiaModalContent.scss';
import Reset from './Images/reset.svg';
import Calender from './Images/calender.svg';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

function ClaudiaModalContent() {

    //datepicker
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

    //change button color

    const activeButtonColor = (e) => {

        //change button to green
        const selectedButton = e.target
        console.log(selectedButton);
        selectedButton.style.backgroundColor = "#438B6B";
        selectedButton.style.color = "#fff";

        //change another button to default

        const getSiblings = function (e) {
            let siblings = [];

            if (!e.parentNode) {
                return siblings;
            }

            let sibling = e.parentNode.firstChild;

            while (sibling) {
                if (sibling.nodeType === 1 && sibling !== e) {
                    siblings.push(sibling);
                }
                sibling = sibling.nextSibling;
            }
            return siblings;

        }

        let siblings = getSiblings(selectedButton);
        console.log('siblings', siblings);

        siblings.forEach(el => {
            console.log('element', el);
            el.style.backgroundColor = "#fff";
            el.style.color = "#438B6B";
        });
    }

    //counter1

    const [count1, setCount1] = useState(1)

    const handleClick1 = (type) => {
        if (type === 'increment') {
            setCount1(count1 + 1)
        }
        if (type === 'decrement' && count1 > 1) {
            setCount1(count1 - 1)
        }
    }

    //counter2

    const [count2, setCount2] = useState(1)

    const handleClick2 = (type) => {
        if (type === 'increment') {
            setCount2(count2 + 1)
        }
        if (type === 'decrement' && count2 > 1) {
            setCount2(count2 - 1)
        }
    }

    return (

        <>
            <div className="claudia-modal">
                <h1>請選擇日期、預定選項</h1>
                <div className="claudia-modal-inline">
                    <h2><b>請選擇參加日期</b></h2>
                    <button className="claudia-modal-inline-reset-button">
                        <h3 className="claudia-modal-inline-right">清除全部</h3>
                        <img alt="" src={Reset} />
                    </button>

                </div>
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    customInput={<ExampleCustomInput />}
                    filterDate={isWeekday}
                    dateFormat="yyyy-MM-dd"
                    minDate={Date.now()}
                />
                <div className="claudia-modal-middle">
                    <div className="claudia-modal-middle-transport">
                        <h3><b>前往方式</b></h3>
                        <div className="claudia-modal-middle-transport-buttons">
                            <button
                                className="claudia-modal-middle-transport-buttons-toggle"
                                onClick={activeButtonColor}>
                                團體報名*
                                </button>
                            <button
                                className="claudia-modal-middle-transport-buttons-toggle"
                                onClick={activeButtonColor}>
                                自行前往
                                </button>
                        </div>
                    </div>
                    <div className="claudia-modal-middle-group-notes">
                        <h4 className="claudia-modal-middle-group-notes-title">*團體報名注意事項</h4>
                        <h4 className="claudia-modal-middle-group-notes-second">5人以上成團</h4>
                        <div className="claudia-modal-middle-group-nums">
                            <h4>目前報名人數：7人</h4>
                            <h5>確定成團</h5>
                        </div>
                        <h4>若人數不足無法成團，會再以email方式聯繫</h4>
                    </div>
                </div>
                <div className="claudia-modal-signup-num">
                    <h3><b>數量</b></h3>
                    <div className="claudia-modal-signup-num-box">
                        <div className="claudia-modal-signup-num-box-left"><b>成人</b></div>
                        <div className="claudia-modal-signup-num-box-right">
                            <div className="claudia-modal-signup-num-box-price-inline">
                                <span><del><b>$900</b></del></span>
                                <span><b>$800</b></span>
                            </div>

                            <div className="claudia-modal-counter-box">
                                <div
                                    onClick={() => {
                                        handleClick1('decrement')
                                    }}
                                    className={
                                        count1 === 1
                                            ? 'claudia-modal-counter-decrement claudia-modal-cursor-default'
                                            : 'claudia-modal-counter-decrement claudia-modal-counter-hover'
                                    }
                                >
                                    <p>-</p>
                                </div>
                                <div className="claudia-modal-counter-count">
                                    <p>{count1}</p>
                                </div>
                                <div
                                    onClick={() => handleClick1('increment')}
                                    className="claudia-modal-counter-increment"
                                >
                                    <p>+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="claudia-modal-signup-num-box">
                        <div className="claudia-modal-signup-num-box-left"><b>兒童</b></div>
                        <div className="claudia-modal-signup-num-box-right">
                            <div className="claudia-modal-signup-num-box-price-inline">
                                <span><del><b>$700</b></del></span>
                                <span><b>$500</b></span>
                            </div>
                            <div className="claudia-modal-counter-box">
                                <div
                                    onClick={() => {
                                        handleClick2('decrement')
                                    }}
                                    className={
                                        count2 === 1
                                            ? 'claudia-modal-counter-decrement claudia-modal-cursor-default'
                                            : 'claudia-modal-counter-decrement claudia-modal-counter-hover'
                                    }
                                >
                                    <p>-</p>
                                </div>
                                <div className="claudia-modal-counter-count">
                                    <p>{count2}</p>
                                </div>
                                <div
                                    onClick={() => handleClick2('increment')}
                                    className="claudia-modal-counter-increment"
                                >
                                    <p>+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="claudia-modal-last-block">
                    <div className="claudia-modal-total-price">
                        <span><b>總金額：</b></span>
                        <span className="claudia-modal-total-price-orange"><b>$2600</b></span>
                    </div>
                    <div className="claudia-modal-cart-button"><button>加入購物車</button></div>

                </div>


            </div>

        </>
    )
}

export default ClaudiaModalContent;