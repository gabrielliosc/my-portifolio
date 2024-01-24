import Languages from "./languages";
import ModalBase from "./modal";

import style from "./project.module.scss";
import codeIcon from '../../assets/img/code-solid.svg';

import dailyPlanner from '../../assets/img/daily_planner.png';
import newsletter from '../../assets/img/newsletter.png';
import landingPage from '../../assets/img/landing_page.png';

import { v4 as uuidv4 } from "uuid"; //Gerador de uuid

export default function Project() {

    const projects = [{
        "id": uuidv4(),
        "name": 'Daily Planner',
        "demo": 'https://gabrielliosc.github.io/daily-planner/',
        "repository": 'https://github.com/gabrielliosc/daily-planner',
        "description": 'Projeto Front-end replicando um bloco de papel com layout de daily planner',
        "stack": ['CSS', 'HTML', 'JavaScript'],
        "imagem": dailyPlanner
    },{
        "id": uuidv4(),
        "name": 'Página de newsletter',
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/desafio-40',
        "description": 'Desafio 40 do #boraCodar da Rocketseat',
        "stack": ['CSS', 'HTML'],
        "imagem": newsletter
    },{
        "id": uuidv4(),
        "name": 'Plataforma educacional gameficada - PEG',
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/hack-for-change',
        "description": 'Projeto para o Hackhaton Hack for Change',
        "stack": ['CSS', 'HTML', 'React.js'],
        "imagem": newsletter
    },{
        "id": uuidv4(),
        "name": 'Portfólio de uma artista',
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/portifolio-app',
        "description": 'Esse é um projeto de front-end para um portifólio da artista Naju',
        "stack": ['CSS','SASS','HTML', 'React.js'],
        "imagem": newsletter
    },{
        "id": uuidv4(),
        "name": 'Landing page',
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/projetos-comunidade',
        "description": 'Esse é um projeto de front-end de uma landing page feita em conjunto na comunidade de mulheres na tecnologia',
        "stack": ['CSS','HTML'],
        "imagem": landingPage
    },{
        "id": uuidv4(),
        "name": 'LadyRepair',
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/mvp1-front-end',
        "description": 'Site de divulgação de serviços realizados por mulheres, MVP para a pós-graduação de Engenharia de Software. Front-end da aplicação.',
        "stack": ['CSS','HTML','JavaScript'],
        "imagem": landingPage
    },{
        "id": uuidv4(),
        "name": 'API do LadyRepair',
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/mvp1-back-end',
        "description": 'API criada para cadastro de serviços realizados por mulheres, MVP para a pós-graduação de Engenharia de Software. Back-end da aplicação.',
        "stack": ['Python','Flask','Swagger'],
        "imagem": landingPage
    }]


    return (
        <section id="project" className={style.projects}>
            <h1>
                <img src={codeIcon} alt=""/>
                <span>Projetos</span>
                <img src={codeIcon} alt=""/>
            </h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <ModalBase key={uuidv4()} id={project.id} image={project.imagem} />
                        <h2>{project.name} </h2>
                        <p>{project.description}</p>
                        <p className={style.languages}><span>Stacks:</span>
                            <Languages languages={project.stack} />
                        </p>
                        <p>
                            <a href={project.demo} target="_blank" rel="noreferrer" className={project.demo ? style.demo : style.none}> Demo</a>
                            <a href={project.repository} target="_blank" rel="noreferrer" className={style.repository} >Repositório</a>
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}