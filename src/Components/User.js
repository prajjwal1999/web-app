import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function User(props) {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="container ">
            {currentUser ? (
              <div>
                {currentUser.displayName}
                <div>
                  <img src={currentUser.photoURL} />
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
