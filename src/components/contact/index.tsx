import style from './contact.module.scss';

export default function Contact(){
    return (
    //<footer id="contact" className={style.contact}> <h3>Contato</h3>
    <div id="contact" className={style.contact}>
        <ul>
            <li>
                <a className={style.email} href="mailto:gabrielli.osc@gmail.com"> 
                <span className={style.tooltiptext}>gabrielli.osc@gmail.com</span>                   
                </a>
            </li>
            <li>
                <a className={style.github} href="https://github.com/gabrielliosc">
                </a>
            </li>
            <li>
                <a className={style.linkedin} href="https://linkedin.com/gabrielli-oliveira-cruz">
                </a>
            </li>
        </ul>
    </div>
       //<span><i>Última atualização: 11/09/2023</i></span>
    //</footer>
    )
}