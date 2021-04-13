import React from 'react';
import exceptional from '../../../images/Exceptional.png';
import './ExceptionalDental.css';

const ExceptionalDental = () => {
    return (
        <section className="row align-items-center py-5">
            <div className="col-md-6 text-end exceptional-image">
                <img src={exceptional} alt=""/>
            </div>
            <div className="col-md-6 exceptional-text">
                <h2 className="py-3">Exceptional Dental <br/> Care, on Your Terms</h2>
                <p className="text-muted mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis earum a magnam. Nostrum expedita sit dolores nobis laborum doloribus id dolorem cupiditate iste, tenetur incidunt, doloremque tempora quae error impedit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, maxime.`</p>
                <button className="btn primary-button mt-5">LERN MORE...</button>
            </div>
        </section>
    );
};

export default ExceptionalDental;