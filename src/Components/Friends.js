import React, { useEffect, useState } from "react";
import db from "../Firebase";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useAuth } from "../contexts/AuthContext";
export default function Friends() {
  const { currentUser } = useAuth();
  const [friends, setFriends] = useState();
  useEffect(() => {
    db.collection("profile").onSnapshot((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
      setFriends(postData);
    });
  }, []);

  return (
    <div className="conatiner my-4">
      <Navbar />
      <ul id="friend-list">
        <div>
          {friends &&
            friends.map((friend) => {
              return (
                <li className="friend selected">
                  <div> {friend.name}</div>
                </li>
              );
            })}
        </div>
      </ul>
    </div>
  );
}
