import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useContext } from "react";
import Profile from "../Components/Profile";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
export default function Navbars() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="nav-logo" href="#home">
          <img src="https://www.flaticon.com/svg/vstatic/svg/52/52134.svg?token=exp=1614572298~hmac=4f1f9b3fd3796cb5c7187185aeb6ab75" />
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
            <Nav.Link href="/profile">
              <button type="button" class="btn btn-default btn-lg">
                <a href="/profile">Profile</a>
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
