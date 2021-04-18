import React, { useState } from "react";
import { useEffect } from "react";
import AppointmentDataTable from "../AppointmentDataTable/AppointmentDataTable";
import Sidebar from "../Sidebar/Sidebar";

const MainDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="container-fluid row ">
      <Sidebar />
      <div
        className="col-md-10 p-4 pr-5"
        style={{
          position: "absolute",
          right: 0,
          backgroundColor: "#0d0d0d",
          height: "100vh",
        }}
      >
        <h5 className="text-white">Dashboard</h5>
        <div className="row">
          <div
            className="col-md-2 text-white d-flex justify-content-center align-items-center m-3"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <h1>10</h1>
            <p className="ps-3 pt-2">Pending Appointments</p>
          </div>
          <div
            className="col-md-3 text-white d-flex justify-content-center align-items-center m-3"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <h1>10</h1>
            <p className="ps-3 pt-2">Pending Appointments</p>
          </div>
          <div
            className="col-md-3 text-white d-flex justify-content-center align-items-center m-3"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <h1>10</h1>
            <p className="ps-3 pt-2">Pending Appointments</p>
          </div>
          <div
            className="col-md-3 text-white d-flex justify-content-center align-items-center m-3"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <h1>10</h1>
            <p className="ps-3 pt-2">Pending Appointments</p>
          </div>
        </div>
        <div>
          <h5 className="text-white mt-5">Recent Clients</h5>
          <AppointmentDataTable appointments={appointments} />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
