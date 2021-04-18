import React, { useEffect, useState } from "react";
import AppointmentDataTable from "../../Dashboard/AppointmentDataTable/AppointmentDataTable";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const AllCustomers = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <section>
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
          <h5 className="text-white">All Clients</h5>
          <AppointmentDataTable appointments={appointments} />
        </div>
      </div>
    </section>
  );
};

export default AllCustomers;
