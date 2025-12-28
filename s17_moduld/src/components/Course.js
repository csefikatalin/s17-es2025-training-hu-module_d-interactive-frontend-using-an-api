import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { CoursesContext } from "../contexts/CoursesContext";

export default function Course({
  course = { title: "teszt", description: "leírás" },
}) {
  const navigate = useNavigate();
  const { enrollCourse } = useContext(CoursesContext);
  function enroll() {
    enrollCourse(course.id);
    navigate(`/courses/${course.id}`, { state: { course } });
  }
  return (
    <div className="course keret ">
      <h2 className="nagy">{course.title}</h2>
      <p>{course.description}</p>
      <div className="course-details  ">
        <div className=" keret nagy kozep">{course.difficulty}</div>
        <div className="keret nagy kozep">
          chapter <br />
          {course.totalChapters}
        </div>
        <div className="keret nagy kozep">
          total credit <br />
          {course.totalCredits}
        </div>
      </div>
      <button
        className="nagy"
        onClick={() => {
          enroll();
        }}
      >
        {course.isEnrolled ? "continue learning" : "enroll"}
      </button>
    </div>
  );
}
