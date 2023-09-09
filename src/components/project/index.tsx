import { useEffect } from "react";

const projects = [{
    title: '',
    description: '',
    technology: '',
    repository: ''
}]


export default function Project(){
    useEffect(() => {
        async function getProjects(){
          const response = await fetch('https://api.github.com/users/gabrielliosc/repos');
          let projects = await response.json();
          
          return projects.visibility === 'public';
        }
        getProjects();
      }, []);
    return (
        <ul>
            {projects.map((project, index) => (
                <li key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>{project.technology}</p>
                    <a>{project.repository}</a>
                </li>
            ))}
        </ul>
    )
}