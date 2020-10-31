import React from 'react';
import './ClaudiaModalFrame.scss';
import Cross from './Images/cross.svg';

const ClaudiaModalFrame = (props) => {
    const { closeModal } = props;

    return (
        <div className="overlay">
            <div onClick={closeModal} className="claudia-modal-bg">
                <img className="claudia-modal-cross-img" alt="" src={Cross} />
                {props.children}
            </div>

        </div>
    );
};


export default ClaudiaModalFrame;