import React from 'react';
import chair from '../../../images/chair.png';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import './BannerSection.css';

const BannerSection = () => {
    return (
        <>
            <main style={{height: '82vh'}} className="row d-flex align-items-center ">
                    <div className="col-md-4 offset-md-1">
                        <h1>Your New Smile <br/> Starts Here</h1>
                        <p className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi recusandae incidunt fugit obcaecati ea exercitationem.</p>
                        <button className="btn primary-button">
                            GET APPOINTMENT
                        </button>
                    </div>
                    <div className="col-md-6">
                        <img src={chair} alt="" className="img-fluid"/>
                    </div>
            </main>
            <BusinessInfo></BusinessInfo>
        </>
    );
};

export default BannerSection;