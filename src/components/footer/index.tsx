import style from './footer.module.scss';

export default function Footer(){
    return (
        <footer className={style.footer}>
            <p><i>Desenvolvido por Gabrielli Oliveira | atualizado: 17/09/2023</i></p>
            <p><i>Fontes: https://fontawesome.com/</i></p>
        </footer>
    )
}