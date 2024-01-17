import style from "./article.module.scss";
import article01Img from '../../assets/img/Html_css_js.jpg';
import codeIcon from '../../assets/img/code-solid.svg';
import arrowIcon from "../../assets/img/arrow-up.svg";

export default function Articles() {
    const articles = [{
        id: 1,
        title: 'HTML5',
        subtitle: 'Básico',
        link: 'https://medium.com/@gabrielliosc/html5-a9bfa25f32d7',
        image: article01Img,
    }]
    return(
        <section id="articles" className={style.article}>
            <h1>
                <img src={codeIcon}></img>
                <span>Artigos</span>
                <img src={codeIcon}></img>
            </h1>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <img className={style.articleImg} src={article01Img} alt={'Imagem ' + article.title}></img>
                        <p>{article.title}: {article.subtitle}</p>                        
                        <a href={article.link} target="_blank" rel="noreferrer"><p>Acesse aqui <img src={arrowIcon} alt="" /></p></a>
                    </li>
                ))}
            </ul>
        </section>
    )
}