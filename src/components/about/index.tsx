import style from './about.module.scss';
import Contact from '../contact';
import Education from '../education';
import profile from '../../assets/img/profile.png';
import codeIcon from '../../assets/img/code-solid.svg';

import { useState } from 'react';
import { ReactTyped } from "react-typed";



export default function About() {

    const [education, setEducation] = useState(false)

    const myAppRef = document.getElementById('dev')

    return (
        <section id="about" className={style.about}>
            <h1><img src={codeIcon}></img><span>Sobre mim</span><img src={codeIcon}></img></h1>
            <div className={style.content}>
                <div className={style.row1}>
                    <img id="profile" className={style.profile} src={profile} alt="Mulher branca com cabelo magenta"></img>
                </div>
                <div className={style.row2}>
                <ReactTyped className={style.dev} strings={["> Desenvolvedora Frontend"]} typeSpeed={50} />
                    <h3>Gabrielli de Oliveira</h3>
                    <p>Engenheira em transição de carreira, apaixonada por desenvolvimento web e empoderamento de mulheres, dedicada à continua evolução cursando pós-graduação em Engenharia de Software.<button className={style.buttonAll} onClick={() => setEducation(!education)}> {education? 'Fechar formação' : 'Ver formação completa'}</button></p> 
                    <Contact></Contact>
                </div>
            </div>
            <Education className={education? undefined : style.none}></Education>
        </section>
    )
}