import style from './education.module.scss';

export default function Education({className}: {className?: string} ) {
    const education = [
        {
            period: '2023 - Cursando',
            subject: 'Pós-Graduação - Engenharia de Software',
            university: 'PUC-Rio'
        },
        {
            period: '2020 - 2022 (Pausado)',
            subject: 'Mestrado - Ciência da Computação',
            university: 'Universidade Federal Fluminense (UFF)'
        },
        {
            period: '2014 - 2019',
            subject: 'Bacharelado - Engenharia Cartográfica',
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