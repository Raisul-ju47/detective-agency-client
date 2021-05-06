import React from "react";
import "./HeaderMain.css";
import spy from "../../../images/spy.jpg";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const HeaderMain = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <main className="header-main row">
      <div className="col-md-7 text-center text-white">
        <h1>
          Worldwide <br /> Private Investigators & <br /> Intelligent Services{" "}
        </h1>
        <h5 className="mt-5 text-white">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings <br /> of spring which I enjoy with my whole
          heart.
        </h5>
        <Link to="/login">
          <button class="btn btn-brand mt-5">Read More</button>
        </Link>
      </div>
      <img className="img-fluid" style={{ width: "500px" }} src={spy} alt="" />
    </main>
  );
};

export default HeaderMain;
