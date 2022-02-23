import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="l">
      <h4>-:- Login -:-</h4>
      <img src={require("../../assets/image/login.jpg").default} alt="log-in" />
      <br/>
      <Link to="/">
        <i className="fas fa-home"></i>
      </Link>

      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Username</label>
          <input type="Massage" className="form-control" id="inputMessage" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Password</label>
          <input type="Password" className="form-control" id="inputPassword" />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
