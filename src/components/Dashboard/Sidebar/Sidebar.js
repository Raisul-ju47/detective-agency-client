import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../../App";
import { useState } from "react";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDetective, setIsDetective] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/isDetective", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsDetective(data));
  }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        {
          <li>
          <Link
            to="/dashboard/mainDashboard"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        }
        { isDetective &&
          <div>
            <li>
              <Link
                to="/addAdmin"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faCalendar} /> <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/allCustomers"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faUsers} /> <span>Appointments</span>
              </Link>
            </li>
            <li>
              <Link
                to="/addDetective"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faFileAlt} /> <span>Add Detective</span>
              </Link>
            </li>
            <li>
              <Link
                to="/addService"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link
                to="/doctor/setting"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
              </Link>
            </li>
          </div>
        }
      </ul>
      <div>
        <Link to="/" className="text-white" style={{ textDecoration: "none" }}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Back to home</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
