import React from 'react';

//Import Components
import Project from '../../components/project';
import Menu from '../../components/menu';
import Experience from '../../components/experience';
import About from '../../components/about';
import Education from '../../components/education';
import Courses from '../../components/course';
import Stacks from '../../components/stacks';
import Contact from '../../components/contact';

//Import style
import style from "./App.module.scss";
import Footer from '../../components/footer';
import Articles from '../../components/article';


function App() {
  return (
    <div className={style.App}>
      <Menu />
      <About />
      <Project />
      <Experience />
      <Education />
      <Courses />
      <Articles />
      <Stacks />
      <Footer />
    </div>
  );
}

export default App;
