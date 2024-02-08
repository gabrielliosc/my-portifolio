import { useTranslation } from 'react-i18next';
import style from './footer.module.scss';

export function Footer(){
    const { t } =useTranslation()
    return (
        <footer className={style.footer}>
            <p><i>{t(`footer.${'develop'}`)} Gabrielli Oliveira | {t(`footer.${'update'}`)}: 07/02/2024</i></p>

            <p><i>{t(`footer.${'source'}`)}: https://fontawesome.com/; <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/1349/website">Website</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>; <a rel="noreferrer" href="https://www.flaticon.com/br/icones-gratis/css3" title="css3 ícones">Css3 ícones criados por popcornarts - Flaticon</a>; <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/br/icones-gratis/html" title="html ícones">Html ícones criados por Freepik - Flaticon</a>; <a target="_blank" rel="noreferrer" href="https://undraw.co/">Undraw</a></i></p>
        </footer>
    )
}