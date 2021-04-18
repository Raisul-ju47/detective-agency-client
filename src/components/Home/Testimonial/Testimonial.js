import React from "react";
import './Testimonial.css';

const Testimonial = (props) => {
  const { quote, name, from, img } = props.testimonial;

  return (
    <div className="col">
      <div className="card shadow-sm pb-4 testimonial text-white">
        <div className="card-body">
          <p className="card-text text-center">{quote}</p>
        </div>
        <div className="d-flex  align-items-center">
          <img className="mx-3" src={img} alt="" width="60" />
          <div className="">
            <h6>{name}</h6>
            <p className="m-0">{from}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
