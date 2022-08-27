import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import getAndUpdateinputValue from "../Utils/general";
import { LOCAL_STORAGE_USERS_KEY } from "../Constant";
import {
  usernameValidaion,
  mobileValidation,
  emailValidation,
  passwordValidation,
} from "../Utils/validation";

const SignupForm = () => {
  const [username, updateUserName] = useState("");
  const [email, updateEmail] = useState("");
  const [mobile, updateMobile] = useState("");
  const [password, updatePassword] = useState("");
  const [error, setErrorMsg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationResultForUserName = usernameValidaion(username);
    const validationResultForMobile = mobileValidation(mobile);
    const validationResultForEmail = emailValidation(email);
    const validationResultForPass = passwordValidation(password);

    const navigate = useNavigate();

    if (validationResultForUserName.result === false) {
      setErrorMsg(validationResultForUserName.message);
    } else if (validationResultForMobile.result === false) {
      setErrorMsg(validationResultForMobile.message);
    } else if (validationResultForEmail.result === false) {
      setErrorMsg(validationResultForEmail.message);
    } else if (validationResultForPass.result === false) {
      setErrorMsg(validationResultForPass.message);
    } else {
      let userList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS_KEY));
      console.log(userList);
      userList =
        userList === null
          ? []
          : localStorage.setItem(
              LOCAL_STORAGE_USERS_KEY,
              JSON.stringify([
                ...userList,
                {
                  username,
                  mobile,
                  email,
                  password,
                },
              ])
            );

      updateUserName("");
      updateMobile("");
      updateEmail("");
      updatePassword("");

      navigate("/login");
    }
  };

  return (
    <section>
      <div className="form">
        <h1>Sign-Up</h1>
        <span className="form-control">
          <p>{error}</p>
        </span>

        <div className="form-control">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              getAndUpdateinputValue(e, updateUserName);
            }}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="mobileno">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => {
              getAndUpdateinputValue(e, updateMobile);
            }}
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              getAndUpdateinputValue(e, updateEmail);
            }}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="At least 6 char"
            value={password}
            onChange={(e) => {
              getAndUpdateinputValue(e, updatePassword);
            }}
          />
        </div>

        <div className="form-control">
          <button className="btn" onClick={handleSubmit}>
            Continue
          </button>
        </div>
        <p>
          <span>
            Already have an account?<NavLink to="/login">Log-In</NavLink>
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignupForm;
