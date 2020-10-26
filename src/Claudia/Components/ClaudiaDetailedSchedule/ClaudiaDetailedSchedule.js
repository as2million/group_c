import React from 'react';
import Timeline from './Images/SVG/timeline.svg';
import './ClaudiaDetailedSchedule.scss';
import Schedule1 from './Images/JPG/schedule1.jpg';

function ClaudiaDetailedSchedule() {
    return (
        <>
            <div className="claudia-detailed-schedule">
                <h1><b>活動行程</b></h1>
                <div className="claudia-detailed-schedule-container">
                    <img alt="timeline" src={Timeline} />
                    <div className="claudia-detailed-schedule-card1">
                        <div className="claudia-detailed-schedule-card1-text">
                            <h2>9:30</h2>
                            <h3>有機農場五感體驗</h3>
                        </div>
                        <img alt="" src={Schedule1} />
                    </div>
                    <div className="claudia-detailed-schedule-card1">
                        <div className="claudia-detailed-schedule-card1-text">
                            <h2>9:30</h2>
                            <h3>有機農場五感體驗</h3>
                        </div>
                        <img alt="" src={Schedule1} />
                    </div>




                </div>


            </div>

        </>
    )
}

export default ClaudiaDetailedSchedule;