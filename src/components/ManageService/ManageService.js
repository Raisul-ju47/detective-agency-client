import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const ManageService = () => {
  const { value1 } = useContext(UserContext);
  const [services, setServices] = value1;

  const deleteService = (event, id) => {
    console.log(event.target.parentNode.parentNode);
    console.log(id);
    fetch(`https://safe-chamber-06850.herokuapp.com/delete/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(result => {
        if(result){
            event.target.parentNode.parentNode.style.display = 'none';
            window.location.reload();
        }
    });
  };

  return (
    <section>
      <div className="container-fluid row">
        <Sidebar />
        <div
          className="col-md-10 p-4 pr-5"
          style={{
            position: "absolute",
            right: 0,
            backgroundColor: "#0d0d0d",
            height: "100%",
          }}
        >
          <h5 className="text-white">All Services</h5>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="text-white text-left" scope="col">
                  Sr No
                </th>
                <th className="text-white" scope="col">
                  Service Name
                </th>
                <th className="text-white" scope="col">
                  Cost
                </th>
                <th className="text-white" scope="col">
                  Image
                </th>
                <th className="text-white" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr>
                  <td className="text-white">{index + 1}</td>
                  <td className="text-white">{service.name}</td>
                  <td className="text-white">{service.cost}</td>
                  <td className="text-white">
                    <img
                      style={{ height: "50px" }}
                      src={`data:image/png;base64,${service.image.img}`}
                      alt=""
                    />
                  </td>
                  <td className="text-white">
                    <button
                      onClick={(event) => deleteService(event, service._id)}
                      className="btn btn-brand"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageService;
