import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServicesDetails from '../ServicesDetails/ServicesDetails';


const servicesData = [
    {
        name: 'Fluoride Treatment',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab omnis quae quos! Sit laudantium ',
        image: fluoride
    },
    {
        name: 'Cavity Filling',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab omnis quae quos! Sit laudantium ',
        image: cavity
    },
    {
        name: 'Teeth Whitening',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab omnis quae quos! Sit laudantium ',
        image: whitening
    },
]
const Services = () => {
    return (
        <section className="row px-5">
            <div className='text-center my-5'>
                <h5 style={{color: '#1cc7c1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            {
                servicesData.map(serviceData => <ServicesDetails serviceData={serviceData}></ServicesDetails>)
            }
        </section>
    );
};

export default Services;