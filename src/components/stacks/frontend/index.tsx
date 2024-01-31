import Stack from "../stack";
import { v4 as uuidv4 } from "uuid";
import style from '../section.module.scss';

export default function Frontend() {
    const stacks = ['html', 'css', 'javascript', 'typescript', 'sass', 'reactjs', 'reactRouter', 'mui', 'styledComponents', 'vite', 'angular', 'd3js']
    //bootstrap, lightHouse
    return(
        <div className={style.area}>
            <h2>Front-end</h2>
            <section className={style.section}>
            {stacks.map((stack: string) => 
                (<Stack key={uuidv4()} stack={stack} />
                ))} 
            </section>
        </div>
    )
}