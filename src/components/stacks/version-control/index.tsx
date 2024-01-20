import Stack from "../stack";
import { v4 as uuidv4 } from "uuid";
import style from '../section.module.scss';

export default function VersionControl() {
    const stacks = ['git', 'github']
    
    return(
        <div className={style.area}>
            <h2>Versionamento de código</h2>
            <section className={style.section}>
                {stacks.map((stack: string) => 
                    (<Stack key={uuidv4()} stack={stack} />
                    ))} 
            </section>
        </div>
    )
}