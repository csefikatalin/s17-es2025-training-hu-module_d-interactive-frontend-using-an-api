import React, { useState } from "react";
import { NavLink } from "react-router";
import "./css/login.css";

export default function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [cpassword, setCPassWord] = useState("");
  function submit(event) {
    event.preventDefault();
    console.log(name,email, password,cpassword);
  }
  return (
    <div className="login">
      <h1>CREATE ACCOUNT</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">FULL NAME</label>
          <input
            type="name"
            value={name}
            placeholder="Enter your full name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
          />
        </div>
        <div>
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
            id="password"
          />
        </div>
        <div>
          <label htmlFor="cpassword">CONFIRM PASSWORD</label>
          <input
            type="cpassword"
            value={cpassword}
            placeholder="Confirm your password"
            onChange={(e) => {
              setCPassWord(e.target.value);
            }}
            id="cpassword"
          />
        </div>
        <div>
          <input type="submit" value="CREATE ACCOUNT" />
        </div>
        <div className="szoveg">
          Already have an account?
          <NavLink to="/login">SIGN IN HERE</NavLink>
        </div>
      </form>
    </div>
  );
}
