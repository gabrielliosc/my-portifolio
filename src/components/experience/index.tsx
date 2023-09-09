export default function Experience(){
    const experiences = [{
        title: 'SMAS',
        role: 'Analista de Geoprocessamento',
        description: 'bla bla bla',
        skills: 'Python'
    }]
    return(
        <ul>
            {experiences.map((experience, index) => (
                <li key={index}>
                    <h3>{experience.title}</h3>
                    <h4>{experience.role}</h4>
                    <p>{experience.description}</p>
                    <p>{experience.skills}</p>
                </li>
            ))}
        </ul>
    )
}