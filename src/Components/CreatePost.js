import React, { useState } from "react";
import Posts from "./Posts";
import db from "../Firebase";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../Components/Navbar";

export default function CreatePost() {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const history = useHistory();
  const uploadCaption = async (e) => {
    setCaption(e.target.value);
  };
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
    e.preventDefault();
    const str = new Date();
    db.collection("post").doc().set(
      {
        caption: caption,
        comment: [],
        url: image,
        like: 0,
        name: currentUser.displayName,
        uploaded: { str },
      },
      { merge: true }
    );
    const datauser = {
      caption: caption,
      comment: [],
      url: image,
      like: 0,
      name: "wake",
      uploaded: { str },
    };
    // db.collection("profile").doc(currentUser.uid).set(
    //   {
    //     post: datauser,
    //   },
    //   { merge: true }
    // );

    history.push("/");
  }
  return (
    <div>
      <Navbar />
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
              onChange={uploadCaption}
            />
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}
