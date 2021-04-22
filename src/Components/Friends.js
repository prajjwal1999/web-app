import React, { useEffect, useState } from "react";
import db from "../Firebase";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Friends.css"
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
      <h2>FRIENDS</h2>
      <ul className="friends__list">
        {friends &&
          friends.map((friend) => {
            return (
              <div class="friend__profile list-group">
                <a href="#" class="list-group-item list-group-item-action post-profile">
                <img className="post-profile-img" src='https://images.unsplash.com/photo-1618987688212-90c11ec2c269?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
                  <p style={{paddingLeft:'5px'}} class="mb-1">{friend.name}</p>
                </a>                
              </div>
            );
          })}
      </ul>
    </div>
  );
}
