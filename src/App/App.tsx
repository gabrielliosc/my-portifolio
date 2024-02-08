//Import Components
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Project } from '../components/Project';
import { Stacks } from '../components/Stacks';
import { Experience } from '../components/Experience';
import { Courses } from '../components/Course';
import { Artigos } from '../components/Articles';
import { Footer } from '../components/Footer';


//Import style
import "./App.scss";

import { useState } from 'react';

export function App() {
  
  const [ isLigthMode, setIsLigthMode ] = useState(false)
  
  function handleModeChange() {
    setIsLigthMode(!isLigthMode)   
  }

  return (
    <div className={`App ${isLigthMode? 'ligth': 'dark'}`}>
      <Header />
      <button onClick={handleModeChange} className={`mode ${isLigthMode? 'ligth': 'dark'}`}>
            <span className='sr-only'>{isLigthMode? 'Ligth Mode' : 'Dark Mode'}</span>
      </button>
      <About mode={isLigthMode}/>
      <Project />
      <Stacks />
      <Experience />
      <Courses />
      <Artigos />
      <Footer />
    </div>
  );
}