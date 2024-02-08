import style from './header.module.scss';

import { LANGUAGES } from '../../constants';
import { useTranslation } from "react-i18next";

import { Link } from 'react-scroll';
import {v4 as uuidv4} from 'uuid';

export function Header() {

    const { i18n, t } = useTranslation();

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    const about = t(`section.${'about'}`)
    const projects = t(`section.${'projects'}`)
    const stacks = t(`section.${'stacks'}`)
    const experiences = t(`section.${'experiences'}`)
    const courses = t(`section.${'courses'}`)
    const articles = t(`section.${'articles'}`)

    const sections = [{
        name: about,
        route: (about[0].toLowerCase() + about.substring(1)).replace(/ /g, '') //Deixa a primeira letra minuscula e tira os espaços (para ficar igual aos ids)
    }, {
        name: projects,
        route: (projects[0].toLowerCase() + projects.substring(1)).replace(/ /g, '')
    },{
        name: stacks,
        route: (stacks[0].toLowerCase() + stacks.substring(1)).replace(/ /g, '')
    },{
        name: experiences,
        route: (experiences[0].toLowerCase() + experiences.substring(1)).replace(/ /g, '')
    },{
        name: courses,
        route: (courses[0].toLowerCase() + courses.substring(1)).replace(/ /g, '')
    },{
        name: articles,
        route: (articles[0].toLowerCase() + articles.substring(1)).replace(/ /g, '')
    }]

    return (
        <header className={style.header}>

            <div className={style.column}>

                {/* Opção de linguas */}
                <label htmlFor="lang">{t("language")}</label>
                <select id="lang" defaultValue={i18n.language} onChange={onChangeLang} className={style.lang}>
                    {LANGUAGES.map(({ code, label }) => (
                    <option key={code} value={code} className={code === 'pt-BR'? style.ptbr : style.en}>
                        { label }
                    </option>
                    ))}
                </select>   
            </div>

            {/* Menu */}
            <nav className={style.menu}>
                {sections.map((section) => (                    
                    <li key={uuidv4()}>
                        <Link activeClass="active" className={section.route} to={section.route} spy={true} smooth={true} duration={500}>{section.name}</Link>
                    </li>
                ))}
            </nav>

        </header>
    )
}