import style from './section.module.scss';
import codeIcon from '../../assets/img/code-solid.svg';

import Backend from './backend';
import DataScience from './data-science';
import Database from './database';
import Design from './design';
import Documentation from './documentation';
import Frontend from './frontend';
import VersionControl from './version-control';


export default function Stacks() {
    return(
        <section className={style.container} id="stacks">
            <h1>
                <img src={codeIcon}></img>
                <span>Tecnologias</span>
                <img src={codeIcon}></img>
            </h1>
            <Frontend />
            <Design />
            <Backend />
            <VersionControl />
            <Documentation />
            <Database />
            <DataScience />
        </section>
    )
}