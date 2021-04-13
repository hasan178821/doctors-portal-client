import React from 'react';
import AppointmentBookForm from '../AppointmentBookForm/AppointmentBookForm';
import './BookAppointmentCard.css';

const BookAppointmentCard = ({bookCard, date}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div className="col-md-4 appointment-booking-card">
            <h4 className="text-brand">{bookCard.name}</h4>
            <h6>{bookCard.time}</h6>
            <p className="text-muted">{bookCard.space} SPACES AVAILABLE</p>
            <button onClick={openModal} className="btn brand-button">BOOK APPOINTMENT</button>
            <AppointmentBookForm date={date} modalIsOpen={modalIsOpen} bookCard={bookCard} closeModal={closeModal}></AppointmentBookForm>
        </div>
    );
};

export default BookAppointmentCard;