import style from "../project.module.scss";
import { v4 as uuidv4 } from "uuid";



export function Languages({languages}: {languages: string[]}) {    

        return (
            <>                
                {languages.map(language => (
                    <span className={style.stack} key={uuidv4()}>{language}</span>
                ))} 
            </>
        ) 
}