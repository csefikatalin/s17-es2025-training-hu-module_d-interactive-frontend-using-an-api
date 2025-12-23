import React from "react";
import { NavLink } from "react-router";
import "./css/navigation.css"

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          <li className="kiemelt">
            <NavLink to="/">Skillshare Academy</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/mentors">Mentors</NavLink>
          </li>
        </ul>
        <ul>
          <li className="kiemelt">25 credits</li>
          <li>Welcome John Doe</li>
          <li className="kiemelt">Logout</li>
        </ul>
      </nav>
    </header>
  );
}
