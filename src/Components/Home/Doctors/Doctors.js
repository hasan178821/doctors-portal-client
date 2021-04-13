import React from 'react';
import DoctorsDetails from '../DoctorsDetails/DoctorsDetails';
import doctorsPic from '../../../images/appointment.png';

const doctorsData = [
    {
        name: 'Dr. Coudi',
        image: doctorsPic,
        phone: '+159348485944'
    },
    {
        name: 'Dr. Coudi',
        image: doctorsPic,
        phone: '+159348485944'
    },
    {
        name: 'Dr. Coudi',
        image: doctorsPic,
        phone: '+159348485944'
    },
]
const Doctors = () => {
    return (
        <div className="row my-5">
            <h4 style={{color: '#11d0d9', textAlign: 'center', marginBottom: '25px'}}>Our Doctors</h4>
            {
                doctorsData.map(doctorsCard => <DoctorsDetails doctorsCard={doctorsCard}></DoctorsDetails>)
            }
        </div>
    );
};

export default Doctors;