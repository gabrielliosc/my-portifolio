import Stack from "../stack";
import { v4 as uuidv4 } from "uuid";
import style from '../section.module.scss';

export default function Database() {
    const stacks = ['sqlite', 'postgresql', 'mysql', 'neo4j']
    
    return(
        <div className={style.area}>
            <h2>Banco de dados</h2>
            <section className={style.section}>
                {stacks.map((stack: string) => 
                    (<Stack key={uuidv4()} stack={stack} />
                    ))} 
            </section>
        </div>
    )
}