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
            Gender
          </th>
          <th className="text-white" scope="col">
            Age
          </th>
          <th className="text-white" scope="col">
            Weight
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
            <td className="text-white">{index + 1}</td>
            <td className="text-white">{appointment.name}</td>
            <td className="text-white">{appointment.gender}</td>
            <td className="text-white">{appointment.age}</td>
            <td className="text-white">{appointment.weight}KG</td>
            <td className="text-white">{appointment.phone}</td>
            <td className="text-white">{appointment.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentDataTable;
