import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';
import './Appointment.css';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        console.log(date)
        setSelectedDate(date)
    }
    return (
        <section className="appointment container-fluid row" style={{
            position: "absolute",
            right: 0,
            backgroundColor: "#0d0d0d",
            height: "100vh",
          }}>
            <Sidebar/>
            <AppointmentHeader handleDateChange={handleDateChange} date={selectedDate}/>
            {/* <BookAppointment date={selectedDate}/> */}
        </section>
    );
};

export default Appointment;