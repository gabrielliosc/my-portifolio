import style from './contact.module.scss';

export default function Contact(){
    return (
    <div className={style.contact}>
        <h3>Contato</h3>
        <ul>
            <li><a href="mailto:gabrielli.osc@gmail.com">gabrielli.osc@gmail.com</a></li>
            <li><a href="https://github.com/gabrielliosc">GitHub</a></li>
            <li><a href="https://linkedin.com/gabrielli-oliveira-cruz">LinkedIn</a></li>
        </ul>
    </div>
    )
}