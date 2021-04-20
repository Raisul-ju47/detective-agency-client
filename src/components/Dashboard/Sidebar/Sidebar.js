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
  faShoppingCart,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { faCommentDots, faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../../App";
import { useState } from "react";

const Sidebar = () => {
  const { value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value2;
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
        {isDetective ? (
          <div>
            <li>
              <Link
                to="/dashboard/mainDashboard"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faGripHorizontal} />{" "}
                <span>Dashboard</span>
              </Link>
            </li>
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
                to="/manageService"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
              </Link>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <Link
                to="/service/:id"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
              </Link>
            </li>
            <li>
              <Link
                to="/bookingList"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faClipboardList} />{" "}
                <span>Booking list</span>
              </Link>
            </li>
            <li>
              <Link
                to="/addReview"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
              </Link>
            </li>
          </div>
        )}
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
