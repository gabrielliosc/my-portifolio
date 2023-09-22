import style from './footer.module.scss';

export default function Footer(){
    return (
        <footer className={style.footer}>
            <p><i>Desenvolvido por Gabrielli Oliveira | atualizado: 17/09/2023</i></p>
            <p><i>Fontes: https://fontawesome.com/; <a href="https://www.flaticon.com/br/icones-gratis/css3" title="css3 ícones">Css3 ícones criados por popcornarts - Flaticon</a>; <a href="https://www.flaticon.com/br/icones-gratis/html" title="html ícones">Html ícones criados por Freepik - Flaticon</a></i></p>
        </footer>
    )
}