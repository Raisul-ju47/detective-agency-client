import React from "react";
import "./MakeAppointment.css";
import detective from "../../../images/detective.png";
import { Link } from "react-router-dom";


const MakeAppointment = () => {
  return (
    <section className="make-appointment">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <img src={detective} alt="" />
          </div>
          <div className="col-md-7 py-5">
            <h5>APPOINTMENT</h5>
            <h1 className="my-4">Make an appointment</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, adipisci.
            </p>
            <Link to="/appointment">
              <button class="btn btn-brand ms-5">Make Appointment</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
