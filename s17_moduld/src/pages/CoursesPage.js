import React, { useContext, useEffect } from "react";
import CourseSearch from "../components/CourseSearch";
import Course from "../components/Course";
import { CoursesContext } from "../contexts/CoursesContext";

export default function CoursesPage() {
  const { getCourses, filteredList, loading } = useContext(CoursesContext);

  useEffect(() => {
    getCourses();
  }, []);
  if (loading) {
    // Betöltés alatt ezt jeleníti meg
    return  <>  <CourseSearch /> <div>Betöltés folyamatban...</div></>;
  }
 /*  if (!filteredList || filteredList.length === 0) {
    // Ha nincs adat
  
     return  <>  <CourseSearch /> <div>Nincsenek kérdések.</div></>;
  } */
  return (
    <>
      <CourseSearch />
      <div className="courses ">
        {   filteredList.map((course) => {
          return <Course course={course} key={course.id} />;
        }) }
      </div>
    </>
  );
}
