import React, { useState, useEffect } from "react";
import db from "../Firebase";
export default function Posts(props) {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = db.collection("post");
    const data = await response.get();
    data.docs.forEach((item) => {
      setBlogs([...blogs, item.data()]);
    });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="App">
      {blogs &&
        blogs.map((blog) => {
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
