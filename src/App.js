import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AllCustomers from "./components/AllCustomers/AllCustomers/AllCustomers";
import Appointment from "./components/Appointment/Appointment/Appointment";
import AddDetective from "./components/AddDetective/AddDetective";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import MainDashboard from "./components/Dashboard/MainDashboard/MainDashboard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AddAdmin from "./components/AddAdmin/AddAdmin";
import AddService from "./components/AddService/AddService";
import AddReview from "./components/AddReview/AddReview";
import ManageService from "./components/ManageService/ManageService";
import BookingList from "./components/BookingList/BookingList";

export const UserContext = createContext();

function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);

  return (
    <UserContext.Provider
      value={{
        value1: [services, setServices],
        value2: [loggedInUser, setLoggedInUser],
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/service/:id">
            <Appointment />
          </Route>
          <PrivateRoute path="/dashboard/appointment">
            <Dashboard />
          </PrivateRoute>
          <Route path="/dashboard/allCustomers">
            <AllCustomers />
          </Route>
          <Route path="/dashboard/mainDashboard">
            <MainDashboard />
          </Route>
          <Route path="/addDetective">
            <AddDetective />
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/bookingList">
            <BookingList />
          </Route>
          <Route path="/manageService">
            <ManageService />
          </Route>
          <Route path="/addAdmin">
            <AddAdmin />
          </Route>
          <Route path="/addReview">
            <AddReview />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
