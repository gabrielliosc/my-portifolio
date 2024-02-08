import { Section } from '../Section';
import { Education } from '../Education';
import { ContactInfo } from '../ContactInfo';

import style from './about.module.scss';
import profile from '../../assets/img/profile.png';
import profile_ligth from '../../assets/img/profile_ligth.png';

import { useState } from 'react';
import { ReactTyped } from "react-typed";
import { useTranslation } from 'react-i18next';

export function About({mode}: {mode: boolean}) {

    const { t } = useTranslation();
    
    const [education, setEducation] = useState(false)

    return (
        <Section title={t(`section.${'about'}`)}>
            <>
                <div className={style.content}>

                    {/* Minha imagem */}
                    <div className={style.row1}>
                        <img id="profile" className={style.profile} src={mode? profile_ligth: profile} alt="Mulher branca com cabelo magenta"></img>
                    </div>

                    <div className={style.row2}>
                            <ReactTyped className={style.dev} 
                            strings={[`> ${t("title")}`]} 
                            typeSpeed={50} 
                            startWhenVisible={true} />

                            <h3 className={style.name}>Gabrielli de Oliveira</h3>
                            <span className={style.line}><hr /></span>
                            <p className={style.about}>{t("about")}</p>
                            <span className={style.line}><hr /></span>

                            <p><button className={style.buttonAll} onClick={() => setEducation(!education)}> {education? 
                            t(`education.${'opened'}`): t(`education.${'closed'}`) 
                            }</button></p> 
                            <ContactInfo></ContactInfo>
                    </div>
                </div>

                    <Education className={education? undefined : style.none}></Education>
            </>
        </Section>
    )
}