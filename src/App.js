import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Components/Home/HomePage/HomePage";
import Appointment from "./Components/AppointmentPage/Appointment/Appointment";
import Login from "./Components/PrivateLogin/Login/Login";
import DashBoard from "./Components/DashboardPage/DashBoard/DashBoard";
import AddDoctor from "./Components/AddDoctorPage/AddDoctor/AddDoctor";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/appointmentPage">
            <Appointment></Appointment>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard/appointments">
            <DashBoard></DashBoard>
          </Route>
          <Route path="/dashboard/addDoctorPage">
            <AddDoctor></AddDoctor>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
