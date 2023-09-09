export default function Courses(){
    const courses = [{
        name: 'React',
        school: 'Alura',
        certificate: './'
    }]
    return (
        <>
        <h2>Cursos</h2>
        <ul>
            {courses.map((course, index) => (
                <li key={index}>
                    <h3> Curso: {course.name}</h3>
                    <p> Instituição: {course.school}</p>                    
                    <p> Certificado: {course.certificate}</p>
                </li>
            ))}
        </ul>
        </>
    )
}