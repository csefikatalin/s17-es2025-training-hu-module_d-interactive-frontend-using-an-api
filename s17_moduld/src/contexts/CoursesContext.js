import myAxios, { getAuthHeaders } from "../services/api";
import { createContext, useEffect, useState } from "react";

// 1. Context létrehozása
export const CoursesContext = createContext();

// 2. Provider komponens
export function CoursesProvider({ children }) {
  const [coursesList, setCoursesList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  function getCourses() {
    setLoading(true);
    myAxios
      .get("/courses", { headers: getAuthHeaders() })
      .then((response) => {
        setCoursesList(response.data.courses);
        setFilteredList(response.data.courses);
    
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }
  function getCourseById(id) {
    console.log(id)
    setLoading(true);
    myAxios
      .get(`/courses/${id}`, { headers: getAuthHeaders() })
      .then((response) => {
  
        setSelectedCourse(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }
  
  /*   function szuro(difficulties,search) {
    console.log( difficulties);
    setFilteredList([...coursesList])
    if (difficulties !== "all" || search !== "") {
      const szurtLista = coursesList.filter((c) => {
        return c.difficulty === difficulties && c.description.toLowerCase().indexOf(search.toLowerCase())>=0 ;
      });
      console.log(szurtLista);
      setFilteredList([...szurtLista])
    }
  } */
  function szuro(difficulty, search) {
    const szurtLista = coursesList.filter((c) => {
      const difficultyOk = difficulty === "all" || c.difficulty === difficulty;

      const searchOk =
        search === "" ||
        c.description.toLowerCase().includes(search.toLowerCase());

      return difficultyOk && searchOk;
    });

    setFilteredList(szurtLista);
  }

  return (
    <CoursesContext.Provider
      value={{ getCourses, filteredList, loading, szuro, selectedCourse,getCourseById }}
    >
      {children}
    </CoursesContext.Provider>
  );
}
