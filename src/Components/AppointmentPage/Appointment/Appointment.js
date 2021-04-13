import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import BookingAppointment from '../BookingAppointment/BookingAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleChangeDate = (date) =>{
        setSelectedDate(date);
        console.log(date);
    }
    return (
        <div>
            <Header></Header>
            <AppointmentBanner handleChangeDate={handleChangeDate}></AppointmentBanner>
            <BookingAppointment date={selectedDate}></BookingAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;