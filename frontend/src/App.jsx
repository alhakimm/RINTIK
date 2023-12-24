import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Community from "./components/Community";
import Navbar from "./components/Navbar";
import Education from "./components/Education"; 
import PlumberMenu from "./components/Plumber Menu";

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
          <Route>
            <PlumberMenu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
