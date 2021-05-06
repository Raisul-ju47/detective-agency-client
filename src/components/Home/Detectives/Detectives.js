import React, { useState } from "react";
import { useEffect } from "react";
import "./Detectives.css";

import guy from "../../../images/guy.png";
import Detective from "../Detective/Detective";

// const detectives = [
//     {
//         title : 'Check at least a doctor in a year for your teeth',
//         description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
//         author:'Dr. Cudi',
//         authorImg : guy,
//         date : '23 April 2019'
//     },
//     {
//         title : 'Two time brush in a day can keep you healthy',
//         description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
//         author:'Dr. Sinthia',
//         authorImg : guy,
//         date : '23 April 2019'
//     },
//     {
//         title : 'The tooth cancer is taking a challenge',
//         description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
//         author:'Dr. Cudi',
//         authorImg : guy,
//         date : '23 April 2019'
//     },
// ]

const Detectives = () => {
  const [detectives, setDetectives] = useState([]);

  useEffect(() => {
    fetch("https://safe-chamber-06850.herokuapp.com/detectives")
      .then((res) => res.json())
      .then((data) => setDetectives(data));
  }, []);

  return (
    <section className="detectives">
      <div className="container text-white">
        <div className="section-header text-center">
          <h1 className="pt-5">Our Detectives</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-5 mt-5 pb-5">
          {detectives.map((detective) => (
            <Detective detective={detective} key={detective.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Detectives;
