import { Stack } from "../Stack";
import { v4 as uuidv4 } from "uuid";
import style from '../stacks.module.scss';

export function Hosting() {
    const stacks = ['githubPages', 'vercel', 'netlify', 'render']
    return(
        <div className={style.area}>
            <h2>Hosting</h2>
            <section className={style.section}>
            {stacks.map((stack: string) => 
                (<Stack key={uuidv4()} stack={stack} />
                ))} 
            </section>
        </div>
    )
}