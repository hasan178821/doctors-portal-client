import React, { useEffect, useState } from 'react';

const AppointmentsByDate = (props) => {
    const appointmentDate = props.appointments;
    // console.log(appointmentDate);
    return (
        <div>
            <h1>Appointments: {appointmentDate.length}</h1>
            {
                appointmentDate.map(appointmentInfo => 
                <ul>
                    <li>{appointmentInfo.name}</li>
                </ul> )
            }
        </div>
    );
};

export default AppointmentsByDate;