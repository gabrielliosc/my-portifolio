//Icones do frontend
import CSSIcon from '../../../assets/img/CSS.png';
import HTMLIcon from '../../../assets/img/HTML.png';
import jsIcon from '../../../assets/img/JavaScript.png';
import tsIcon from '../../../assets/img/TypeScript.png';
import reactIcon from '../../../assets/img/react.svg';
import reactrouterIcon from '../../../assets/img/react-router.svg';
import muiIcon from '../../../assets/img/mui.svg';
import SCSSIcon from '../../../assets/img/scss.svg';
import styledIcon from '../../../assets/img/styled_components.png';
import bootstrapIcon from '../../../assets/img/bootstrap.png';
import angularIcon from '../../../assets/img/angular.svg';
import viteIcon from '../../../assets/img/vite.svg';
import lighthouseIcon from '../../../assets/img/lighthouse.png';
import i18nIcon from '../../../assets/img/i18n.png';

//Icones do design
import figmaIcon from '../../../assets/img/figma.svg';
import canvaIcon from '../../../assets/img/canva.svg';

//Icones de backend
import pythonIcon from '../../../assets/img/python.svg';
import flaskIcon from '../../../assets/img/flask.svg';
import nodejsIcon from '../../../assets/img/nodejs.svg';

//Icones versionamento de códigos
import gitIcon from '../../../assets/img/git.svg';
import githubIcon from '../../../assets/img/github.svg';

//Icones documentação e gerenciamento
import swaggerIcon from '../../../assets/img/swagger.svg';
import openapiIcon from '../../../assets/img/openapi.svg';
import trelloIcon from '../../../assets/img/trello.svg';

//Icones do banco de dados
import sqlLiteIcon from '../../../assets/img/sqlite.svg';
import mysqlIcon from '../../../assets/img/mysql.svg';
import postgresqlIcon from '../../../assets/img/postgresql.svg';
import neo4jIcon from '../../../assets/img/neo4j.svg';

//Icones do ciência de dados
import d3jsIcon from '../../../assets/img/d3js.svg';
import pandasIcon from '../../../assets/img/pandas.svg';
import jupyterIcon from '../../../assets/img/jupyter.svg';


import style from './stack.module.scss';


export function Stack({stack}: {stack: string}) {

    //Baseado na stack retorna o ícone da stack
    function languageIcon(lang: string) {

        switch (lang) {
            case 'reactjs':
                return reactIcon;
                break
            case 'reactRouter':
                return reactrouterIcon;
                break
            case 'mui':
                return muiIcon;
                break
            case 'javascript':
                return jsIcon;
                break
            case 'css':
                return CSSIcon;
                break
            case 'sass':
                return SCSSIcon;
                break
            case 'typescript':
                return tsIcon;
                break
            case 'html':
                return HTMLIcon;
                break
            case 'styledComponents':
                return styledIcon;
                break
            case 'angular':
                return angularIcon;
                break
            case 'bootstrap':
                return bootstrapIcon;
                break
            case 'lightHouse':
                return lighthouseIcon;
                break
            case 'vite':
                return viteIcon;
                break
            case 'i18n':
                return i18nIcon;
                break
            case 'figma':
                return figmaIcon;
                break
            case 'canva':
                return canvaIcon;
                break
            case 'python':
                return pythonIcon;
                break
            case 'flask':
                return flaskIcon;
                break
            case 'nodejs':
                return nodejsIcon;
                break
            case 'git':
                return gitIcon;
                break
            case 'github':
                return githubIcon;
                break
            case 'swagger':
                return swaggerIcon;
                break
            case 'openapi':
                return openapiIcon;
                break
            case 'trello':
                return trelloIcon;
                break
            case 'sqlite':
                return sqlLiteIcon;
                break
            case 'mysql':
                return mysqlIcon;
                break
            case 'postgresql':
                return postgresqlIcon;
                break
            case 'neo4j':
                return neo4jIcon;
                break
            case 'd3js':
                return d3jsIcon;
                break
            case 'pandas':
                return pandasIcon;
                break
            case 'jupyter':
                return jupyterIcon
            default:
                return '';
        }
    }

    //Baseado na stack retorna a classe da cor do background
    function languageBgColor(lang: string) {

        switch (lang) {
            case 'javascript':
            case 'python':
                return `${style.icon} + ${style.yellow}`;
                break
            case 'sass':
                return `${style.icon} + ${style.pink}`;
                break
            case 'html':
            case 'd3js':
            case 'git':
            case 'jupyter':
                return `${style.icon} + ${style.orange}`;
                break
            case 'styledComponents':
                return `${style.icon} + ${style.ligthpink}`;
                break
            case 'angular':
            case 'reactRouter':
                return `${style.icon} + ${style.red}`;
                break
            case 'bootstrap':
                return `${style.icon} + ${style.purple}`;
                break
            case 'nodejs':
            case 'swagger':
                return `${style.icon} + ${style.green}`;
                break
            case 'neo4j':
            case 'mysql':
            case 'trello':
                return `${style.icon} + ${style.black}`;
                break
            case 'vite':
            case 'figma':
            case 'sqlite':
            case 'flask':
            case 'github':
            case 'openapi':
            case 'lightHouse':            
            case 'i18n':
                return `${style.icon} + ${style.white}`;
                break
            case 'reactjs':
            case 'typescript':
            case 'css':
            case 'canva':
            case 'postgresql':
            case 'pandas':
            case 'mui':
                return `${style.icon} + ${style.blue}`;
                break
            default:
                return '';
        }
    }


    return(
        <div className={style.stack}>
            <img className={languageBgColor(stack)} src={languageIcon(stack)} alt={stack} />
            <span>{stack[0].toUpperCase() + stack.substring(1)}</span>
        </div>
    )
}