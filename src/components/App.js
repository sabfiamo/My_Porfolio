/* SECCIÓN DE IMPORT */
import "../styles/App.scss";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";


import Header from "./header/Header";


import projects from "../services/projects.json";


import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";

import React from "react";

//

/* SECCIÓN DEL COMPONENTE */

function App() {
  //recuperamos el valor del localstorage
 

  /* VARIABLES ESTADO (DATOS) */
  const [allProjects, setAllProjects] = useState([]);
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    console.log("entro");
    setBtnState((btnState) => !btnState);
  }
  /* EFECTOS */
  useEffect(() => {
    // Código que solo se ejecuta una vez

    // Guardarlo en una variable.

    setAllProjects(projects);
  }, []);

  //
  /* EFECTOS */

  /* FUNCIONES HANDLER */

  /* HTML */
  return (
    <div className="page dark">
      <Header
        title="Porfolio"
        subtitle="Mónica Saborido"
        btnState={btnState}
        handleClick={handleClick}
      ></Header>

      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
       
          <Route
            path="/projects"
            element={<Projects allProjects={allProjects} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<p>Error 404: La página no existe</p>} />
        </Routes>
      </main>
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
