# A feladat megoldásának lépései - instrukciók

## Telepítés

1. react projekt létrehozása
2. bootstrap, az index.html-ben a css belinkelése
3. axios
4. react-router

## Mappastruktúra

pages
contexts
components
Layout.js
Navigation.js
LoginPage.js
RegistrationPage.js
DashboardPage.js
CoursesPage.js
CourseDetailsPage.js
MentorsPage.js

## Layout és a navigáció kialakítása

1. navigáció: a-tag helyett NavLink to
2. Layout - a Navigation komponens kerüljön pl a header-be,  **Outlet** kerüljön a **main**-be
3. App.js- createBrowserRouter és a RouterProvider használata
 - nyilvános route-ok: login és a regisztráció, ezért ezek nem a Layout alatt vannak! Nem védettek tokennel!

```javascript
import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import DashboardPage from "./pages/DashboardPage";
import CoursesPage from "./pages/CoursesPage";
import MentorsPage from "./pages/MentorsPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegistrationPage />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="/dashboard" replace />,
        },
        {
          path: "/dashboard",
          element: <DashboardPage />,
        },
        {
          path: "/courses",
          element: <CoursesPage />,
        },
        {
          path: "/mentors",
          element: <MentorsPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NoPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
```

4. Lesz egy CourseDetailPage oldalunk. Itt a konkrét kurzus részleteit olvashatjuk majd. A curzust az ID-vel azonosítjuk.
Ezért kell egy újabb route. A "courses" path ígymódosul: 

```javascript
 {
    path: "courses",
    children: [
        {
        index: true,
        element: <CoursesPage />,
        },
        {
        path: ":id",
        element: <CourseDetailsPage />,
        },
    ],
},
```


## Formázás készítése a mintának megfelelelően
Külön navigation.css-t készíts!

## Login és Registration oldalak elkészítése a mintának megfelelően

A formok alján át lehet navigálni a RegistrationPage / LoginPage oldalra. Használd a NavLink - et!

Formázáshoz külön login.css-t készíts!

Teszteld a böngészőben, hogy elérhetőek-e az oldalak! pl.:http://localhost:3000/register

## Form validáció sé hibakezelés

A Login és a Regisztrációs űrlapoknál adjunk hibaüzenetet, ha nem megfelelő a beviteli mezőbe írt érték!

1. error state létrehozása 
```javascript
 const [errors, setErrors] = useState({});
```
2. errostext elem létrehozása minden űrlapelem alatt. pl:
```javascript
 {errors.password && (
    <span className="error-text">{errors.password}</span>
  )}
  ```
3. Form validáció elkészítése

  ```javascript
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

      setErrors({ ...newErrors });
  }
  ```
A validateForm függvényt meghívhatjuk a submit event-re, de meghívhatjuk az input elemek onChange eseményében is. 




