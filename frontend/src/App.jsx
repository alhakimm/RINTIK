import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Community from "./components/Community";
import Navbar from "./components/Navbar";
import Education from "./components/Education"; 

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
          {/* Other routes */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
