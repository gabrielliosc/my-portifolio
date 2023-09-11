
import style from './education.module.scss';

export default function Education() {
    const education = [
        {
            period: '2020 -',
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
        <div className={style.education}>
            <h1>Educação</h1>
            <ul> {education.map((educItem, index) => (
                <li key={index}>
                    <p>{educItem.period}</p>
                    <h3>{educItem.subject}</h3>
                    <h3>{educItem.university}</h3>
                </li>
            ))}
            </ul>
        </div>
    )
}