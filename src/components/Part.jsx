const Part = ({course}) => {
    return (
        <div> 
            {course.parts.map(course => 
                <p key={course.id}>{course.name} {course.exercises}</p>
            )}
        </div>
    )
}

export default Part