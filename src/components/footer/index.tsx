import style from './footer.module.scss';

export default function Footer(){
    return (
        <footer className={style.footer}>
            <p><i>Desenvolvido por Gabrielli Oliveira | atualizado: 26/01/2024</i></p>
            <p><i>Fontes: https://fontawesome.com/; <a target="_blank" href="https://icons8.com/icon/1349/website">Website</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>; <a href="https://www.flaticon.com/br/icones-gratis/css3" title="css3 ícones">Css3 ícones criados por popcornarts - Flaticon</a>; <a href="https://www.flaticon.com/br/icones-gratis/html" title="html ícones">Html ícones criados por Freepik - Flaticon</a>; <a target="_blank" href="https://undraw.co/">Undraw</a></i></p>
        </footer>
    )
}