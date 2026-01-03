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
  console.log(course);
  console.log(selectedCourse);
  useEffect(() => {
    getCourseById(course.id);
  }, [course]);
  useEffect(() => {
    if (window.LinkedInShare) {
      window.LinkedInShare.init({
        container: "#linkedin-share-root",
        theme: "light",
        locale: "en-US",
      });
    }
  }, []);

  if (loading || selectedCourse.length == 0) {
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

  function share(chapter) {
    if (
      window.LinkedInShare &&
      typeof window.LinkedInShare.open === "function"
    ) {
      window.LinkedInShare.open({
        url: window.location.href,
        title: `Course: ${chapter.courseTitle}`,
        summary: `I just completed "${chapter.title}"!`,
        source: "SkillShare Academy",
        tags: ["learning", "skills"],
      });
    } else {
      console.warn("LinkedInShare widget még nem elérhető");
    }
    /*     const text = encodeURIComponent(
      `I just completed "${chapter.title}" in the course "${course.title}"! 🎉`
    );
    const url = encodeURIComponent(
      `http://localhost:3000/courses/${course.id}`
    );
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank"
    ); */
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
              style={{ background: ch.isCompleted ? "lightGreen" : "beige" }}
              onClick={() => {
                markAsComleted(ch.id);
              }}
            >
              {ch.isCompleted ? "Chapter completed" : "Mark as Completed"}
            </button>
            <div>
              {ch.isCompleted ? (
                <button
                  className="keret linkedin"
                  onClick={() => {
                    share(ch);
                  }}
                >
                  Share achievement in LinkedIn
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}

      {/* linkedin widget
      
      */}
      <div id="linkedin-share-root"> LinkedIn widget</div>
    </div>
  );
}
