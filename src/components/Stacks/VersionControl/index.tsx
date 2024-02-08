import { Stack } from "../Stack";
import { v4 as uuidv4 } from "uuid";
import style from '../stacks.module.scss';
import { useTranslation } from "react-i18next";

export function VersionControl() {
    const { t } = useTranslation()
    const stacks = ['git', 'github']
    
    return(
        <div className={style.area}>
            <h2>{t(`stacks.${'version_control'}`)}</h2>
            <section className={style.section}>
                {stacks.map((stack: string) => 
                    (<Stack key={uuidv4()} stack={stack} />
                    ))} 
            </section>
        </div>
    )
}