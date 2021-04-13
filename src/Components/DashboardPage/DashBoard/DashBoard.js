import React, { useEffect, useState } from "react";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const DashBoard = () => {
    const [selectedDate, setSelectedDate] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const handleChangeDate = (date) =>{
      console.log(date)
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:5050/appointmentsByDate', {
          method: 'POST',
          headers: {'Content-Type' : 'Application/json'},
          body: JSON.stringify({date: selectedDate})
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAppointments(data);
      })
      },[selectedDate])

  return (
    <section className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-5 py-5">
        <Calendar onChange={handleChangeDate} value={new Date()} />
      </div>
      <div className="col-md-5  py-5">
        <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
      </div>
    </section>
  );
};

export default DashBoard;
