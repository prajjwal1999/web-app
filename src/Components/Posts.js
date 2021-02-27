import React, { useState, useEffect } from "react";
import db from "../Firebase";
export default function Posts(props) {
  const [posts, setPosts] = useState();

  useEffect(() => {
    return db.collection("post").onSnapshot((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
      setPosts(postData);
    });
  }, []);

  return (
    <div className="App">
      {posts &&
        posts.map((blog) => {
          return (
            <div class="ui main text container segment">
              <div class="ui huge header">{blog.name}</div>
              <div class="ui top attached">
                <div class="item">
                  <img class="ui centered rounded image" src={blog.url} />
                  <div class="content">
                    <span>Date:12/23/43</span>
                  </div>
                  <div class="description">
                    <p>A beautiful Day</p>
                  </div>
                  <a
                    class="ui blue basic button"
                    href="/blogs/<%= blog._id %>/edit"
                  >
                    Comment
                  </a>
                  <form
                    id="delete"
                    action="/blogs/<%= blog._id %>?_method=DELETE"
                    method="POST"
                  >
                    <button class="ui red basic button">Like</button>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
