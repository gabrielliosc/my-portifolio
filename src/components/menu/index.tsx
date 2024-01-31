import style from './menu.module.scss';
import logo from '../../assets/img/logo_gabrielli.png';

import { Link } from 'react-scroll';
import {v4 as uuidv4} from 'uuid';

export default function Menu() {
    const sections = [{
        name: 'Sobre Mim',
        route: 'about'
    }, {
        name: 'Projetos',
        route: 'project'
    },{
        name: 'Tecnologias',
        route: 'stacks'
    },{
        name: 'Experiências',
        route: 'experience'
    },{
        name: 'Cursos',
        route: 'course'
    },{
        name: 'Artigos',
        route: 'articles'
    }
    // ,{
    //     name: 'Contato',
    //     route: 'cta'
    // }
    ]

    return (
        <div className={style.nav}>   
            <img src={logo} alt=''/>
            <ul>
                {sections.map((section) => (                    
                    <li key={uuidv4()}>
                        <Link activeClass="active" className={section.route} to={section.route} spy={true} smooth={true} duration={500}>{section.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}