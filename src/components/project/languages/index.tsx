import React, { useEffect, useState } from "react";
import jsIcon from '../../../assets/img/JavaScript.png';
import CSSIcon from '../../../assets/img/CSS.png';
import HTMLIcon from '../../../assets/img/HTML.png';
import tsIcon from '../../../assets/img/TypeScript.png';
import SCSSIcon from '../../../assets/img/SCSS.png';
import style from "../project.module.scss";

interface Props {
    url: string
    id: number
}
export default function Languages({url, id}: Props) {


    const [languages, setLanguages] = useState<any>([]);  //Create variable languages to get languages used on each repositories project from github API and method setLanguages to set the result to the variable

    const [properties, setProperties] = useState<any>([]); //Create variable properties to get all propertie and method setProperties to set the result to the variable


    useEffect(() => {

        async function getLanguages() {

            //For each project get the correspondent languages used
            
            const responseLang = await fetch(url);
            

            const lang = await responseLang.json();

            

            if (lang.length !== 0){

                const projectLang = {
                    'id': id,
                    'languages': await lang
                }

                const properties = Object.getOwnPropertyNames(projectLang.languages);

                setLanguages(projectLang.languages);
                setProperties(properties);

            } else {

                const projectLang = {
                    'id': id,
                    'languages': ''
                }
                const properties = Object.getOwnPropertyNames(projectLang.languages);

                setLanguages(projectLang.languages);
                setProperties(properties);

            }        
        
    }

        getLanguages();

    }, [url,id]);

    
    function languageIcon(language: string) {

        switch (language) {
            case 'JavaScript':
                return jsIcon;
            case 'CSS':
                return CSSIcon;
            case 'SCSS':
                return SCSSIcon;
            case 'TypeScript':
                return tsIcon;
            case 'HTML':
                return HTMLIcon;
            default:
                return '';
        }
    }

    return (

        <>
            {properties.map((property: string,index: any) => 
                        (<img className={style.icon} key={index}
                        src={languageIcon(property)} 
                        alt={property}></img>
                        ))}

        </>
    )
}