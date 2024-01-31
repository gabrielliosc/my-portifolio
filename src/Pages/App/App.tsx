//Import Components
import Project from '../../components/project';
import Menu from '../../components/menu';
import Experience from '../../components/experience';
import About from '../../components/about';
// import CallToAction from '../../components/callToAction';
import Courses from '../../components/course';
import Stacks from '../../components/stacks';


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
      <Stacks />
      <Experience />
      <Courses />
      <Articles />
      {/* <CallToAction /> */}
      <Footer />
    </div>
  );
}

export default App;
