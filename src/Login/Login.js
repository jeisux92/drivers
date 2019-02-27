import React from "react";
import logo from "../liftit.svg";

const imgStyle = {
  backgroundColor: "#9393a0",
  height: "60px"
};

const login = function(props) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={logo}
        alt="Card image cap"
        style={imgStyle}
      />
      <form className="card-body">
        <div className="form-group">
          <label htmlFor="user" className="label">
            Usario
          </label>
          <input
            id="user"
            type="text"
            className="form-control form-control-sm"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="user"
            type="password"
            className="form-control form-control-sm"
          />
        </div>
        <button type="button" className="btn btn-sm btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default login;
