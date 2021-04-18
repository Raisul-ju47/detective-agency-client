import React from "react";

const AppointmentShortList = ({ appointments }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-white" scope="col">
            Name
          </th>
          <th className="text-white" scope="col">
            Phone
          </th>
          <th className="text-white" scope="col">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr>
            <td className="text-white">{appointment.name}</td>
            <td className="text-white">{appointment.phone}</td>
            <td className="text-white">{appointment.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentShortList;
