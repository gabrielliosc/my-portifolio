import style from './menu.module.scss';


export default function Menu() {
    const pages = [{
        description: 'Sobre Mim',
        route: './'
    }, {
        description: 'Projetos',
        route: './'
    }, {
        description: 'Experiências',
        route: './'
    },{
        description: 'Formação',
        route: './'
    },{
        description: 'Certificados e Cursos',
        route: './'
    },{
        description: 'Contato',
        route: './'
    }]

    return (
        <div className={style.nav}>
            <ul>
                {pages.map((page, index) => (
                    <li key={index}>
                        <a href={page.route}>{page.description}</a>  
                    </li>
                ))}
            </ul>
        </div>
    )
}