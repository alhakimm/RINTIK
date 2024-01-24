import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Community from "./components/Community";
import Navbar from "./components/Navbar";
import Education from "./components/Education"; 
import PlumberMenu from "./components/Plumber Menu";
import Map from "./components/Map";
import Login from "./components/login";
import Signup from "./components/Signup";
import {jwtDecode} from 'jwt-decode';
// import Report from "./components/Report";

// const token = localStorage.FBIdToken;
// if(token){
//   const decodedToken = jwtDecode(token);
//   console.log(decodedToken);
// }

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/community">
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
