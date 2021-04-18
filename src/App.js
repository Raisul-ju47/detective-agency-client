import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AllCustomers from "./components/AllCustomers/AllCustomers/AllCustomers";
import Appointment from "./components/Appointment/Appointment/Appointment";
import AddDetective from "./components/AddDetective/AddDetective";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import MainDashboard from "./components/Dashboard/MainDashboard/MainDashboard";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddAdmin from "./components/AddAdmin/AddAdmin";
import AddService from "./components/AddService/AddService";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/appointment">
            <Dashboard />
          </PrivateRoute>
          <Route path="/dashboard/allCustomers">
            <AllCustomers />
          </Route>
          <Route path="/dashboard/mainDashboard">
            <MainDashboard/>
          </Route>
          <Route path="/addDetective">
            <AddDetective/>
          </Route>
          <Route path="/addService">
            <AddService/>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin/>
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
