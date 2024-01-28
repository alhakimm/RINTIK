import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';
import axios from "axios";

//components
import Community from "./components/Community";
import Navbar from "./components/Navbar";
import Education from "./components/Education"; 
import PlumberMenu from "./components/Plumber Menu";
import Map from "./components/Map";
import Login from "./components/login";
import Signup from "./components/Signup";
import AuthRoute from './util/AuthRoute';
import ReportMap from './components/ReportMap'

//redux
import { Provider } from "react-redux";
// import store from './redux/store';
// import { logOutUser, getUserData } from "./redux/actions/userAction";

// import Report from "./components/Report";

let authenticated;

const token = localStorage.FBIdToken;

console.log(token)
if(token){
  const decodedToken = jwtDecode(token);
  console.log(decodedToken)
  console.log(Date.now())
  if(decodedToken.exp * 1000 < Date.now() || localStorage == null){
    localStorage.removeItem('FBIdToken')
    delete axios.defaults.headers.common['Authorization']
    window.location.href = '/';
    authenticated = false;
  } else {
    authenticated = true;
  }
}


function App() {
  return (
    // <Provider store={store}>
      <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={Login} authenticated = {authenticated}>
            <Login />
          </Route>
          <Route path="/signup" component={Signup} authenticated = {authenticated}>
            <Signup />
          </Route>
          <Route path="/community">
          <Navbar />
            <Community />
          </Route>
          <Route path="/education">
          <Navbar />
            <Education />
          </Route>
          <Route path="/plumber">
          <Navbar />
            <PlumberMenu />
          </Route>
          <Route path="/map">
          <Navbar />
            <Map />
          </Route>
          <Route path="/reportmap">
          <Navbar />
            <ReportMap />
          </Route>
          {/* <Route path="/report">
            <Report />
          </Route> */}
        </Switch>
      </div>
    </Router>

      // </Provider>
    
  );
}

export default App;
