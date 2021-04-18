import React from "react";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Detectives from "../Detectives/Detectives";
import FeaturedService from "../FeaturedService/FeaturedService";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import Hiring from "../Hiring/Hiring";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Services />
      <FeaturedService />
      <MakeAppointment />
      <Testimonials />
      <Blogs />
      <Detectives/>
      <Contact />
      <Hiring />
      <Footer />
    </div>
  );
};

export default Home;
