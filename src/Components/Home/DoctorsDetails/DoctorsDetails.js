import {  faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './DoctorsDetails.css';

const DoctorsDetails = ({doctorsCard}) => {
    return (
        <div className="col-md-4 doctors-card text-center">
            <img src={doctorsCard.image} alt=""/>
            <h5>{doctorsCard.name}</h5>
            <p><FontAwesomeIcon icon={faPhoneAlt} /> {doctorsCard.phone}</p>
        </div>
    );
};

export default DoctorsDetails;