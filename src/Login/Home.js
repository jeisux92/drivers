import React from "react";
import Login from "./Login";
import "./Home.css";
import background from "../background.jpg"

const homeStyle = {
  backgroundImage: "../background.jpg"
};

const home = function(props) {
  return (
    <div className="row home" style={homeStyle}>
      <div className="col-md-4 mx-auto">
        <Login />
      </div>
    </div>
  );
};

export default home;
