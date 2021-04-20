import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import ProcessPayment from "../../ProcessPayment/ProcessPayment";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ date }) => {
  const { id } = useParams();

  const [service, setService] = useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  console.log(service.name);


  const [info, setInfo] = useState([]);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
    console.log(newInfo);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    console.log(info);
    formData.append("service", service.name);
    formData.append("cost", service.cost);
    formData.append("appointmentDate", date.toDateString());
    formData.append("name", info.name);
    formData.append("email", info.email);
    

    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="col-md-8 mt-5 text-white">
      <h1>Appointment</h1>
      <p>
        <small>On {date.toDateString()}</small>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="form-group mt-2">
          <input
            onBlur={handleBlur}
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mt-2">
          <div className="btn btn-light">{service.name}</div>
        </div>
        <div className="align-items-center">
          <div>
            <h5>Your services will cost you {service.cost}</h5>
          </div>
          <div>
            <ProcessPayment/>
            <button type="submit" className="btn btn-brand mt-5">
              Pay
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingCard;
