import React, { useEffect, useState } from "react";
import Languages from "./languages";
import style from "./project.module.scss";
import arrowIcon from "../../assets/img/arrow-up.svg";
import codeIcon from '../../assets/img/code-solid.svg';
import projectImg from '../../assets/img/profile.jpg'

export default function Project() {

    const [projects, setProjects] = useState<any[]>([]); //Create variable projects to get repositories projects from github API and method setProjects to set the result to the variable

    useEffect(() => {

        async function getProjects() {

            const responseProj = await fetch('https://api.github.com/users/gabrielliosc/repos');
            const repos = await responseProj.json();
            const publicProjects = await repos.filter((obj: any) => { return obj.visibility === "public" }) //Get only public repositories

            setProjects(publicProjects);

            }

            getProjects();
        }, []);

    return (
        <div id="project" className={style.projects}>
            <h1>
                <img src={codeIcon}></img>
                <span>Projetos</span>
                <img src={codeIcon}></img>
                <p>Seção em construção</p>  
            </h1>
            <ul>                  
                {projects.map(project => (
                    <li key={project.id}>
                        {//<img className={style.projectImg} src={project.img_url} alt={'Imagem ' + project.name}></img>
                        }
                        <p>Título: {project.name} <a href={project.html_url} target="_blank" rel="noreferrer"><img src={arrowIcon} alt="" /></a></p>
                        <p>Descrição: {project.description}</p>
                        <p className={style.languages}><span>Linguages utilizadas:</span><Languages url={project.languages_url} id={project.id}></Languages>   </p>                 
                    </li>
                ))}
            </ul>
        </div>
    )
}