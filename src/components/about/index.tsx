import style from './about.module.scss';
import profile from '../../assets/img/profile.jpg';


export default function About() {
    return (
        <div className={style.about}>
            <h1>Sobre Mim</h1>
            <div className={style.column}>
                <img id="profile" className={style.profile} src={profile} alt="Mulher branca com cabelo magenta"></img>
                <h2>Gabrielli de Oliveira</h2>
                <h3>Desenvolverdora Frontend</h3>
            </div>
            <div className={style.column}>
                <p>Engenheira Cartógrafa pela UERJ, tenho interesse na área de tecnologia em especial na área de desenvolvimento web.</p>
                <p>Durante minha graduação desenvolvi interesse pela computação ao realizar disciplinas relacionadas ao tema. Após me formar continuei o estudo nessa área e apliquei em algumas experiências de trabalho os meus conhecimentos. Mantendo este interesse, ingressei no mestrado de Ciência da Computação na UFF, na área de visualização de dados, onde decidi pela transição de carreira para a área de front-end.</p>
            </div>
        </div>
    )
}