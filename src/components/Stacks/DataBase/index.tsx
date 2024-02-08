import { Stack } from "../Stack";
import { v4 as uuidv4 } from "uuid";
import style from '../stacks.module.scss';
import { useTranslation } from "react-i18next";


export function Database() {
    const { t } = useTranslation();
    const stacks = ['sqlite', 'postgresql', 'mysql', 'neo4j']
    
    return(
        <div className={style.area}>
            <h2>{t(`stacks.${'database'}`)}</h2>
            <section className={style.section}>
                {stacks.map((stack: string) => 
                    (<Stack key={uuidv4()} stack={stack} />
                    ))} 
            </section>
        </div>
    )
}