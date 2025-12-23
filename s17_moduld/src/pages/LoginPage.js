import React, { useState } from "react";
import { NavLink } from "react-router";
import "./css/login.css"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  function submit(event) {
    event.preventDefault()
    console.log(email,password)
  }
  return (
    <div className="login">
      <h1>WELCOME BACK</h1>
      <form onSubmit={submit}>
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
          <input type="submit" value="LOGIN" />
        </div>
        <div className="szoveg">
          Registration is free!  <NavLink to="/register">CREATE AN ACCOUNT</NavLink>
        </div>
      </form>
    </div>
  );
}
