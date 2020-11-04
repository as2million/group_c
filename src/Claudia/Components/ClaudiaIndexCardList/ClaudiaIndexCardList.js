import React from 'react';
import './ClaudiaIndexCardList.scss'

function ClaudiaIndexCardList() {
    const showFarmIntro = () => {
        // console.log('test')
        // console.log(document.getElementsByClassName('claudia-index-card-list-box')[0]);
        document.getElementsByClassName('claudia-index-card-list-box')[0].style.display = 'none';
        document.getElementsByClassName('claudia-index-card-list-box')[0].style.opacity = 0;
        document.getElementsByClassName('claudia-index-card-intro-box')[0].style.display = 'block';
        document.getElementsByClassName('claudia-index-card-intro-box')[0].style.opacity = 1;

        // console.log('TorF', document.getElementsByClassName('claudia-index-card-intro-box')[0].style.display)
    }

    return (
        <>
            <div className="claudia-index-card-list-outside">
                <div className="claudia-index-card-list-box">
                    <h1 id="claudia-index-card-list-city"><b>台北市</b></h1>
                    <h2 id="claudia-index-card-list-text">點選農場名稱，看更多資訊～</h2>
                    <button
                        onClick={showFarmIntro}
                        className="claudia-index-card-list-box-button">
                        <div className="claudia-index-card-list-box-name-text">
                            <p><b>小小城市農夫</b></p>
                            <p><b>－台北內湖農驛棧有機農園</b></p>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ClaudiaIndexCardList;