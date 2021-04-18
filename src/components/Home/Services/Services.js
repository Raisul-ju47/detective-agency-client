import React, { useEffect, useState } from "react";
import './Services.css';
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
    .then((res) => res.json())
    .then((data) => setServices(data));
  }, [])

  return (
    <section className="services-container">
      <div className="text-center">
        <h5>OUR SERVICES</h5>
        <h2 className="mt-5">Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-75 row mt-5">
          {services.map((service) => (
            <ServiceDetail service={service}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
