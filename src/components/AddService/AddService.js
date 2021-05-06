import React from "react";
import { useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const AddService = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
    console.log(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  
  const handleSubmit = () => {
    const formData = new FormData();
    console.log(info);
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("cost", info.cost);

    fetch("https://safe-chamber-06850.herokuapp.com/addService", {
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
      <Sidebar/>
      <div
        className="col-md-10 p-4 pr-5"
        style={{
          position: "absolute",
          right: 0,
          backgroundColor: "#0d0d0d",
          height: "100vh",
        }}
      >
        <h5 className="text-white"> Add a service</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label className="text-white" htmlFor="exampleInputPassword1">
              Name
            </label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group mt-5">
            <label className="text-white" htmlFor="exampleInputEmail1">
              Cost
            </label>
            <input
              onBlur={handleBlur}
              type="cost"
              className="form-control"
              name="cost"
              placeholder="cost"
            />
          </div>
          <div className="form-group mt-3">
            <label className="text-white" htmlFor="exampleInputPassword1">
              Upload a image
            </label>
            <input
              onChange={handleFileChange}
              type="file"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Picture"
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

export default AddService;
