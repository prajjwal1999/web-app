import React, { useEffect, useState } from "react";
import db from "../Firebase";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useAuth } from "../contexts/AuthContext";
import "./Friends.css";
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
    <div className="friends">
      <ul className="friends__list">
        {friends &&
          friends.map((friend) => {
            return (
              <div className="friend__profile">
                <li class="list-group-item list-group-item-info">
                  {friend.name}
                </li>
                <h2 class="list-group-item-info">View Profile</h2>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
