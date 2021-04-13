import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoCard.css';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 w-25 text-white">
            <div className={`d-flex justify-content-center p-4 rounded-3 info-${info.background}`}>
                <div>
                    <FontAwesomeIcon className="infoCard-icon" icon={info.icon}/>
                </div>
                <div className="ps-3">
                    <h6>{info.title}</h6>
                    <p>{info.description}</p>
                </div>
            </div>
            
        </div>
    );
};

export default InfoCard;