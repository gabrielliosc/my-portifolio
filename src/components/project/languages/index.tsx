import React, { useEffect, useState } from "react";
import jsIcon from '../../../assets/img/JavaScript.jpg';
import CSSIcon from '../../../assets/img/CSS.png';
import HTMLIcon from '../../../assets/img/HTML.png';
import tsIcon from '../../../assets/img/TypeScript.png';
import reactIcon from '../../../assets/img/reactjs.png'
import SCSSIcon from '../../../assets/img/SCSS.png';
import style from "../project.module.scss";


interface Props {
    'id': number,
    'language': Array<string>
}

export default function Languages({language}: {language: Array<string>}) {

    const [languages, setLanguages] = useState<string[]>([]); //Create variable projects to get repositories projects from github API and method setProjects to set the result to the variable

    useEffect(() => {

        function filteredLang() {
            
            let filtrado = language.filter(removeValue)

            setLanguages(filtrado)
        }

        filteredLang();
    }, [language]);

    function removeValue(value:string, index:number, topics: Array<string>) {
            // If the value at the current array index matches the specified value (visible)
            if (value === 'visible') {
                // Removes the value from the original array
                topics.splice(index, 1);
                return false;
                }
            return true;
        }
        

        function languageIcon(lang: string) {

            switch (lang) {
                case 'reactjs':
                    return reactIcon;
                case 'javascript':
                    return jsIcon;
                case 'css':
                    return CSSIcon;
                case 'sass':
                    return SCSSIcon;
                case 'typescript':
                    return tsIcon;
                case 'html':
                    return HTMLIcon;
                default:
                    return '';
            }
        }
    
        return (
    
            <>                
                {languages.map((language: string,index: any) => 
                (<img className={style.icon} key={index}
                src={languageIcon(language)} 
                alt={language}></img>
                ))} 
            </>
        ) 
}