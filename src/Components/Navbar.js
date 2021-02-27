import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function Navbars() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src="https://www.flaticon.com/svg/vstatic/svg/52/52134.svg?token=exp=1614352122~hmac=8e3326590ac1c7292dd4369d35d2b336" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">
              <div style={{ fontSize: "210%" }}>Home</div>
            </Nav.Link>

            <Nav.Link href="/signup">
              <button type="button" class="btn btn-default btn-lg">
                <a href="/signup">SignUp</a>
              </button>
            </Nav.Link>
            <Nav.Link href="/profile">
              <button type="button" class="btn btn-default btn-lg">
                <a href="/profile">Profile</a>
              </button>
            </Nav.Link>
            <Nav.Link href="login">
              <button type="button" class="btn btn-default btn-lg">
                LogIn
              </button>
            </Nav.Link>

            <Nav.Link href="profile">
              <button type="button" class="btn btn-default btn-lg">
                Account
              </button>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">
              <div style={{ fontSize: "200%" }}>Search</div>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
