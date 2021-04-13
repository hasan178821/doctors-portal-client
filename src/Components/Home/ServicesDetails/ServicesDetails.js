import React from 'react';

const ServicesDetails = ({serviceData}) => {
    return (
        <div className="col-md-4 text-center py-4 px-5">
                <img src={serviceData.image} style={{height: '50px', margin: '10px 0'}} alt=""/>
                <h4 style={{padding: '10px 0', color: 'grey'}}>{serviceData.name}</h4>
                <p className='text-muted'>{serviceData.details}</p>
        </div>
    );
};

export default ServicesDetails;