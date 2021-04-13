import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

const infoData = [
    {
        title : 'Opening hours',
        description: 'We are opening in 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title : 'Visit Our Location',
        description: 'Brooklyn, NY 10036, US',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title : 'Contact Us Now',
        description: '+10256314422',
        icon: faPhoneAlt,
        background: 'primary'
    },
]

const BusinessInfo = () => {
    
    return (
        <section className="row justify-content-center">
            {
                infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
        </section>
    );
};

export default BusinessInfo;