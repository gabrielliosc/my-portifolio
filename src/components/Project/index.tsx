import { Languages } from "./Languages";
import { ModalBase } from "./Modal";

import style from "./project.module.scss";
import githubIcon from '../../assets/img/github-icon.svg';
import demoIcon from '../../assets/img/demo.png';

//Imagens dos projetos realizados
import dailyPlanner from '../../assets/img/daily_planner.png';
import newsletter from '../../assets/img/newsletter.png';
import layoutIntermediario from '../../assets/img/layout_intermediario.png';
import layoutAvancado from '../../assets/img/layout_avancado.png';
import formulario from '../../assets/img/formulario.png';
import blogResponsivo from '../../assets/img/responsividade.png';
import exploreSemLimites from '../../assets/img/explore-sem-limites.png';
import biscoitoSorte from '../../assets/img/biscoito-da-sorte.png';
import landingPage from '../../assets/img/landing_page.png';
import peg from '../../assets/img/peg.png';
import artist from '../../assets/img/artista.png';
import ladyRepair from '../../assets/img/ladyrepair.png';
import ladyRepairApi from '../../assets/img/ladyrepair_api.png';

import { v4 as uuidv4 } from "uuid"; //Gerador de uuid
import { Section } from "../Section";
import { LinksInfo } from "../Links";
import { useTranslation } from "react-i18next";

export function Project() {
    const { t } = useTranslation();

    const projects = [{
        "id": uuidv4(),
        "name": t(`projects.${'daily_planner'}.${'title'}`),
        "demo": 'https://gabrielliosc.github.io/daily-planner/',
        "repository": 'https://github.com/gabrielliosc/daily-planner',
        "description": t(`projects.${'daily_planner'}.${'description'}`),
        "stack": ['CSS', 'HTML', 'JavaScript'],
        "imagem": dailyPlanner
    },{
        "id": uuidv4(),
        "name": t(`projects.${'newsletter'}.${'title'}`),
        "demo": 'https://gabrielliosc.github.io/desafio-40/',
        "repository": 'https://github.com/gabrielliosc/desafio-40',
        "description": t(`projects.${'newsletter'}.${'description'}`),
        "stack": ['CSS', 'HTML', 'Figma'],
        "imagem": newsletter
    },{
        "id": uuidv4(),
        "name": t(`projects.${'layout_intermediario'}.${'title'}`),
        "demo": 'https://estudos-layout-intermediario.vercel.app/',
        "repository": 'https://github.com/gabrielliosc/estudos/tree/main/Rocketseat-desafio/recriando-layout/intermediario',
        "description": t(`projects.${'layout_intermediario'}.${'description'}`),
        "stack": ['CSS', 'HTML', 'Figma'],
        "imagem": layoutIntermediario
    },{
        "id": uuidv4(),
        "name": t(`projects.${'layout_avancado'}.${'title'}`),
        "demo": 'https://estudos-layout-avancado.vercel.app/',
        "repository": 'https://github.com/gabrielliosc/estudos/tree/main/Rocketseat-desafio/recriando-layout/avançado',
        "description": t(`projects.${'layout_avancado'}.${'description'}`),
        "stack": ['CSS', 'HTML', 'Figma'],
        "imagem": layoutAvancado
    },{
        "id": uuidv4(),
        "name": t(`projects.${'formulario'}.${'title'}`),
        "demo": 'https://estudos-topaz-nine.vercel.app/',
        "repository": 'https://github.com/gabrielliosc/estudos/tree/main/Rocketseat-desafio/formulario-intermediario',
        "description": t(`projects.${'formulario'}.${'description'}`),
        "stack": ['CSS', 'HTML', 'Figma'],
        "imagem": formulario
    },{
        "id": uuidv4(),
        "name": t(`projects.${'responsividade'}.${'title'}`),
        "demo": 'https://gabrielliosc.github.io/blog-gatos/',
        "repository": 'https://github.com/gabrielliosc/blog-gatos',
        "description": t(`projects.${'responsividade'}.${'description'}`),
        "stack": ['CSS', 'HTML', 'Figma'],
        "imagem": blogResponsivo
    },{
        "id": uuidv4(),
        "name": t(`projects.${'explore'}.${'title'}`),
        "demo": 'https://gabrielliosc.github.io/explore-sem-limites/',
        "repository": 'https://github.com/gabrielliosc/explore-sem-limites',
        "description": t(`projects.${'explore'}.${'description'}`),
        "stack": ['CSS', 'HTML','Figma'],
        "imagem": exploreSemLimites
    },{
        "id": uuidv4(),
        "name": t(`projects.${'biscoito'}.${'title'}`),
        "demo": 'https://gabrielliosc.github.io/biscoito-da-sorte/',
        "repository": 'https://github.com/gabrielliosc/biscoito-da-sorte',
        "description": t(`projects.${'biscoito'}.${'description'}`),
        "stack": ['CSS', 'HTML','Javascript','Figma'],
        "imagem": biscoitoSorte
    },{
        "id": uuidv4(),
        "name": t(`projects.${'peg'}.${'title'}`),
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/hack-for-change',
        "description": t(`projects.${'peg'}.${'description'}`),
        "stack": ['CSS', 'HTML', 'React.js'],
        "imagem": peg
    },{
        "id": uuidv4(),
        "name": t(`projects.${'portfolio'}.${'title'}`),
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/portifolio-app',
        "description": t(`projects.${'portfolio'}.${'description'}`),
        "stack": ['CSS','SASS','HTML', 'TypeScript', 'React.js'],
        "imagem": artist
    },{
        "id": uuidv4(),
        "name": t(`projects.${'landing_page'}.${'title'}`),
        "demo": 'https://landing-page-ten-beige-94.vercel.app/',
        "repository": 'https://github.com/Mulheres-e-Tecnologia-M-T/projetos',
        "description": t(`projects.${'landing_page'}.${'description'}`),
        "stack": ['CSS','HTML','Figma'],
        "imagem": landingPage
    },{
        "id": uuidv4(),
        "name": t(`projects.${'ladyrepair'}.${'title'}`),
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/mvp1-front-end',
        "description": t(`projects.${'ladyrepair'}.${'description'}`),
        "stack": ['CSS','HTML','JavaScript'],
        "imagem": ladyRepair
    },{
        "id": uuidv4(),
        "name": t(`projects.${'ladyrepair_api'}.${'title'}`),
        "demo": '',
        "repository": 'https://github.com/gabrielliosc/mvp1-back-end',
        "description": t(`projects.${'ladyrepair_api'}.${'description'}`),
        "stack": ['Python','Flask','Swagger'],
        "imagem": ladyRepairApi
    }]


    return (
        <Section title={t(`section.${'projects'}`)} >
            <ul className={style.project}>
                {projects.map(project => (
                    <li key={project.id}>
                        <ModalBase key={uuidv4()} id={project.id} image={project.imagem} />
                        
                        <h2>{project.name} </h2>
                        <p>{project.description}</p>

                        <p className={style.languages}>
                            <span>Stacks:</span>
                            <Languages languages={project.stack} />
                        </p>

                        <p className={style.links}>
                            {project.demo? <LinksInfo url={project.demo} src={demoIcon} type="Demo"/>: false} 
                            <LinksInfo url={project.repository} src={githubIcon} type={t('repository')}/>
                        </p>
                    </li>
                ))}
            </ul>
        </Section>
    )
}