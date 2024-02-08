import { t } from 'i18next';
import style from './education.module.scss';

export function Education({className}: {className?: string} ) {
    const education = [
        {
            period: '2023 - 2024',
            subject: `${t(`education.${'graduated'}`) +
            ' - ' + t(`education.${'software'}`)}`,
            university: 'PUC-Rio'
        },
        {
            period: `2020 - 2022 (${t(`education.${'status'}`)})`,
            subject: `${t(`education.${'master'}`) +
            ' - ' + t(`education.${'computer'}`)}`,
            university: 'Universidade Federal Fluminense (UFF)'
        },
        {
            period: '2014 - 2019',
            subject: `${t(`education.${'undergraduated'}`) +
            ' - ' + t(`education.${'carto'}`)}`,
            university: 'Universidade do Estado do Rio de Janeiro (UERJ)'
        }
    ]

    return (
        <section id="education" className={className? className : style.education}>
            <ul> {education.map((educItem, index) => (
                <li key={index}>
                    <p className={style.marker}>    </p>
                    <span>
                        <p>{educItem.period}</p>
                        <h4>{educItem.subject}</h4>
                        <h5>{educItem.university}</h5>
                    </span>
                    <span className={style.line}><hr /></span>
                </li>
            ))}
            </ul>
        </section>
    )
}