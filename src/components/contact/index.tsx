import style from './contact.module.scss';
import cvIcon from '../../assets/img/cv-icon.svg';

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
            <li>
                <a className={style.cv} target="_blank" href='https://docs.google.com/document/d/1eb2I3lTRSMcUnwgF9r75s_GAxgkDvKtj/edit?usp=sharing&ouid=105115725418560324999&rtpof=true&sd=true'>
                    <img src={cvIcon} alt="" />Baixar CV
                </a>
            </li>
        </ul>
    </div>
    )
}