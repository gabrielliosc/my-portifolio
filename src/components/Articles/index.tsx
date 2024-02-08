import { Section } from "../Section";
import { useTranslation } from "react-i18next";
import style from "./article.module.scss";

import arrowIcon from "../../assets/img/arrow-up.svg";
import article01Img from '../../assets/img/Html_css_js.jpg';


export function Artigos() {
    const { t } = useTranslation()

    const articles = [{
        id: 1,
        title: 'HTML5',
        subtitle: 'Básico',
        link: 'https://medium.com/@gabrielliosc/html5-a9bfa25f32d7',
        image: article01Img,
    }]
    
    return(
        <Section title={t(`section.${'articles'}`)}>

            <ul className={style.artigo}>
                {articles.map(article => (
                    <li key={article.id}>
                        <img className={style.articleImg} src={article01Img} alt={'Imagem ' + article.title}></img>
                        <p>{article.title}: {article.subtitle}</p>                        
                        <a href={article.link} target="_blank" rel="noreferrer"><p>{t("visit")} <img src={arrowIcon} alt="" /></p></a>
                    </li>
                ))}
            </ul>
        </Section>
    )
}