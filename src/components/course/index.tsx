import { Tab, Tabs, TabPanel, TabsList } from '@mui/base';
import {v4 as uuidv4} from 'uuid';

import style from './course.module.scss';
import codeIcon from '../../assets/img/code-solid.svg';
/* Certificados */
//StepOne
import certStepOne from '../../assets/img/stepone.png';

//Curso em video
import certJs from '../../assets/img/jsCursoEmVideo.png';

//Cod3r
import certAngular from '../../assets/img/angularCoder.png';
import certJsFuncional from '../../assets/img/jsCoder.png';

//Dio
import certNuvem from '../../assets/img/nuvemDio.png';

//Alura
import certSEO from '../../assets/img/seoAlura.png';
import certHTTP from '../../assets/img/httpAlura.png';
import certResp from '../../assets/img/responsividadeAlura.png';
import certAcess from '../../assets/img/acessibilidadeAlura.png';
import certAcess1 from '../../assets/img/acessibilidade1Alura.png';
import certGitGithub from '../../assets/img/git_githubAlura.png';
import certReact from '../../assets/img/reactAlura.png';


export default function Courses(){
    
    const courses = [
    {   id: uuidv4(),
        name: 'SEO: Otimização de sites',
        school: 'Alura',
        certificate: 'seo'
    },{
        id: uuidv4(),
        name: 'HTTP: entendendo a web por baixo dos panos',
        school: 'Alura',
        certificate: 'http'
    },{
        id: uuidv4(),
        name: 'HTML e CSS: responsividade com mobile-first',
        school: 'Alura',
        certificate: 'responsividade'
    },{
        id: uuidv4(),
        name: 'JavaScript Funcional e Reativo',
        school: 'Cod3r',
        certificate: 'js funcional'
    },{
        id: uuidv4(),
        name: 'Descubra a Nuvem',
        school: 'DIO',
        certificate: 'nuvem'
    },{
        id: uuidv4(),
        name: 'Acessibilidade web parte 1: tornando seu front-end inclusivo',
        school: 'Alura',
        certificate: 'acessibilidade 1'
    },{
        id: uuidv4(),
        name: 'Acessibilidade web: crie designs inclusivos',
        school: 'Alura',
        certificate: 'acessibilidade'
    },{
        id: uuidv4(),
        name: 'React - escrevendo com Typescript',
        school: 'Alura',
        certificate: 'react'
    },{
        id: uuidv4(),
        name: 'StepOne - HTML5, CSS3, JavaScript',
        school: 'WebSaty',
        certificate: 'stepone'
    },{
        id: uuidv4(),
        name: 'Git e GitHub - repositório, commit e versões',
        school: 'Alura',
        certificate: 'git github'
    },{
        id: uuidv4(),
        name: 'Angular 9 - Essencial',
        school: 'Cod3r',
        certificate: 'angular'
    },{
        id: uuidv4(),
        name: 'Javascript',
        school: 'Curso em Video',
        certificate: 'js'
    }]

    function certificate(cert: string) {
        switch(cert){
            case 'stepone':
                return certStepOne
                break
            case 'seo':
                return certSEO
                break
            case 'responsividade':
                return certResp
                break
            case 'js':
                return certJs
                break
            case 'js funcional':
                return certJsFuncional
                break
            case 'angular':
                return certAngular
                break
            case 'nuvem':
                return certNuvem
                break
            case 'acessibilidade 1':
                return certAcess1
                break
            case 'acessibilidade':
                return certAcess
                break
            case 'react':
                return certReact
                break
            case 'git github':
                return certGitGithub
                break
            case 'http':
                return certHTTP
            default:
                return 'None'
        }
    }

    return (
        <section id="course" className={style.courses}>
            <h1>
                <img src={codeIcon} />
                <span>Cursos</span>
                <img src={codeIcon} />
            </h1>
            <Tabs id='content' className={style.content}>
                <TabsList className={style.list}>
                    {courses.map((course) => (
                        <Tab className={style.list__item} key={course.id} value={course.id}>
                            <h3>Curso: {course.name}</h3>
                            <p>Instituição: {course.school}</p>
                        </Tab>
                    ))}
                </TabsList>
                {courses.map((course) => (
                    <TabPanel key={uuidv4()} className={style.panel} value={course.id}>
                        <img className={style.certificate} src={certificate(course.certificate)} alt={`Certificado do curso ${course.name}`} />
                    </TabPanel>
                ))}                
            </Tabs>
        </section>
    )
}