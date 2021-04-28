import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import db from "../../Firebase";
import "./style.scss";
import loginImg from "./login.svg";

export default function Signup() {
  const x = 1;

  const emailRef = useRef();

  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      const emailuser = emailRef.current.value;

      history.push("/");
      db.collection("profile")
        .doc(emailuser)
        .set(
          {
            name: "john",
            email: emailuser,
            state: "CAefwefweefwfwefsdscdv",
            country: "USAwqdqd",
            followers: "xx",
            following: "xxx",
            hobby: "xx",
            Profession: "xx",
          },
          { merge: true }
        )
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    } catch {
      setError("Failed to create account");
    }
    setLoading(false);
  }
  return (
    // <div>
    //   {" "}
    //   <Card>
    //     <Card.Body>
    //       <h2 className="text-center mb-4">Sign Up</h2>

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
    //         <Form.Group id="password-confirm">
    //           <Form.Label>Password Confirmation</Form.Label>
    //           <Form.Control type="password" ref={passwordConfirmRef} required />
    //         </Form.Group>
    //         <button disable={loading} className="w-100" type="submit">
    //           Sign Up
    //         </button>
    //       </Form>
    //     </Card.Body>
    //   </Card>
    // </div>

    <div className="sigin_page">
      {/* <div className="base-container" ref={this.props.containerRef}> */}
      <Form onSubmit={handleSubmit}>
        <div className="base-container">
          <div className="header">Register</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
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
              <div className="form-group">
                <label htmlFor="password">Password Confirmation</label>
                <input
                  type="password"
                  name="password"
                  placeholder="confirm password"
                  ref={passwordConfirmRef}
                  required
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <input type="submit" className="btn" value="Submit" />
          </div>
        </div>
      </Form>
    </div>
  );
}
