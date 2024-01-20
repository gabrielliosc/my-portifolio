import Stack from "../stack";
import { v4 as uuidv4 } from "uuid";
import style from '../section.module.scss';

export default function DataScience() {
    const stacks = ['python', 'd3js', 'pandas']
    
    return(
        <div className={style.area}>
            <h2>Ciência de dados</h2>
            <section className={style.section}>
                {stacks.map((stack: string) => 
                    (<Stack key={uuidv4()} stack={stack} />
                    ))} 
            </section>
        </div>
    )
}