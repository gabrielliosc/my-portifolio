import style from '../stacks.module.scss';
import { Stack } from "../Stack";

import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

export function DataScience() {
    const { t } = useTranslation()

    const stacks = ['python', 'd3js', 'pandas', 'jupyter']
    
    return(
        <div className={style.area}>
            <h2>{t(`stacks.${'data_science'}`)}</h2>
            <section className={style.section}>
                {stacks.map((stack: string) => 
                    (<Stack key={uuidv4()} stack={stack} />
                    ))} 
            </section>
        </div>
    )
}