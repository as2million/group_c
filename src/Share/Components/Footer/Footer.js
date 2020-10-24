import React from 'react';
import './Footer.scss';
import Facebook from '../Images/SVG/facebook.svg';
import Instagram from '../Images/SVG/instagram.svg';

function Footer() {
    return (
        <>
            <div className="navbar-background">
                <div className="navbar-card">
                    <div className="navbar-footer-text">
                        <a href="#"><p>常見問題</p></a>
                        <a href="#"><p>服務條款</p></a>
                        <a href="#"><p>關於我們</p></a>
                        <a href="#"><p>隱私權政策</p></a>
                    </div>
                    <div className="navbar-icons">
                        <a>
                            <img src={Facebook} />
                        </a>
                        <a>
                            <img src={Instagram} />
                        </a>
                    </div>
                    <div className="navbar-copyright">
                        <p>Copyright © 2020 拾餐便當. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Footer;