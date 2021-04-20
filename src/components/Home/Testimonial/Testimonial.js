import React from "react";
import "./Testimonial.css";

const Testimonial = (props) => {
  const { name, company, description } = props.testimonial;

  return (
    <div className="col">
      <div className="card shadow-sm pb-4 testimonial text-white">
        <div className="card-body">
          <p className="card-text text-center">{description}</p>
        </div>
        <div className="text-center">
          <h6>{name}</h6>
          <p className="m-0">Company: {company}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
