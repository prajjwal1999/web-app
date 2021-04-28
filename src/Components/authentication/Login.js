import React, { useRef, useState } from "react";
import {
  Card,
  Form,
  Button,
  Alert,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";
import loginImg from "./login.svg";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to Login");
    }
    setLoading(false);
  }

  return (
    // <div>
    //   <Card>
    //     <Card.Body>
    //       <h2 className="text-center mb-4">Log In</h2>

    //       {error && <Alert variant="danger">{error}</Alert>}
    //       <Form onSubmit={handleSubmit}>
    //         <Form.Group id="email">
    //           <Form.Label>Email</Form.Label>
    //           <Form.Control type="email" ref={emailRef} required />
    //         </Form.Group>
    //         <Form.Group id="password">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control type="password" ref={passwordRef} required />
    //         </Form.Group>
    //         <button disable={loading} className="w-100" type="submit">
    //           Log In
    //         </button>
    //       </Form>
    //       <div className="w-100 text-center mt-r">
    //         <Link to="/forgot-password">Forgot Password ?</Link>
    //       </div>
    //     </Card.Body>
    //   </Card>
    //   <div className="w-100 text-center mt-2">
    //     Need an account ?<Link to="/signup">SignUp</Link>
    //   </div>
    // </div>
    <div className="sigin_page">
      <Form onSubmit={handleSubmit}>
        {/* <div className="base-container" ref={this.props.containerRef} > */}
        <div className="base-container">
          <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Email</label>
                <input
                  className="email"
                  type="text"
                  name="username"
                  placeholder="email"
                  ref={emailRef}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  ref={passwordRef}
                  required
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <input type="submit" className="btn" value="Submit" /> <br />
            <h4 style={{ "margin-bottom": "10px" }}>Need an Account?</h4>
            <Nav.Link className="" href="#link">
              <button type="button" class="btn btn-default btn-lg">
                <a href="/signup" style={{ color: "#fff" }}>
                  Register
                </a>
              </button>
            </Nav.Link>
            {/* <button className="btn">Register</button>      */}
          </div>
        </div>
      </Form>
    </div>
  );
}
