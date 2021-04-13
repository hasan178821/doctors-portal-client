import React from 'react';
import './AppoinmentSection.css';
import appointment from '../../../images/appointment.png';

const AppoinmentSection = () => {
    return (
        <section className="row appointment-section justify-content-center align-items-center">
            <div className="col-md-4 appointment-left">
                <img src={appointment} alt=""/>
            </div>
            <div className="col-md-8 w-50">
                <h6>APPOINTMENT</h6>
                <h2 className="py-2">Make an appointment <br/> Today</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic aliquid amet culpa natus iusto quis omnis ratione deleniti molestias?</p>
                <button className="btn primary-button my-4">LEARN MORE...</button>
            </div>
        </section>
    );
};

export default AppoinmentSection;