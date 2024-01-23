import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Community from "./components/Community";
import Navbar from "./components/Navbar";
import Education from "./components/Education"; 
import PlumberMenu from "./components/Plumber Menu";
import Map from "./components/Map";
// import Report from "./components/Report";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Community />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/plumber">
            <PlumberMenu />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          {/* <Route path="/report">
            <Report />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
