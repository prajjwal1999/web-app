import React from "react";
import Signup from "../Components/authentication/Signup";
import Navbar from "../Components/Navbar";
import Signin from "../Components/authentication/Signin";
import Login from "../Components/authentication/Login";
import Posts from "../Components/Posts";
import CreatePost from "../Components/CreatePost";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from "react";
import Friends from "../Components/Friends";
import SearchBar from "../Components/SearchBar";
import Chat from "../Components/Chat";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route path="/create-post" component={CreatePost} />
            <Route path="/signin" component={Signin} />
            <Route path="/friends" component={Friends} />
            <Route path="/search" component={SearchBar} />
            <Route path="/chat" component={Chat} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
