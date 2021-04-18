import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";



const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-4 text-center">
      <img style={{height: '200px'}} src={`data:image/png;base64,${service.image.img}`} alt=""/>
      <h5 className="mt-4 mb-4">{service.name}</h5>
      <p className="text-secondary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, vitae!
      </p>
      <Link to="/appointment">
        <button className="btn btn-brand">Make Appointment</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
