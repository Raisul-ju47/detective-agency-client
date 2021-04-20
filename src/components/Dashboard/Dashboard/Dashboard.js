import React from "react";
import { useState } from "react";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { UserContext } from '../../../App';

const containerStyle = {
  backgroundColor: "#0d0d0d",
  height: "100vh",
};

const Dashboard = () => {
    const {value2} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);


    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect( () => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data => setAppointments(data))
    }, [selectedDate]);

  return (
    <section style={containerStyle}>
      <div className="container-fluid row">
        <div className="col-md-2">
          <Sidebar/>
        </div>
        <div className="col-md-5 d-flex justify-content-center">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5">
          <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
