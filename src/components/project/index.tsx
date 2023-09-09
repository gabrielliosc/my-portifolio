export default function Project(){
    const projects = [{
        title: 'Portifolio de Arte',
        description: 'Portifolio Anna Julia ....',
        tecnology: 'React, Bla bla',
        repository: 'github/'
    }, {
        title: 'Daily planner',
        description: 'Daily Planner baseado',
        tecnology: 'JavaScript, Bla bla',
        repository: 'github/'
    }]

    return (
        <ul>
            {projects.map((project, index) => (
                <li key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>{project.tecnology}</p>
                    <a>{project.repository}</a>
                </li>
            ))}
        </ul>
    )
}