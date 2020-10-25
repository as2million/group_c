import React from 'react';
import './ClaudiaIndexCard.scss'
import farm_intro_pic from './Images/farm_index_intro_pic.jpg';

function ClaudiaIndexCard() {

    return (
        <>
            <div className="claudia-index-card-outside">
                <div className="claudia-index-card">
                    <h1 id="claudia-index-card-city"><b>台北市</b></h1>
                    <h2 id="claudia-index-card-title1"><b>小小城市農夫</b></h2>
                    <h2 id="claudia-index-card-title2"><b>－台北內湖農驛棧有機農園</b></h2>
                    <hr />
                    <img alt="farm_intro_pic" src={farm_intro_pic} />
                    <h3 id="claudia-index-card-intro">想體驗自然風光，採新鮮有機草莓、享用草莓特餐嗎？一起品嘗農園特製—草莓蔬果捲、草莓蜜雞，各種DIY任你玩！</h3>
                </div>

            </div>

        </>
    )

}

export default ClaudiaIndexCard;