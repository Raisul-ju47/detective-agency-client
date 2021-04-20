import React from "react";

const AppointmentDataTable = ({ appointments }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-white text-left" scope="col">
            Sr No
          </th>
          <th className="text-white" scope="col">
            Name
          </th>
          <th className="text-white" scope="col">
            Email
          </th>
          <th className="text-white" scope="col">
            Service
          </th>
          <th className="text-white" scope="col">
            Appointment Date
          </th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr>
            <td className="text-white">{index + 1}</td>
            <td className="text-white">{appointment.name}</td>
            <td className="text-white">{appointment.email}</td>            
            <td className="text-white">{appointment.service}</td>
            <td className="text-white">{appointment.appointmentDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentDataTable;
