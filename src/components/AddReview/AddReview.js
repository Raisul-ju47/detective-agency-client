import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const AddReview = () => {
  const [info, setInfo] = useState({});

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
    console.log(newInfo);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    console.log(info);
    formData.append("name", info.name);
    formData.append("company", info.company);
    formData.append("description", info.description);

    fetch("https://safe-chamber-06850.herokuapp.com/addReview", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="container-fluid row">
      <Sidebar />
      <div
        className="col-md-10 p-4 pr-5"
        style={{
          position: "absolute",
          right: 0,
          backgroundColor: "#0d0d0d",
          height: "100vh",
        }}
      >
        <h5 className="text-white">Leave a Review</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-5">
            <input
              onBlur={handleBlur}
              type="name"
              className="form-control"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group mt-3">
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="company"
              placeholder="Your Company Name, Designation"
            />
          </div>
          <div className="form-group mt-3">
          <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              cols="30"
              rows="10"
              name="description"
              placeholder="Description"
            />
          </div>
          <button type="submit" className="btn btn-brand mt-5">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddReview;
