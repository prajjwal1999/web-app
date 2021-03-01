import React, { Component } from "react";
import Posts from "../Components/Posts";
import User from "../Components/User";
export default class Home extends Component {
  render() {
    return (
      <div className="boxs">
        <div className="row">
          <User />
          <div>
            <Posts />
          </div>
        </div>
      </div>
    );
  }
}
