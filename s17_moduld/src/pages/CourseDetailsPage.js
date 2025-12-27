import React, { useContext, useEffect } from "react";
import { CoursesContext } from "../contexts/CoursesContext";
import { useLocation, useNavigate } from "react-router";

export default function CourseDetailsPage() {
  const { selectedCourse, getCourseById, loading } = useContext(CoursesContext);
  const { state } = useLocation();
  const course = state?.course;
  console.log(course);
  useEffect(() => {
    getCourseById(course.id);
  }, []);
  if (loading) {
    return <div>Az oldal betöltés alatt</div>;
  }

  return (
    <div className="keret padding">
      <h1>{selectedCourse.course.title}</h1>
      <p>{selectedCourse.course.description}</p>
      <p>{selectedCourse.course.difficulty}</p>
      {selectedCourse.course.id}
      {selectedCourse.course.chapters.map((ch) => {
        return (
          <div className="keret">
            <h2 className="nagy">{ch.title}</h2>
            <p>{ch.description}</p>
            <div className="keret nagy">{ch.credits } credits</div>
            <button className="keret" style={{background:"ligthGray"}}> View chapter</button>
            <button className="keret" style={{background:"lightGreen"}} >{ch.isCompleted?"Chapter completed":"Mark aa Comleted"}</button>
          </div>
        );
      })}
    </div>
  );
}
