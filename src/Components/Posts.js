import React, { useState, useEffect } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import db from "../Firebase";
import Navbar from "../Components/Navbar";

export default function Posts(props) {
  const [posts, setPosts] = useState();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    return db
      .collection("post")
      .orderBy("uploaded", "desc")
      .onSnapshot((snapshot) => {
        const postData = [];
        snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
        setPosts(postData);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      {posts &&
        posts.map((blog) => {
          return (
            <div className="container my-4" style={{ maxWidth: "36%" }}>
              <Card style={{ width: "50rem" }}>
                <Card.Title className="pl-3 post-profile">
                  <img className="post-profile-img" src={blog.url} alt="" />
                  <h1 className="ml-3">{blog.name}</h1>
                </Card.Title>
                <Card.Img variant="top" src={blog.url} />
                <Card.Body>
                  <div className="like">
                    <a>
                      <i class="far fa-thumbs-up fa-2x"></i>
                    </a>
                    <Card.Text>
                      <h4>{blog.caption}</h4>
                    </Card.Text>
                    <span>
                      <img
                        src="https://www.flaticon.com/premium-icon/icons/svg/2889/2889244.svg"
                        height="30"
                        width="30"
                      />
                      300
                    </span>
                  </div>

                  <Button variant="primary">comment</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
  );
}
