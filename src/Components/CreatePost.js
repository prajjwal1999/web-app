import React, { useState } from "react";
import Posts from "./Posts";
import db from "../Firebase";
import { Link, useHistory } from "react-router-dom";
export default function CreatePost() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const history = useHistory();
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "userdp");
    setLoading(true);
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/dqdjmplze/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    setImage(file.secure_url);
    setLoading(false);
  };
  async function handleSubmit(e) {
    db.collection("post").doc().set(
      {
        caption: "wewejbnj",
        comment: [],
        url: image,
        like: 0,
        name: "wake",
        uploaded: "12:36",
      },
      { merge: true }
    );

    history.push("/");
  }
  return (
    <div className="container-lg">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label for="img">Select image</label>
          <input
            type="file"
            name="file"
            placeholder="upload image"
            onChange={uploadImage}
          />
          <input
            type="text"
            name="caption"
            placeholder="Caption for your pic"
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}
