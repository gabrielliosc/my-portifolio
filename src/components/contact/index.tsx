import style from './contact.module.scss';

export default function Contact(){
    return (
    <div id="contact" className={style.contact}>
        <ul>
            <li>
                <a className={style.email} href="mailto:gabrielli.osc@gmail.com"> 
                <span className={style.tooltiptext}>gabrielli.osc@gmail.com</span>                   
                </a>
            </li>
            <li>
                <a className={style.github} target="_blank" href="https://github.com/gabrielliosc">
                </a>
            </li>
            <li>
                <a className={style.linkedin} target="_blank" href="https://www.linkedin.com/in/gabrielli-oliveira-cruz/">
                </a>
            </li>
        </ul>
    </div>
    )
}