import React from "react";
import { useNavigate } from "react-router";

export default function Course({
  course = { title: "teszt", description: "leírás" },
}) {
    const navigate=useNavigate()
  return (
    <div className="course keret ">
      <h2 className="nagy">{course.title}</h2>
      <p>{course.description}</p>
      <div className="adatok row p-2 ">
        <div className="col-4 keret nagy kozep">{course.difficulty}</div>
        <div className="col-4 keret nagy kozep">
          chapter <br />
          {course.totalChapters}
        </div>
        <div className="col-4 keret nagy kozep">
          total credit <br />
          {course.totalCredits}
        </div>
      </div>
      <button className="nagy" onClick={()=>{ navigate(`/courses/${course.id}`, { state: { course } });}}>{course.isEnrolled?"continue learning":"enroll"}</button>
    </div>
  );
}
