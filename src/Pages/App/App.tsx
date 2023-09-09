import React from 'react';
import Project from '../../components/project';
import Menu from '../../components/menu';
import Experience from '../../components/experience';
import About from '../../components/about';
import Education from '../../components/education';
import Courses from '../../components/course';
import Contact from '../../components/contact';

function App() {
  return (
    <div className="App">
      <Menu />
      <About />
      <Project />
      <Experience />
      <Education />
      <Courses />
      <Contact />
    </div>
  );
}

export default App;
