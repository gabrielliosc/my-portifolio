import React from 'react';

//Import Components
import Project from '../../components/project';
import Menu from '../../components/menu';
import Experience from '../../components/experience';
import About from '../../components/about';
import Education from '../../components/education';
import Courses from '../../components/course';
import Contact from '../../components/contact';

//Import style
import style from "./App.module.scss";
import Footer from '../../components/footer';


function App() {
  return (
    <div className={style.App}>
      <Menu />
      <About />
      <Project />
      <Experience />
      <Education />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
