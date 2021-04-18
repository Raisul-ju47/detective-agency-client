import React from "react";
import spy from '../../../images/spy.jpg';
import Calendar from 'react-calendar';
import { useState } from "react";
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {

    
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
        <img
          className="img-fluid"
          style={{ width: "500px" }}
          src={spy}
          alt=""
        />
      </div>
    </main>
  );
};

export default AppointmentHeader;
