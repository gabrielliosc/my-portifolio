import { ReactElement } from 'react';
import codeIcon from '../../assets/img/code-solid.svg';
import style from "./section.module.scss";

export function Section({children, title}: {children: ReactElement, title: string}){

    const id = (title[0].toLowerCase() + title.substring(1)).replace(/ /g, '')
    return (
        <section id={id} className={style.section}>
            <h1>
                <img src={codeIcon} alt="Icone de código"/>
                <span>{title[0].toUpperCase() + title.substring(1)}</span>
                <img src={codeIcon} alt="Icone de código"/>
            </h1>
            {children}
        </section>
    )
}