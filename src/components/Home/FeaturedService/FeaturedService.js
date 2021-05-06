import React from "react";
import featured from "../../../images/featuredServic.jpg";
import "./FeaturedService.css";

const FeaturedService = () => {
  return (
    <section className="featured-service">
      <div className="container">
        <div className="row d-flex align-items-center featured">
          <div className="col-md-7 align-self-center text-white">
            <h1>Exceptional Success rate</h1>
            <p className="my-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus atque aperiam ducimus quaerat velit illum tenetur ipsum
              magni earum possimus.
            </p>
            <button className="btn btn-brand"> Learn More</button>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src={featured} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
