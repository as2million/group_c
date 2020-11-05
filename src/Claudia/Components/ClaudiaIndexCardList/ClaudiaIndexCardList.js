import React, { useEffect } from 'react';
import './ClaudiaIndexCardList.scss'
import Cross from './Images/cross.svg';

function ClaudiaIndexCardList(props) {

    const { city, data } = props;


    //show farm intro

    const showFarmIntro = () => {
        // console.log('test')
        // console.log(document.getElementsByClassName('claudia-index-card-list-box')[0]);
        document.getElementsByClassName('claudia-index-card-list-box')[0].style.display = 'none';
        document.getElementsByClassName('claudia-index-card-list-box')[0].style.opacity = 0;
        document.getElementsByClassName('claudia-index-card-intro-box')[0].style.display = 'block';
        document.getElementsByClassName('claudia-index-card-intro-box')[0].style.opacity = 1;

        // console.log('TorF', document.getElementsByClassName('claudia-index-card-intro-box')[0].style.display)
    }

    //add buttons
    if (data) {
        // console.log('data', data);
        // console.log('data', data.length);


        document.getElementsByClassName('claudia-index-card-list-box-buttons')[0].innerHTML = ''

        for (let i = 0; i < data.length; i++) {
            const temp = `
            <button>
                <div>
                    <p><b>${data[i].farm}</b></p>
                </div>
            </button>
            `
            document.getElementsByClassName('claudia-index-card-list-box-buttons')[0].innerHTML += temp;

            //addClassName
            document.getElementsByClassName('claudia-index-card-list-box-buttons')[0].children[i].className += "claudia-index-card-list-box-button"
            document.getElementsByClassName('claudia-index-card-list-box-buttons')[0].children[i].children[0].className += "claudia-index-card-list-box-name-text"
        }

        //addEventListener
        console.log('test', document.getElementsByClassName('claudia-index-card-list-box-buttons')[0].children)
        const buttons = document.getElementsByClassName('claudia-index-card-list-box-buttons')[0].children

        for (let item of buttons) {
            item.addEventListener('click', () => showFarmIntro())
        }
    }

    return (
        <>
            <div className="claudia-index-card-list-outside">
                <div className="claudia-index-card-list-box">
                    <h1 id="claudia-index-card-list-city"><b>{city}</b></h1>
                    <h2 id="claudia-index-card-list-text">點選農場名稱，看更多資訊～</h2>
                    <div className="claudia-index-card-list-box-buttons">
                        {/* <button
                            onClick={showFarmIntro}
                            className="claudia-index-card-list-box-button">
                            <div className="claudia-index-card-list-box-name-text">
                                <p><b>小小城市農夫－台北內湖農驛棧有機農園</b></p>
                            </div>
                        </button>
                        <button
                            onClick={showFarmIntro}
                            className="claudia-index-card-list-box-button">
                            <div className="claudia-index-card-list-box-name-text">
                                <p><b>小小城市農夫－台北內湖農驛棧有機農園</b></p>
                            </div>
                        </button>
                        <button
                            onClick={showFarmIntro}
                            className="claudia-index-card-list-box-button">
                            <div className="claudia-index-card-list-box-name-text">
                                <p><b>小小城市農夫－台北內湖農驛棧有機農園</b></p>
                            </div>
                        </button>
                        <button
                            onClick={showFarmIntro}
                            className="claudia-index-card-list-box-button">
                            <div className="claudia-index-card-list-box-name-text">
                                <p><b>小小城市農夫－台北內湖農驛棧有機農園</b></p>
                            </div>
                        </button> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default ClaudiaIndexCardList;