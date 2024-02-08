import style from './experience.module.scss';
import htmlIcon from '../../assets/img/HTML.png';
import cssIcon from '../../assets/img/CSS.png';
import pythonIcon from '../../assets/img/python.png';

import { Section } from '../Section';
import { useTranslation } from 'react-i18next';

export function Experience(){

    const { t } = useTranslation();

    const experiences = [{
        title: t(`experiences.${'place'}`),
        id: 1,
        role: `${t(`experiences.${'role'}.${'title'}`)} ${t(`experiences.${'role'}.${'pleno'}`)} (jan/21 - abril/23) | ${t(`experiences.${'role'}.${'junior'}`)} (jul/20 - dez/20) `,
        description: 'Desenvolvimento de soluções inteligentes no ArcGIS Online (webmaps, webapps, dashbords, sites), ArcMap, ArcGIS Pro; Elaboração de formulários e coleta de dados através do Survey123; Elaboração de diagnóstico e análise de dados com Excel; Elaboração de sites no ArcGIS Experience Builder e ArcGis Hub'      
    }]

    const projects = [{
        expid: 1,
        project: t(`experiences.${'social_index'}.${'title'}`),
        description: t(`experiences.${'social_index'}.${'description'}`),
        skills: `<img src=${pythonIcon} alt="">`
    },{
        expid: 1,
        project: t(`experiences.${'data_portal'}.${'title'}`),
        description: t(`experiences.${'data_portal'}.${'description'}`),
        skills: `<img src=${htmlIcon} alt=""> <img src=${cssIcon} alt="">`
    },{
        expid: 1,
        project: t(`experiences.${'volunteer'}.${'title'}`),
        description: t(`experiences.${'volunteer'}.${'description'}`),
        skills: `<img src=${htmlIcon} alt=""> <img src=${cssIcon} alt="">`
    }]

    function experienceProjects(id: number){

        const projs = projects.filter((project) => {return project.expid === id});
        
        let project = '';

        for (let i=0; i<projs.length; i++){
            project += `<h6>${projs[i].project}</h6><p>${projs[i].description}</p><p>${t(`experiences.${'stacks'}`)}: ${projs[i].skills}</p>`
        }
        
        return project
    }

    
    return(
        <Section title={t(`section.${'experiences'}`)}>
            <ul className={style.experience}>
            {experiences.map((experience) => (
                <li key={experience.id}>
                    <h4>{experience.title} <p>{experience.role}</p></h4>
                    <h5 className={style.title}>{t(`experiences.${'main_title'}`)}</h5>
                    <p dangerouslySetInnerHTML={{__html: experienceProjects(experience.id)}}></p>
                </li>
            ))}
            </ul>
        </Section>
        
    )
}