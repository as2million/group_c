import React from 'react';
import './ClaudiaIndexCardIntro.scss'
import farm_intro_pic from './Images/farm_index_intro_pic.jpg';
import Button from '../../../Share/Components/Button/Button';
import { Link } from 'react-router-dom';


function ClaudiaIndexCardIntro() {

    return (
        <>
            <div className="claudia-index-card-intro-outside">
                <div className="claudia-index-card-intro-box">
                    <h1 id="claudia-index-card-intro-city"><b>台北市</b></h1>
                    <h2 id="claudia-index-card-intro-title1"><b>小小城市農夫</b></h2>
                    <h2 id="claudia-index-card-intro-title2"><b>－台北內湖農驛棧有機農園</b></h2>
                    <hr />
                    <img alt="farm_intro_pic" src={farm_intro_pic} />
                    <h3 id="claudia-index-card-intro-intro">想體驗自然風光，採新鮮有機草莓、享用草莓特餐嗎？一起品嘗農園特製—草莓蔬果捲、草莓蜜雞，各種DIY任你玩！</h3>
                    <Link to="/farmIntro">
                        <div className="claudia-index-card-intro-button">
                            <Button className="button-btn-g" text="閱讀更多" />
                        </div>
                    </Link>

                </div>

            </div>

        </>
    )

}

export default ClaudiaIndexCardIntro;