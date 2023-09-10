import React, { useEffect, useState } from "react";
import jsIcon from '../../assets/img/JavaScript.png';
import CSSIcon from '../../assets/img/CSS.png';
import HTMLIcon from '../../assets/img/HTML.png';
import tsIcon from '../../assets/img/TypeScript.png';
import SCSSIcon from '../../assets/img/SCSS.png';

export default function Project() {

    const [projects, setProjects] = useState<any[]>([]); //Create variable projects to get repositories projects from github API and method setProjects to set the result to the variable
    const [languages, setLanguages] = useState<any[]>([]);  //Create variable languages to get languages used on each repositories project from github API and method setLanguages to set the result to the variable

    interface Lang {
        'id': number,
        'languages': string
    } //Type of API's response for project languages 

    useEffect(() => {

        async function getProjects() {

            const responseProj = await fetch('https://api.github.com/users/gabrielliosc/repos');
            const repos = await responseProj.json();
            const publicProjects = await repos.filter((obj: any) => { return obj.visibility === "public" }) //Get only public repositories

            setProjects(publicProjects);

            let projectLanguages = [];


            for (let x = 0; x < await publicProjects.length; x++) { //For each project get the correspondent languages used

                let img = '';

                const responseLang = await fetch(publicProjects[x].languages_url);

                const lang = await responseLang.json();

                const properties = Object.getOwnPropertyNames(lang)

                for (let property in properties) {
                    //Based on the language it appends an img for that language

                    switch (properties[property]) {
                        case 'JavaScript':
                            img += `<img src=${jsIcon} alt=${properties[property]} />`;
                            break
                        case 'CSS':
                            img += `<img src=${CSSIcon} alt=${properties[property]} />`;
                            break
                        case 'SCSS':
                            img += `<img src=${SCSSIcon} alt=${properties[property]} />`;
                            break
                        case 'TypeScript':
                            img += `<img src=${tsIcon} alt=${properties[property]} />`;
                            break
                        case 'HTML':
                            img += `<img src=${HTMLIcon} alt=${properties[property]} />`;
                            break
                        default:
                            img += '';
                    }
                }

                    let projectLang = {
                        'id': publicProjects[x].id,
                        'languages': img
                    }

                    projectLanguages.push(projectLang)

                }


                setLanguages(projectLanguages);

            }

            getProjects();
        }, []);


    return (
        <ul>
            {projects.map(project => (
                <li key={project.id}>
                    <h3>{project.name}</h3>
                    <div dangerouslySetInnerHTML={{ __html: languages.filter((languages: Lang) => { return languages.id === project.id })[0]["languages"]}}></div>
                    <a href={project.html_url} target="_blank" rel="noreferrer">Acesse</a>
                </li>
            ))}
        </ul>
    )
}