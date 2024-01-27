import Stack from "../stack";
import { v4 as uuidv4 } from "uuid";
import style from '../section.module.scss';

export default function Documentation() {
    const stacks = ['swagger', 'openapi', 'trello']
    
    return(
        <div className={style.area}>
            <h2>Documentação e gerenciamento</h2>
            <section className={style.section}>
                {stacks.map((stack: string) => 
                    (<Stack key={uuidv4()} stack={stack} />
                    ))} 
            </section>
        </div>
    )
}