import React from "react";
import { Link } from "react-router-dom";
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-4 text-center mb-5">
      <div className="card">
        <div className="card-image mt-3">
          <img
            style={{ height: "200px" }}
            src={`data:image/png;base64,${service.image.img}`}
            alt=""
          />
        </div>
        <div className="card-text">
          <h5 className="mt-3 mb-1 text-white">{service.name}</h5>
          <p className="text-white">Cost: {service.cost}</p>
          <Link to={`/service/${service._id}`}>
            <button className="btn btn-brand mb-2">Make Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
