import React from "react";
import Mentor from "../components/Mentor";

export default function MentorsPage() {
  return (
    <>
      <div className="keret padding">
        <h1>Mentor Session Booking</h1>
        <p>Book one-on-one session...</p>
        <div className="keret padding" style={{ background: "lightblue" }}>
          <strong>Your Current Balance: {} Credits</strong>
          <span>
            Session are automaticly checked for confirmation every 30 seconds
          </span>
        </div>
      </div>
      <div className="sessions keret padding">
        <h1>Available Sessions</h1>
        <Mentor />
        <Mentor />
        <Mentor />
        <Mentor />
        <Mentor />
      </div>
    </>
  );
}
