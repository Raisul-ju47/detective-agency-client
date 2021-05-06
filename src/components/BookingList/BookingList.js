import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const BookingList = () => {
  const [orders, setOrders] = useState([]);
  const { value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value2;
  console.log(loggedInUser.email);

  useEffect(() => {
    fetch("https://safe-chamber-06850.herokuapp.com/queries" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="container-fluid row">
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
            {orders.map((order, index) => (
              <tr>
                <td className="text-white">{index + 1}</td>
                <td className="text-white">{order.name}</td>
                <td className="text-white">{order.email}</td>
                <td className="text-white">{order.service}</td>
                <td className="text-white">{order.appointmentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingList;
