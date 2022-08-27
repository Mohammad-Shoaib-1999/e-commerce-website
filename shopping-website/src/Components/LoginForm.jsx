import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import getAndUpdateinputValue from "../Utils/general";
import { emailValidation } from "../Utils/validation";
import { LOCAL_STORAGE_USERS_KEY } from "../Constant";
import { LOCAL_STORAGE_LOGGED_USER_KEY } from "../Constant"

const LoginForm = (props) => {
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [error, setErrorMsg] = useState(null);
  const { setUser } = props;

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const validationResultForEmail = emailValidation(email);
    if (validationResultForEmail.result === false) {
      setErrorMsg(validationResultForEmail.message);
    } else {
      // Getting Users From Local Storage to find
      const userList = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_USERS_KEY)
      );
      //Checking weather user trying to login is Signup or not
      const result = userList.find((user) => {
        return user.email === email && user.password === password;
      });
      //If user is verified
      if (result) {
        alert("login successful");
        setUser(result);
        localStorage.setItem(
          LOCAL_STORAGE_LOGGED_USER_KEY,
          JSON.stringify(result)
        );
        navigate("/home");
      } else {
        alert("invalid user");
      }
    }
  };

  return (
    <section>
      <div className="form">
        <h1>Log-In</h1>
        <span className="form-control">
          <p>{error}</p>
        </span>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter the email"
            onChange={(e) => {
              getAndUpdateinputValue(e, updateEmail);
            }}
            value={email}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="*******"
            onChange={(e) => {
              getAndUpdateinputValue(e, updatePassword);
            }}
            value={password}
          />
        </div>

        <div className="form-control">
          <button className="btn" onClick={handlesubmit}>
            Continue
          </button>

          <p>
            <span>
              <NavLink to="/signup">Create an Account</NavLink>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
