import Modal from './modal';
import style from './course.module.scss';
import codeIcon from '../../assets/img/code-solid.svg';

export default function Courses(){
    const courses = [{
        name: 'Acessibilidade web: crie designs inclusivos',
        school: 'Alura',
        certificate: ''
    },{
        name: 'React - escrevendo com Typescript',
        school: 'Alura',
        certificate: ''
    },{
        name: 'StepOne - HTML5, CSS3, JavaScript',
        school: 'WebSaty',
        certificate: ''
    },{
        name: 'Git e GitHub - repositório, commit e versões',
        school: 'Alura',
        certificate: ''
    },{
        name: 'Javascript [40 Horas]',
        school: 'Curso em Video',
        certificate: ''
    }]

    return (
        <section id="course" className={style.courses}>
            <h1>
                <img src={codeIcon}></img>
                <span>Cursos</span>
                <img src={codeIcon}></img>
            </h1>
            <div className={style.content}>
                <ul>
                    {courses.map((course, index) => (
                        <li key={index}>
                            <h3>Curso: {course.name}</h3>
                            <p>Instituição: {course.school}</p>
                        </li>
                    ))}
                </ul>
                <Modal></Modal>
            </div>
        </section>
    )
}