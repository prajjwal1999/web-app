import React, { Component } from "react";
import Posts from "../Components/Posts";
export default class Home extends Component {
  render() {
    return (
      <div className="boxs">
        <div className="row">
          <div className="column left" style={{ backgroundColor: "#aaa" }}>
            <Posts />
          </div>
          <div className="column right" style={{ backgroundColor: "#bbb" }}>
            <div>
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
