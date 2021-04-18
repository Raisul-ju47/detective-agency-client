import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();

    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert('Appointment Created Successfully');
        }
      });
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center text-brand">{appointmentOn}</h2>
        <p className="text-secondary text-center">
          <small>ON {date.toDateString()}</small>
        </p>
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control"
            />
          </div>
          <div className="form-group mt-3">
            <input
              {...register("phone", { required: true })}
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="form-control"
            />
          </div>
          <div className="form-group mt-3">
            <input
              {...register("email", { required: true })}
              type="text"
              name="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="form-group row mt-3">
            <div className="col-4">
              <select
                className="form-control"
                name="gender"
                {...register("gender", { required: true })}
              >
                <option disabled={true} value="Not set">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
            </div>
            <div className="col-4">
              <input
                {...register("age", { required: true })}
                className="form-control"
                name="age"
                placeholder="Your Age"
                type="number"
              />
            </div>
            <div className="col-4">
              <input
                {...register("weight", { required: true })}
                className="form-control"
                name="weight"
                placeholder="Weight"
                type="number"
              />
            </div>
          </div>
          <div className="form-group text-end">
            <button type="submit" value="Submit" className="btn btn-brand">
              Send
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
