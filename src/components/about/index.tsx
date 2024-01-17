import style from './about.module.scss';
import Contact from '../contact';
import profile from '../../assets/img/profile.jpg';
import codeIcon from '../../assets/img/code-solid.svg';


export default function About() {
    return (
        <section id="about" className={style.about}>
            <h1><img src={codeIcon}></img><span>Sobre mim</span><img src={codeIcon}></img></h1>
            <div className={style.content}>
                <div className={style.row1}>
                    <img id="profile" className={style.profile} src={profile} alt="Mulher branca com cabelo magenta"></img>
                    <h2>Gabrielli de Oliveira</h2>
                    <h3>Desenvolvedora Frontend</h3>
                </div>
                <div className={style.row2}>
                    <p>Engenheira Cartógrafa pela UERJ, tenho interesse na área de tecnologia em especial na área de desenvolvimento web.</p>
                    <p>Durante minha graduação desenvolvi interesse pela computação ao realizar disciplinas relacionadas ao tema. Após me formar continuei o estudo nessa área e apliquei em algumas experiências de trabalho os meus conhecimentos. Mantendo este interesse, optei por realizar uma transição de carreira para a área de frontend, ingressei na Pós-graduação de Engenharia de software da PUC-Rio para aprofundar mais meus estudos.</p>
                    <Contact></Contact>
                </div>
            </div>
        </section>
    )
}