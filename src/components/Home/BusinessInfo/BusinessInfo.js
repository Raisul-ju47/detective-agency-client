import React from "react";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import InfoCard from "../InfoCard/InfoCard";

const infosData = [
  {
    title: "Opening Hours",
    description: "We are open 7 days",
    icon: faClock,
    background: "dark",
  },
  {
    title: "Visit Our Location",
    description: "Brooklyn, NY 10003 USA",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call us now",
    description: "+1565656556",
    icon: faPhone,
    background: "dark",
  },
];

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center mt-5">
      <div className="w-75 row">
        {infosData.map((info) => (
          <InfoCard info={info}/>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
