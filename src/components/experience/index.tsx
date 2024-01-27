import style from './experience.module.scss';
import htmlIcon from '../../assets/img/HTML.png';
import cssIcon from '../../assets/img/CSS.png';
import pythonIcon from '../../assets/img/python.png';
import codeIcon from '../../assets/img/code-solid.svg';
import terminalIcon from '../../assets/img/terminal.svg';

export default function Experience(){
    const experiences = [{
        title: 'Secretaria Municipal de Assistência Social - RJ',
        id: 1,
        role: 'Analista de Geoprocessamento Júnior (jul/20 - dez/20) | Pleno (jan/21 - abril/23)',
        description: 'Desenvolvimento de soluções inteligentes no ArcGIS Online (webmaps, webapps, dashbords, sites), ArcMap, ArcGIS Pro; Elaboração de formulários e coleta de dados através do Survey123; Elaboração de diagnóstico e análise de dados com Excel; Elaboração de sites no ArcGIS Experience Builder e ArcGis Hub'      
    }]

    const projects = [{
        expid: 1,
        project: 'Cálculo de indicador social',
        description: 'Desenvolvimento de um algoritmo que calcula o indicador social baseado na base de dados do CADúnico',
        skills: `<img src=${pythonIcon} alt="">`
    },{
        expid: 1,
        project: 'Elaboração de portal de dados',
        description: 'Desenvolvimento de um site de acesso à dados socioassistenciais utilizando a plataforma ArcGIS Hub',
        skills: `<img src=${htmlIcon} alt=""> <img src=${cssIcon} alt="">`
    },{
        expid: 1,
        project: 'Elaboração de site de voluntariado',
        description: `Desenvolvimento de um site de inscrição para voluntariado nas unidades da secretaria, utilizando a plataforma ArcGIS Hub. <a href="https://voluntario-pcrj.hub.arcgis.com/" target="_blank" style="text-decoration:none;color:#6c528b;" >Acesse a plataforma</a>`,
        skills: `<img src=${htmlIcon} alt=""> <img src=${cssIcon} alt="">`
    }]

    function experienceProjects(id: number){
        const projs = projects.filter((project) => {return project.expid === id});
        let project = '';

        for (let i=0; i<projs.length; i++){
            project += `<h5><img src=${terminalIcon}/>${projs[i].project}</h5><p>${projs[i].description}</p><p>Linguagens utilizadas: ${projs[i].skills}</p>`
        }
        
        return project
    }

    
    return(
        <section id="experience" className={style.experiences}>
            <h1><img src={codeIcon}></img><span>Experiências</span><img src={codeIcon}></img></h1>
            <ul>
            {experiences.map((experience) => (
                <li key={experience.id}>
                    <h4>{experience.title} <p>{experience.role}</p></h4>
                    <h5 className={style.title}>Projetos desenvolvidos</h5>
                    <p dangerouslySetInnerHTML={{__html: experienceProjects(experience.id)}}></p>
                </li>
            ))}
            </ul>
        </section>
        
    )
}