import style from "../project.module.scss";


interface Props {
    'id': number,
    'language': Array<string>
}

export default function Languages({languages}: {languages: Array<string>}) {    
        return (
            <>                
                {languages.map((language: string,index: any) => 
                (<span className={style.icon} key={index}>{language}</span>
                ))} 
            </>
        ) 
}