import React from "react";
import "./Detective.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import guy from "../../../images/guy.png";

const Detective = ({ detective }) => {
  console.log(detective)
  return (
    <div className="col-md-4 col-sm-6 text-center">
      {detective.image ? (
        <img
          style={{ height: "200px" }}
          src={`data:image/png;base64,${detective.image.img}`}
        />
      ) : (
        <img
          style={{ height: "200px" }}
          className="img-fluid mb-3"
          src={`https://safe-chamber-06850.herokuapp.com/${detective.img}`}
          alt=""
        />
      )}
      <h4>{detective.name}</h4>
      <p>
        {" "}
        <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} />{" "}
        +880-188-934789
      </p>
    </div>
  );
};

export default Detective;
