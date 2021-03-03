import React, { useEffect, useState } from "react";
import db from "../Firebase";
import { Link, useHistory } from "react-router-dom";
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
    <div>
      <ul>
        {friends &&
          friends.map((friend) => {
            return <li>{friend.name}</li>;
          })}
      </ul>
    </div>
  );
}
