import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import "./css/login.css";
import { AuthContext } from "../contexts/AuthContext";

export default function LoginPage() {
  const { login, serverError } = useContext(AuthContext);

  const [email, setEmail] = useState("a@a.hu");
  const [password, setPassWord] = useState("123456");
  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Az email cím kötelező";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Érvénytelen email formátum";
    }

    if (!password) {
      newErrors.password = "A jelszó kötelező";
    } else if (password.length < 6) {
      newErrors.password =
        "A jelszónak legalább 6 karakter hosszúnak kell lennie";
    }
    //setErrors({ ...newErrors });
    return newErrors;
  }
  function submit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const data = { email, password };
    login(data);
  }

  return (
    <div className="login">
      <h1>WELCOME BACK</h1>

      {serverError&&<div className="alert-error">{serverError}</div>}

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
          {errors.email && <span className="error-text">{errors.email}</span>}
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
          {errors.password && (
            <span className="error-text">{errors.password}</span>
          )}
        </div>
        <div>
          <input type="submit" value="LOGIN" />
        </div>
        <div className="szoveg">
          Registration is free!{" "}
          <NavLink to="/register">CREATE AN ACCOUNT</NavLink>
        </div>
      </form>
    </div>
  );
}
