import style from './menu.module.scss';
import { Link } from 'react-scroll';

export default function Menu() {
    const sections = [{
        name: 'Sobre Mim',
        route: 'about'
    }, {
        name: 'Projetos',
        route: 'project'
    }, {
        name: 'Experiências',
        route: 'experience'
    }, {
        name: 'Formação',
        route: 'education'
    }, {
        name: 'Certificados e Cursos',
        route: 'course'
    }]

    return (
        <div className={style.nav}>            
            <ul>
                {sections.map((section, index) => (                    
                    <li key={index}>
                        <Link activeClass="active" className={section.route} to={section.route} spy={true} smooth={true} duration={500}>{section.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}