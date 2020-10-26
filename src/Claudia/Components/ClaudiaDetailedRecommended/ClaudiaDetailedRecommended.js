import React from 'react';
import './ClaudiaDetailedRecommended.scss';
import Farm from './Images/JPG/farm_recommanded.jpg';
import Wave from './Images/SVG/wave.svg';

function ClaudiaDetailedRecommended() {

    return (
        <>
            <div className="claudia-detailed-recommanded">
                <div className="claudia-detailed-recommanded-container">
                    <h1><b>更多推薦</b></h1>
                    <div className="claudia-detailed-recommanded-card-container">
                        <div className="claudia-detailed-recommanded-card">
                            <h2>荖阡坑教育實習農園</h2>
                            <h2>一日遊</h2>
                            <img alt="farm_recommanded" src={Farm} />
                            <h3>日期：2020/09/01（一）</h3>
                            <h3>價錢：900元/1人</h3>
                            <h3>集合地點：台北車站</h3>
                            <h3>地址：台北市內湖區碧山路58-1號</h3>
                        </div>
                        <div className="claudia-detailed-recommanded-card">
                            <h2>荖阡坑教育實習農園</h2>
                            <h2>一日遊</h2>
                            <img alt="farm_recommanded" src={Farm} />
                            <h3>日期：2020/09/01（一）</h3>
                            <h3>價錢：900元/1人</h3>
                            <h3>集合地點：台北車站</h3>
                            <h3>地址：台北市內湖區碧山路58-1號</h3>
                        </div>
                        <div className="claudia-detailed-recommanded-card">
                            <h2>荖阡坑教育實習農園</h2>
                            <h2>一日遊</h2>
                            <img alt="farm_recommanded" src={Farm} />
                            <h3>日期：2020/09/01（一）</h3>
                            <h3>價錢：900元/1人</h3>
                            <h3>集合地點：台北車站</h3>
                            <h3>地址：台北市內湖區碧山路58-1號</h3>
                        </div>
                    </div>
                </div>
                <div><img alt="" src={Wave} /></div>

            </div>
        </>
    )
}

export default ClaudiaDetailedRecommended;