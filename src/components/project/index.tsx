import Languages from "./languages";
import ModalBase from "./modal";

import style from "./project.module.scss";
import codeIcon from '../../assets/img/code-solid.svg';
import githubIcon from '../../assets/img/github-icon.svg';
import demoIcon from '../../assets/img/demo.png';

//Imagens dos projetos realizados
import dailyPlanner from '../../assets/img/daily_planner.png';
import newsletter from '../../assets/img/newsletter.png';
import landingPage from '../../assets/img/landing_page.png';
import peg from '../../assets/img/peg.png';
import artist from '../../assets/img/artista.png';
import ladyRepair from '../../assets/img/ladyrepair.png';
import ladyRepairApi from '../../assets/img/ladyrepair_api.png';

import { v4 as uuidv4 } from "uuid"; //Gerador de uuid

export default function Project() {

    const projects = [{
        "id": uuidv4(),
        "name": 'Daily Planner',
        "demo": 'https://gabrielliosc.github.io/daily-planner/',
        "repository": 'https://github.com/gabrielliosc/daily-planner',
        "description": 'Projeto replicando um layout de daily planner',
        "stack": ['CSS', 'HTML', 'JavaScript'],
        "imagem": dailyPlanner
    },{
        "id": uuidv4(),
        "name": 'Página de newsletter',
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/desafio-40',
        "description": 'Desafio 40 do #boraCodar da Rocketseat',
        "stack": ['CSS', 'HTML', 'Figma'],
        "imagem": newsletter
    },{
        "id": uuidv4(),
        "name": 'Plataforma educacional gameficada - PEG',
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/hack-for-change',
        "description": 'Plataforma desenvolvida para o Hack for Change',
        "stack": ['CSS', 'HTML', 'React.js'],
        "imagem": peg
    },{
        "id": uuidv4(),
        "name": 'Portfólio de uma artista',
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/portifolio-app',
        "description": 'Um portfólio desenvolvido para a artista Naju',
        "stack": ['CSS','SASS','HTML', 'TypeScript', 'React.js'],
        "imagem": artist
    },{
        "id": uuidv4(),
        "name": 'Landing page',
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/projetos-comunidade',
        "description": 'Landing page feita em conjunto na comunidade de mulheres e tecnologia',
        "stack": ['CSS','HTML','Figma'],
        "imagem": landingPage
    },{
        "id": uuidv4(),
        "name": 'LadyRepair',
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/mvp1-front-end',
        "description": 'Site de divulgação de serviços realizados por mulheres, MVP para a pós-graduação de Engenharia de Software.',
        "stack": ['CSS','HTML','JavaScript'],
        "imagem": ladyRepair
    },{
        "id": uuidv4(),
        "name": 'API do LadyRepair',
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/mvp1-back-end',
        "description": 'Criada para cadastro de serviços realizados por mulheres, MVP para a pós-graduação de Engenharia de Software.',
        "stack": ['Python','Flask','Swagger'],
        "imagem": ladyRepairApi
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
                        <p className={style.links}>
                            <a href={project.demo} target="_blank" rel="noreferrer" className={project.demo ? style.demo : style.none}><img src={demoIcon} alt="" />Demo</a>
                            <a href={project.repository} target="_blank" rel="noreferrer" className={style.repository} ><img src={githubIcon} alt="" />Repositório</a>
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}