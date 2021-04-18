import React from "react";
import guy from "../../../images/guy.png";

const Hiring = () => {
  return (
    <section className="features-service pb-0 pb-md-5 my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4 m-md-0">
            <img className="img-fluid" src={guy} alt="" />
          </div>
          <div className="col-md-6 align-self-center">
            <h1>Are You Interested In Working With Us!</h1>
            <p className="text-secondary my-5">
              -: Join our team & start your career as a Guard Master Officer.
              It’s our mission to recruit the best as we always recruiting
              professionals, highly motivated & well presented Security Officers
              to join our team!
            </p>
            <button className="btn btn-brand">View the jobs</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hiring;
