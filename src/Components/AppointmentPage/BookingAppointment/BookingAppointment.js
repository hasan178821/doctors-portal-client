import React from 'react';
import BookAppointmentCard from '../BookAppointmentCard/BookAppointmentCard';

const bookingCardData = [
    {
        id: '1',
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: '10',
    },
    {
        id: '2',
        name: 'Cosmetic Dentistry',
        time: '9:00 AM - 11:00 AM',
        space: '14',
    },
    {
        id: '3',
        name: 'Teeth Cleaning',
        time: '5:00 PM - 7:00 PM',
        space: '16',
    },
    {
        id: '4',
        name: 'Cavity Protection',
        time: '7:00 AM - 8:30 AM',
        space: '10',
    },
    {
        id: '5',
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: '8',
    },
    {
        id: '6',
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: '13',
    },
]
const BookingAppointment = ({date}) => {
    return (
        <section className="row py-5 text-center justify-content-center">
            <h3 className="text-brand text-center py-3">Available Appointments on {date.toDateString()}</h3>
            {
                bookingCardData.map(bookCard => <BookAppointmentCard bookCard={bookCard} key={bookCard.id} date={date}></BookAppointmentCard>)
            }
        </section>
    );
};

export default BookingAppointment;