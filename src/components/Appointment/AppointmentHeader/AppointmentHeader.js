import React from "react";
import spy from '../../../images/spy.jpg';
import Calendar from 'react-calendar';
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import BookAppointment from "../BookAppointment/BookAppointment";
import BookingCard from "../BookindCard/BookingCard";

const AppointmentHeader = ({handleDateChange, date}) => {

    
  return (
    <main className="row" style={{backgroundColor: '#0d0d0d', paddingLeft: '350px'}}>
      <div className="col-md-7 text-white mt-5">
        <h1>Appointment</h1>
        <Calendar style={{marginLeft: '50px'}}
        onChange={handleDateChange}
        value={new Date()}
      />
      </div>
      <div className="col-md-4">
        <BookingCard date={date} />
      </div>
    </main>
  );
};

export default AppointmentHeader;
