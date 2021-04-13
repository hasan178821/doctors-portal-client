import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({cardData}) => {
    return (
        <div className="col-md-4 testimonial-card p-4 my-5">
            <p className="py-3">{cardData.feedback}</p>
            <div className="testimonial-person d-flex justify-content-center align-items-center py-4">
                <img src={cardData.image} alt=""/>
                <div>
                    <h6>{cardData.name}</h6>
                    <p>{cardData.from}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;