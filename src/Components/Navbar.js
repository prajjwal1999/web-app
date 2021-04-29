import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import Profile from "../Components/Profile";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function Navbars() {
  const { currentUser } = useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="nav-logo" href="#home">
          <img
            src="https://www.flaticon.com/premium-icon/icons/svg/3162/3162261.svg"
            width="50"
            height="52"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">
            <div style={{ fontSize: "210%" }}>Home</div>
          </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-button">
            <Nav.Link className="" href="#link">
              <button type="button" class="btn btn-default btn-lg">
                <a href="/signup">SignUp</a>
              </button>
            </Nav.Link>
            <Nav.Link href="/signin">
              <button type="button" class="btn btn-default btn-lg">
                Sign in
              </button>
            </Nav.Link>
            <Nav.Link href="/profile">
              <button type="button" class="btn btn-default btn-lg">
                <a href="/profile">Profile</a>
              </button>
            </Nav.Link>
            <Nav.Link href="/friends">
              <button type="button" class="btn btn-default btn-lg">
                <a href="/profile">Friends</a>
              </button>
            </Nav.Link>
            <Nav.Link href="/login">
              <button type="button" class="btn btn-default btn-lg">
                LogIn
              </button>
            </Nav.Link>
            <Nav.Link href="/create-post">
              <button type="button" class="btn btn-default btn-lg">
                Create post
              </button>
            </Nav.Link>
            <Nav.Link className="" href="#link">
              <button type="button" class="btn btn-default btn-lg">
                <a href="/chat">Chat</a>
              </button>
            </Nav.Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">
              <div style={{ fontSize: "200%" }}>Search</div>
            </Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
