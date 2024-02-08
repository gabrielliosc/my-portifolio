import style from './cta.module.scss';
import ctaImg from '../../assets/img/cta.svg';

export default function CallToAction(){

    return (
        <div className={style.cta} id='cta'>
            <div>
                <img className={style.cta__image} src={ctaImg} alt='' />
                <span>
                    <p className={style.title}>Quer transformar ideias em código e criar soluções impactantes?</p>
                    <p>Me mande uma mensagem para discutirmos projetos, ideias ou para trocar experiências na tecnologia. Estou a disposição para colaborar!</p>
                </span>
            </div>
            <form action={"mailto:gabrielli.osc@gmail.com"} className={style.form} method='POST' >
                <label htmlFor="name">
                    <span>Nome:</span>
                    <input type="text" name="name" id="name" placeholder='Digite seu nome' required />
                </label>
                <label htmlFor="email">
                    <span>E-mail:</span>
                    <input type="email" name="email" id="email" placeholder='Digite seu email' required/>
                </label>
                <label htmlFor="msg">
                    <span>Mensagem:</span>
                    <textarea rows={10} cols={40} name="msg" id="msg" placeholder='Deixe sua mensagem :)' required/>
                </label>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}