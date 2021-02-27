import React from "react";
import Signup from "../Components/authentication/Signup";
import Navbar from "../Components/Navbar";
import Login from "../Components/authentication/Login";
import Posts from "../Components/Posts";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
