import React, { useContext, useEffect } from "react";
import { CoursesContext } from "../contexts/CoursesContext";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

export default function CourseDetailsPage() {
  const { selectedCourse, getCourseById, loading, completeChapter } =
    useContext(CoursesContext);
  const { loadUser } = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const course = state?.course;
  /*   console.log(course);
  console.log(selectedCourse); */
  useEffect(() => {
    getCourseById(course.id);
  }, [course]);

  if (loading) {
    return <div>Az oldal betöltés alatt</div>;
  }

  function markAsComleted(chapterId) {
    console.log("mark", chapterId);
    completeChapter(selectedCourse.course.id, chapterId)
      .then(() => {
        /* frissíteni kell a usert! */
        loadUser(); 
        getCourseById(selectedCourse.course.id);
      })
      .catch((error) => {
        console.log(error);
      });
    

  }

  return (
    <div className=" padding courseone">
      <div className="keret">
        <button className="keret padding" onClick={() => navigate(-1)}>
          Back to course
        </button>
        <h1>{selectedCourse.course.title}</h1>
        <p>{selectedCourse.course.description}</p>
        <p>{selectedCourse.course.difficulty}</p>
        {selectedCourse.course.id}
      </div>
      {selectedCourse.course.chapters.map((ch, i) => {
        return (
          <div className="keret" key={i}>
            <h2 className="nagy alahuzas">
              Chapter {i + 1}: {ch.title}
            </h2>
            <p>{ch.description}</p>
            <div className="keret nagy szelesseg padding">
              {ch.credits} credits
            </div>
            <button className="inactive" style={{ background: "ligthGray" }}>
              {" "}
              View chapter
            </button>
            <button
              className="keret"
              style={{ background: "lightGreen" }}
              onClick={() => {
                markAsComleted(ch.id);
              }}
            >
              {ch.isCompleted ? "Chapter completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
