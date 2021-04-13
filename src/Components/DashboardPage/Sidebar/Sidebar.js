import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="row side-bar">
            <ul className="col-md-12 side-bar-menu">
                <Link to="/dashboard/appointments"><li>Dashboard</li></Link>
                <Link to="/appointmentPage"> <li>Appointment</li></Link>
                <Link to="/dashboard/addDoctorPage"><li>Add Doctor</li></Link>
                <Link to="/patients"> <li>Patients</li></Link>
                <Link to="prescriptions"><li>Prescriptions</li></Link>
                <Link to="settings"><li>Setting</li></Link>
            </ul>
        </div>
    );
};

export default Sidebar;