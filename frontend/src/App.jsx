import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {jwtDecode} from 'jwt-decode';

//components
import Community from "./components/Community";
import Navbar from "./components/Navbar";
import Education from "./components/Education"; 
import PlumberMenu from "./components/Plumber Menu";
import Map from "./components/Map";
import Login from "./components/login";
import Signup from "./components/Signup";

//redux
import { Provider } from "react-redux";
// import store from './redux/store';

// import Report from "./components/Report";

// const token = localStorage.FBIdToken;
// if(token){
//   const decodedToken = jwtDecode(token);
//   if(decodedToken.exp * 1000 < Date.now()){
//     window.location.href = '/';
//     authenticated = false;
//   } else {
//     authenticated = true;
//   }
// }

function App() {
  return (
    // <Provider store={store}>
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

    // </Provider>
    
  );
}

export default App;
