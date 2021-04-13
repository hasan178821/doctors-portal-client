import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Textimonial.css';
import winson from '../../../images/Ellipse 1.png';
import milson from '../../../images/Ellipse 2.png';
import ema from '../../../images/Ellipse 3.png';

const testimonialData = [
    {
        name: 'Winson Herry',
        from: 'California',
        image: winson,
        feedback: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero itaque corporis ea ratione enim? Harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit quo, aliquid commodi voluptates animi!'
    },
    {
        name: 'Winson Herry',
        from: 'California',
        image: milson,
        feedback: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero itaque corporis ea ratione enim? Harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit quo, aliquid commodi voluptates animi!'
    },
    {
        name: 'Winson Herry',
        from: 'California',
        image: ema,
        feedback: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero itaque corporis ea ratione enim? Harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit quo, aliquid commodi voluptates animi!'
    },
]

const Testimonial = () => {
    return (
        <section>
            <div className="row align-items-center offset-md-1 pb-3">
                <div className="col-md-6">
                    <h6 style={{color: '#11d0d9'}}>Testimonial</h6>
                    <h2>What's Our Patients <br/> Says</h2>
                </div>
                <div className="col-md-6 text-center">
                    <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
                </div>
            </div>
            <div className="row px-5 justify-content-center">
                {
                    testimonialData.map(cardData => <TestimonialCard cardData={cardData}></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;