import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./components/home.component"
import Navbar from "./components/navbar.component"
import ActivitiesList from "./components/activities-list.component";
import EditActivity from "./components/edit-activity.component";
import CreateActivity from "./components/create-activity.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>

      <Navbar />
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="container centered">
      <Route path="/" exact component={Home} />
      <Route path="/log" exact component={ActivitiesList} />
      <Route path="/edit/:id" component={EditActivity} />
      <Route path="/create" component={CreateActivity} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
