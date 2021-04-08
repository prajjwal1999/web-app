import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import db from "../Firebase";
function SearchBar() {
  const [data1, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    db.collection("profile").onSnapshot((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
      setData(postData);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
          console.log(searchTerm);
        }}
      />
      <div>
        {data1
          .filter((val) => {
            if (searchTerm === "") return val;
            else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div>
                <p>{val.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SearchBar;
