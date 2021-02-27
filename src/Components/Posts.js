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
            <div className="blog-container">
              {" "}
              {blog.uploaded}
              <div>{blog.name}</div>
              <div>
                <img src={blog.url} />
              </div>
              <div>
                <div>{blog.caption}</div>
              </div>
              <div className="likes-comment">
                <div>likes : {blog.like}</div>
                <div className="comment">
                  {blog.comment.map((number) => (
                    <li>{number}</li>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
